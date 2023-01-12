import "../../App.css";
import { useEffect, useState, Fragment } from "react";
import * as React from "react";
import axios from "axios";
import { Domain } from "../DominUrl";
import "./Product.css";
import "../Navbar.css";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import ProductPage from "./ProductPage";
const Product = ({
  name,
  image,
  brand,
  description,
  price,
  rating,
  category,
  countInStock,
  numReviews,
  _id,
}) => {
  const [productdata, setproductData] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  const getProduct = () => {
    setIsLoad(true);
    axios.get(Domain + "/api/products/").then((res) => {
      console.log(res.data);
      setproductData(res.data.products);
      setIsLoad(false);
    });
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div
        className={"row no-gutters"}
        style={{ backgroundColor: "lightgrey" }}
      >
        <div className={"col-md-3"}>
          <MySidebar />
        </div>
        <div className={"col-md-9"}>
          {isLoad ? (
            <CircularProgress />
          ) : (
            <section
              className="section-products"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                margin: "10px",
              }}
            >
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-md-8 col-lg-6">
                    <div className="header">
                      <h2>Shop</h2>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ display: "flex" }}>
                  {productdata &&
                    productdata.map((product) => (
                      <Fragment key={product._id}>
                        <ProductData
                          name={product.name}
                          images={product.images}
                          _id={product._id}
                          brand_name={product.brand_name}
                          category_name={product.category_name}
                          description={product.description}
                          specification={product.specification}
                          features={product.features}
                          dealoftheday={product.dealoftheday}
                          rating={product.rating}
                          numReviews={product.numReviews}
                          price={product.price}
                          discount={product.discount}
                          sale_price={product.sale_price}
                          countInStock={product.countInStock}
                          createdAt={product.createdAt}
                        />
                      </Fragment>
                    ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};
export default Product;

// Sidebar

const MySidebar = () => {
  const [initialprice, setInitialPrice] = React.useState(0);
  const [endPrice, setEndPrice] = React.useState(15000);
  const [brands, setBrands] = React.useState(null);

  useEffect(() => {
    getBrands();
  }, []);

  const getBrands = () => {
    axios.get(Domain + "/api/brands/").then((res) => {
      console.log(res.data.brands);
      setBrands(res.data.brands);
    });
  };

  // const sendBrands = (brand)=>{
  //   console.log("brand",brand)
  //
  //   let data={
  //     "brand":brand
  //   }
  //    axios.post(Domain + "/api/products/",data).then((res) => {
  //      console.log("res",res.data);
  //  });
  //  }

  const handlePriceChange1 = (event) => {
    setInitialPrice(event.target.value);
  };

  const handlePriceChange2 = (event) => {
    setEndPrice(event.target.value);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          margin: "10px 0 10px 10px",
          height: "auto",
        }}
      >
        <div style={{ fontSize: "25px" }}>
          <span style={{ marginRight: "10px" }}>Filters</span>
          <i className="fa fa-filter"></i>
        </div>
        <div className="container">
          <div
            style={{
              paddingTop: "20px",
            }}
          >
            <div>
              <input
                type={"number"}
                onChange={handlePriceChange1}
                value={initialprice}
                className={"input-style"}
              />
            </div>
            <div>
              <input
                type={"number"}
                onChange={handlePriceChange2}
                value={endPrice}
                className={"input-style"}
              />
            </div>
            <button className="button-57">
              <span className="text">Apply</span>
            </button>
          </div>{" "}
          <nav>
            <ul style={{ listStyleType: "none", fontSize: "18px" }}>
              <li className={"mobile-menu"}>
                {/*<Link href={`/shop/?q=${}`} style={{ color: "black" }}>*/}
                <span>Brands</span>
                {/*</Link>*/}
              </li>

              <li className={"mobile-submenu"}>
                {brands
                  ? brands.map((brand) => (
                      <Fragment key={brand._id}>
                        <div>{brand.name}</div>
                      </Fragment>
                    ))
                  : null}
              </li>

              <li className={"mobile-menu"}>
                <a href="/" style={{ color: "black" }}>
                  <span>Categories</span>
                </a>
              </li>

              <li className={"mobile-submenu"}>
                <a href="/" style={{ color: "black" }}>
                  <span>BINOCULARS</span>
                </a>
              </li>

              <li className={"mobile-menu"}>
                <a href="/" style={{ color: "black" }}>
                  <span>Telescope Accessories</span>
                </a>
              </li>

              <li className={"mobile-submenu"}>
                <a href="/" style={{ color: "black" }}>
                  <span>EYEPIECES</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

// Products

const ProductData = ({
  name,
  _id,
  images,
  brand_name,
  category_name,
  description,
  specification,
  features,
  dealoftheday,
  rating,
  numReviews,
  price,
  sale_price,
  discount,
  countInStock,
  createdAt,
}) => {
  return (

    <>
      <div className="col-md-6 col-lg-4 col-xl-3 on-hover">
        <Link to={`/shop/${_id}`}>
          <div
            id="product-3"
            className="single-product"
            style={{
              boxShadow:
                "rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px",
            }}
          >
            <div className="part-1">
                  <img
                    alt={""}
                    src={Domain + images[0].image}
                    style={{ backgroundSize: "cover" }}
                  />

              <ul>
                <li>
                  {/* cart to be added */}
                  <a href="frontend/src/components/ProductPage/Product#">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <i
              className="fa fa-star"
              aria-hidden="true"
              style={{ color: "black" }}
            ></i>
            <i
              className="fa fa-star"
              aria-hidden="true"
              style={{ color: "black" }}
            ></i>
            <i
              className="fa fa-star"
              aria-hidden="true"
              style={{ color: "black" }}
            ></i>
            <i
              className="fa fa-star"
              aria-hidden="true"
              style={{ color: "black" }}
            ></i>
            <i
              className="fa fa-star"
              aria-hidden="true"
              style={{ color: "black" }}
            ></i>

            <div className="part-2">
              <h3 className="product-title">{name}</h3>
              <s
                style={{
                  color: "black",
                  opacity: "0.6",
                }}
              >
                <img
                  src="https://img.icons8.com/material-two-tone/24/null/rupee.png"
                  style={{ width: "19px", paddingBottom: "3px" }}
                />
                {price}
              </s>
              <h4 className="product-price">
                <img
                  src="https://img.icons8.com/color/48/null/rupee--v1.png"
                  style={{ width: "28px", marginLeft: "2px" }}
                />
                {sale_price}
              </h4>
              <div>
                <button
                  style={{
                    position: "relative",
                    paddingLeft: "30px",
                    marginBottom: "10px",
                  }}
                  className="button-57"
                >
                  <span className="text">Add to cart</span>
                  <i
                    style={{ position: "absolute", left: "8px", top: "13px" }}
                    className="fa fa-shopping-cart"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
