import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Create, Get } from "../../Services/Api";
import { object, string, number, array } from "yup";
import Swal from "sweetalert2";
import axios from "axios";

export default function AddProduct() {
  const title = "Agregar Producto";

  const [imagesUI, setImagesUI] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tag, setTag] = useState("");

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    discount: 0,
    brand: "",
    category: "",
    quantity: 0,
    images: [],
    tags: [],
  });

  const schemaProduct = object().shape({
    name: string()
      .required("El campo nombre es obligatorio")
      .typeError("Valor incorrecto en el campo Nombre"),
    description: string()
      .required("El campo detalles es obligatorio")
      .typeError("Valor incorrecto en el campo detalles"),
    price: number()
      .typeError("El valor del campo precio debe ser numerico")
      .required("El campo precio es obligatorio"),
    discount: number().typeError("El valor del campo precio debe ser numerico"),
    brand: string()
      .required("El campo marca es obligatorio")
      .typeError("Valor incorrecto en el campo marca"),
    category: string().required("El campo categoria es obligatorio"),
    quantity: number()
      .typeError("El valor del campo cantidad debe ser numerico")
      .required("El campo cantidad es obligatorio"),
    images: array().min(1, "Debe agregar al menos una imagen"),
    tags: array(),
  });

  useEffect(() => {
    GetCategories();
  }, []);

  useEffect(() => {
    setProduct({ ...product, tags: tags });
  }, [tags]);

  const HandleInputChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  function GetCategories() {
    Get("/getCategories").then((categories) => {
      setCategories(categories.data);
    });
  }

  function AddImage(event) {
    const filesArray = Array.from(event.target.files);
    const imagesArray = filesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    console.log(filesArray);
    setImagesUI((img) => img.concat(imagesArray));
    setProduct({ ...product, images: filesArray });
  }

  function DeleteImage(index) {
    setImagesUI((img) => img.filter((_, i) => i !== index));
    setProduct({
      ...product,
      images: product.images.filter((_, i) => i !== index),
    });
  }

  function AddTag(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      setTags((x) => x.concat(tag));
      setTag("");
    }
  }

  function DeleteTag(tagremove) {
    setTags((tag) => tag.filter((x) => x != tagremove));
  }

  async function HandleSubmit() {
    try {
      await schemaProduct.validate(product, { abortEarly: false });

      const formData = new FormData();
      product.images.forEach((img) => {
        formData.append("images", img);
      });

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const uploadedImageNames = response.data;

      const updatedProduct = {
        ...product,
        images: uploadedImageNames,
      };

      await Create("/addProduct", updatedProduct);

      Swal.fire("Éxito", "Producto registrado exitosamente", "success").then(
        () => {
          window.location = "/Productos";
        }
      );
    } catch (error) {
      if (error.name === "ValidationError") {
        let message = "";
        error.inner.forEach((err) => {
          message += `<p>${err.message}<p/>`;
        });
        Swal.fire("Oops", message, "error");
      } else if (axios.isAxiosError(error)) {
        Swal.fire("Error subiendo imágenes", error.message, "error");
      } else {
        Swal.fire("Error", error.message, "error");
      }
      console.error("Error:", error);
    }
  }

  return (
    <Layout title={title}>
      <div className="container-fluid">
        <div className="row clearfix d-flex justify-content-center">
          <div className="col-lg-9 col-md-9 col-sm-9">
            <form className="card" noValidate autoSave="false" id="formData">
              <div className="body row">
                <div className="form-group mb-3 col-12">
                  <b>Nombre</b>
                  <input
                    type="text"
                    className="form-control"
                    aria-label=""
                    name="name"
                    id="name"
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-12">
                  <b>Detalles</b>
                  <textarea
                    name="description"
                    id="description"
                    aria-label="DescripcionDelProducto"
                    rows="2"
                    className="form-control"
                    required
                    onChange={HandleInputChange}
                  ></textarea>
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-4">
                  <b>Precio</b>
                  <input
                    type="number"
                    className="form-control"
                    aria-label="PrecioProdcuto"
                    name="price"
                    id="price"
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-4">
                  <b>Descuento</b>
                  <input
                    type="number"
                    className="form-control"
                    aria-label="PrecioProdcuto"
                    name="discount"
                    id="discount"
                    onChange={HandleInputChange}
                  />
                  <small>Porcentaje de descuento</small>
                </div>
                <div className="form-group mb-3 col-4">
                  <b>Cantidad</b>
                  <input
                    type="number"
                    className="form-control"
                    aria-label="PrecioProdcuto"
                    name="quantity"
                    id="quantity"
                    onChange={HandleInputChange}
                  />
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Marca</b>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="MarcaProducto"
                    name="brand"
                    id="brand"
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Categoria</b>
                  <select
                    className="custom-select"
                    id="category"
                    name="category"
                    required
                    defaultValue={"Selecione una categoría"}
                    onChange={HandleInputChange}
                  >
                    <option value="Selecione una categoría" disabled>
                      Selecione una categoría
                    </option>
                    {categories.map((category) => (
                      <option key={category._id} value={category.category}>
                        {category.category}
                      </option>
                    ))}
                  </select>
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-12">
                  <b>
                    Etiquetas <small>(Tags)</small>
                  </b>
                  <input
                    type="text"
                    className="form-control"
                    aria-label=""
                    name="tags"
                    id="tags"
                    value={tag}
                    onChange={(event) => {
                      setTag(event.target.value);
                    }}
                    onKeyDown={AddTag}
                  />
                  <small style={{ display: "block" }}>
                    Presionar enter para agregar tag
                  </small>

                  {tags.map((tag, key) => {
                    return (
                      <div className="card-tag" key={key}>
                        <p>{tag}</p>
                        <button type="button" onClick={() => DeleteTag(tag)}>
                          <i className="ti-close"></i>
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="form-group mb-3 col-12">
                  <b>Imagenes</b>
                  <div className="row">
                    {imagesUI.map((img, index) => {
                      return (
                        <div className="col-4" key={index}>
                          <div className="card img-card">
                            <img src={img} alt="" />
                            <button
                              type="button"
                              onClick={() => {
                                DeleteImage(index);
                              }}
                              className="btn-img-delete"
                            >
                              <i className="ti-trash"></i>
                            </button>
                          </div>
                        </div>
                      );
                    })}

                    <div className="col-4">
                      <label htmlFor="images">
                        <div className="card input-card-img">
                          <i className="ti-cloud-up"></i>
                        </div>
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        id="images"
                        value={""}
                        onChange={AddImage}
                        className="input-img"
                        multiple
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    onClick={() => HandleSubmit()}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
