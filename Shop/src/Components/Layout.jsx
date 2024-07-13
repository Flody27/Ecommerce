// import "/assets/js/main.js";
import { useState } from "react";

export default function Layout({ children }) {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function ToggleCart() {
    return setShowCart(showCart ? false : true);
  }

  function ToggleMenu() {
    return setShowMenu(showMenu ? false : true);
  }

  return (
    <>
      <>
        {/* Header */}
        <header>
          {/* Header desktop */}
          <div className="container-menu-desktop">
            {/* Topbar */}
            {/* <div className="top-bar">
              <div className="content-topbar flex-sb-m h-full container">
                <div className="right-top-bar flex-w h-full">
                  <a href="#" className="flex-c-m trans-04 p-lr-25">
                    My Account
                  </a>
                  <a href="#" className="flex-c-m trans-04 p-lr-25">
                    EN
                  </a>
                </div>
              </div>
            </div> */}

            <div className="wrap-menu-desktop">
              <nav className="limiter-menu-desktop container">
                {/* Logo desktop */}
                <a href="/" className="logo">
                  <b>Tech</b>Shop
                </a>
                {/* Menu desktop */}
                <div className="menu-desktop">
                  <ul className="main-menu">
                    <li className="active-menu">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="product.html">Shop</a>
                    </li>
                    {/* <li class="label1" data-label1="hot">
								<a href="shoping-cart.html">Features</a>
							</li> */}
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>

                <div className="wrap-icon-header flex-w flex-r-m">
                  {/* <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                    <i className="zmdi zmdi-search" />
                  </div> */}
                  {/* Icon header ShopCart */}
                  <div
                    className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                    data-notify={2}
                    onClick={ToggleCart}
                  >
                    <i className="zmdi zmdi-shopping-cart" />
                  </div>
                  {/* <a
                    href="#"
                    className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                    data-notify={0}
                  >
                    <i className="zmdi zmdi-favorite-outline" />
                  </a> */}
                </div>
              </nav>
            </div>
          </div>
          {/* Header Mobile */}
          <div className="wrap-header-mobile">
            {/* Logo moblie */}
            <div className="logo-mobile">
              <a href="/">
                <b>Tech</b>Shop
              </a>
            </div>
            {/* Icon header */}
            <div className="wrap-icon-header flex-w flex-r-m m-r-15">
              {/* <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                <i className="zmdi zmdi-search" />
              </div> */}
              <div
                className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
                data-notify={2}
                onClick={ToggleCart}
              >
                <i className="zmdi zmdi-shopping-cart" />
              </div>
              {/* <a
                href="#"
                className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
                data-notify={0}
              >
                <i className="zmdi zmdi-favorite-outline" />
              </a> */}
            </div>
            {/* Button show menu */}
            <div className="hamburger" onClick={ToggleMenu}>
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </div>
          </div>
          {/* Modal Search */}
          {/* <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
            <div className="container-search-header">
              <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
                <img src="images/icons/icon-close2.png" alt="CLOSE" />
              </button>
              <form className="wrap-search-header flex-w p-l-15">
                <button className="flex-c-m trans-04">
                  <i className="zmdi zmdi-search" />
                </button>
                <input
                  className="plh3"
                  type="text"
                  name="search"
                  placeholder="Search..."
                />
              </form>
            </div>
          </div> */}
        </header>
        {/* TODO: Cambiar las clases por sidemenu generic */}
        {/* Cart */}
        <div
          className={`wrap-header-cart js-panel-cart ${
            showCart ? "show-header-cart" : ""
          }`}
        >
          <div className="s-full" />
          <div className="header-cart flex-col-l p-l-65 p-r-25">
            <div className="header-cart-title flex-w flex-sb-m p-b-8">
              <span className="mtext-103 cl2">Your Cart</span>
              <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                <i className="zmdi zmdi-close" onClick={ToggleCart} />
              </div>
            </div>
            <div className="header-cart-content flex-w js-pscroll">
              <ul className="header-cart-wrapitem w-full">
                {/* Cart Item Ejemplo */}
                {/* <li class="header-cart-item flex-w flex-t m-b-12">
						<div class="header-cart-item-img">
							<img src="images/item-cart-01.jpg" alt="IMG">
						</div>

						<div class="header-cart-item-txt p-t-8">
							<a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
								White Shirt Pleat
							</a>

							<span class="header-cart-item-info">
								1 x $19.00
							</span>
						</div>
					</li> */}
              </ul>
              <div className="w-full">
                <div className="header-cart-total w-full p-tb-40">
                  Total: $75.00
                </div>
                <div className="header-cart-buttons flex-w w-full">
                  <a
                    href="shoping-cart.html"
                    className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
                  >
                    View Cart
                  </a>
                  <a
                    href="shoping-cart.html"
                    className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10"
                  >
                    Check Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MENU-RESPONSIVE */}
        <div
          className={`wrap-header-cart js-panel-cart ${
            showMenu ? "show-header-cart" : ""
          }`}
        >
          <div className="s-full" />
          <div className="header-cart flex-col-l p-l-65 p-r-25">
            <div className="header-cart-title flex-w flex-sb-m p-b-8">
              <span className="mtext-103 cl2">Menu</span>
              <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                <i className="zmdi zmdi-close" onClick={ToggleMenu} />
              </div>
            </div>
            <div className="header-cart-content flex-w js-pscroll"></div>
          </div>
        </div>

        <div className="content">
          <div className="container">{children}</div>
        </div>

        {/* Footer */}
        <footer className="bg3 p-t-75 p-b-32">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-4 p-b-50">
                <h4 className="stext-301 cl0 p-b-30">Categories</h4>
                <ul>
                  <li className="p-b-10">
                    <a href="/" className="stext-107 cl7 hov-cl1 trans-04">
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="p-b-10">
                    <a href="/" className="stext-107 cl7 hov-cl1 trans-04">
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="p-b-10">
                    <a href="/" className="stext-107 cl7 hov-cl1 trans-04">
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="p-b-10">
                    <a href="/" className="stext-107 cl7 hov-cl1 trans-04">
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-4 p-b-50">
                <h4 className="stext-301 cl0 p-b-30">Help</h4>
                <ul>
                  <li className="p-b-10">
                    <a href="/" className="stext-107 cl7 hov-cl1 trans-04">
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="p-b-10">
                    <a href="/" className="stext-107 cl7 hov-cl1 trans-04">
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="p-b-10">
                    <a href="/" className="stext-107 cl7 hov-cl1 trans-04">
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="p-b-10">
                    <a href="/" className="stext-107 cl7 hov-cl1 trans-04">
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-4 p-b-50">
                <h4 className="stext-301 cl0 p-b-30">GET IN TOUCH</h4>
                <p className="stext-107 cl7 size-201">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum, omnis modi aut consequatur voluptatem
                </p>
                <div className="p-t-27">
                  <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                    <i className="fa fa-instagram" />
                  </a>
                  <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                    <i className="fa fa-pinterest-p" />
                  </a>
                </div>
              </div>
              {/* <div className="col-sm-6 col-lg-3 p-b-50">
                <h4 className="stext-301 cl0 p-b-30">Newsletter</h4>
                <form>
                  <div className="wrap-input1 w-full p-b-4">
                    <input
                      className="input1 bg-none plh1 stext-107 cl7"
                      type="text"
                      name="email"
                      placeholder="email@example.com"
                    />
                    <div className="focus-input1 trans-04" />
                  </div>
                  <div className="p-t-18">
                    <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div> */}
            </div>
            <div className="p-t-40">
              <div className="flex-c-m flex-w p-b-18">
                <a href="#" className="m-all-1">
                  <img
                    src="../assets/images/icons/icon-pay-01.png"
                    alt="ICON-PAY"
                  />
                </a>
                <a href="#" className="m-all-1">
                  <img
                    src="../assets/images/icons/icon-pay-02.png"
                    alt="ICON-PAY"
                  />
                </a>
                <a href="#" className="m-all-1">
                  <img
                    src="../assets/images/icons/icon-pay-03.png"
                    alt="ICON-PAY"
                  />
                </a>
                <a href="#" className="m-all-1">
                  <img
                    src="../assets/images/icons/icon-pay-04.png"
                    alt="ICON-PAY"
                  />
                </a>
                <a href="#" className="m-all-1">
                  <img
                    src="../assets/images/icons/icon-pay-05.png"
                    alt="ICON-PAY"
                  />
                </a>
              </div>
              <p className="stext-107 cl6 txt-center">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | Made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>{" "}
                &amp; distributed by{" "}
                <a href="https://themewagon.com" target="_blank">
                  ThemeWagon
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </footer>
        {/* Back to top */}
        <div className="btn-back-to-top" id="myBtn">
          <span className="symbol-btn-back-to-top">
            <i className="zmdi zmdi-chevron-up" />
          </span>
        </div>
      </>
    </>
  );
}
