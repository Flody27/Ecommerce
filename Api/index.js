const express = require("express");
const mongoose = require("mongoose");
const config = require("./database");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const TOKEN = process.env.JWT_SECRET;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("Images"));
app.use(cookieParser());

app.use(
  cors({
    //TODO: Usar variable de entorno
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use((req, res, next) => {
  req.sesssion = null;
  const token = req.cookies?.access_token;
  try {
    const data = jwt.verify(token, TOKEN);
    req.sesssion = data;
  } catch {}

  next();
});

app.listen("8000", () => {
  console.log("Starting server in port 8000");
});

mongoose
  .connect(config.url)
  .then(() => {
    console.log("successfully connected to the database");
  })
  .catch((error) => {
    console.error(`Upps there was an error ${error}`);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname +
        "_" +
        Date.now() +
        file.originalname +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.array("images"), (req, res) => {
  let fileNames = req.files.map((file) => file.filename);
  res.json(fileNames);
});

// Routes
require("./app/routes/product.routes")(app);
require("./app/routes/commentProduct.routes")(app);
require("./app/routes/categoryProduct.routes")(app);
require("./app/routes/customer.routes")(app);
require("./app/routes/employee.routes")(app);
require("./app/routes/sales.routes")(app);
require("./app/routes/order.routes")(app);
require("./app/routes/refundRequest.routes")(app);
require("./app/routes/roles.routes")(app);
require("./app/routes/authentication.routes")(app);
