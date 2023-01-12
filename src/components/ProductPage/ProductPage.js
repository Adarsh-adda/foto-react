import axios from "axios";
import { useParams } from "react-router-dom";
import { Domain } from "../DominUrl";
import * as React from "react";
import "./Product.css";
import { Fragment, useState } from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import satisfaction from "./../../images/satisfaction.png";
import premium from "./../../images/premium_quality.png";
import bestPrice from "./../../images/bestprice.jpg";
import secure from "./../../images/secure_payments.png";
import fast from "./../../images/fast_delivery.png";

const ProductPage = () => {
  const [product, setProduct] = useState("");
  const { id } = useParams();
  const singleProduct = () => {
    axios.get(Domain + `/api/products/${id}/`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
  };
  React.useEffect(() => {
    singleProduct();
  }, []);

  return (
    <>
      {product && (
        <div className={"container-fluid"} style={{ marginTop: "20px" }}>
          <div className={"row"}>
            <div className={"col-md-4"} style={{ textAlign: "start" }}>
              {/*<img src={Domain + product.images[0].image} alt={""} />*/}
              <Carousel>
                {product &&
                  product.images.map((images) => (
                    <Fragment>
                      <div>
                        <img src={Domain + images.image} alt={""} />
                      </div>
                    </Fragment>
                  ))}
              </Carousel>
            </div>
            <div className={"col-md-5"} style={{ textAlign: "start" }}>
              <h5 style={{ textTransform: "uppercase", opacity: "0.6" }}>
                {product.category_name}
              </h5>
              <h2 style={{ margin: "15px 15px 15px 0px" }}>{product.name}</h2>
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
              ></i>{" "}
              ({product.numReviews})
              <div style={{ display: "flex" }}>
                <h4 style={{ margin: "15px 15px 15px 0px", opacity: "0.6" }}>
                  <s>
                    <img
                      src="https://img.icons8.com/material-outlined/24/null/rupee.png"
                      style={{ paddingBottom: "3px" }}
                    />
                    {product.price}
                  </s>
                </h4>
                <h4 style={{ margin: "15px 15px 15px 0px" }}>
                  <img
                    src="https://img.icons8.com/material-outlined/24/null/rupee.png"
                    style={{ paddingBottom: "3px" }}
                  />
                  {product.sale_price}
                </h4>
              </div>
              <div>{product.description}</div>
              <div style={{ display: "flex" }}>
                <button
                  style={{
                    position: "relative",
                    paddingLeft: "30px",
                    marginBottom: "10px",
                    marginTop: "10px",
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

                <button className="button-87">Buy Now</button>
              </div>
              <div style={{marginTop:"50px"}}>
              <Tabs>
                <TabList>
                  <Tab>Descriptions</Tab>
                  <Tab>Specification</Tab>
                  <Tab>Features</Tab>
                </TabList>

                <TabPanel>
                  <div>{product.description}</div>
                </TabPanel>
                <TabPanel>
                  <div>{product.specification}</div>
                </TabPanel>
                <TabPanel>
                  <div>{product.features}</div>
                </TabPanel>
              </Tabs>
                </div>
            </div>
            <div className={"col-md-3"}>
              <img style={{ marginTop: "10px" }} src={bestPrice} alt={""} />
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div>
                  <img
                    style={{
                      marginTop: "10px",
                      width: "150px",
                      padding: "5px",
                    }}
                    src={satisfaction}
                    alt={""}
                  />
                </div>
                <div>
                  <img
                    style={{
                      marginTop: "10px",
                      width: "150px",
                      padding: "5px",
                    }}
                    src={premium}
                    alt={""}
                  />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div>
                  <img
                    style={{
                      marginTop: "10px",
                      width: "150px",
                      padding: "5px",
                    }}
                    src={secure}
                    alt={""}
                  />
                </div>
                <div>
                  <img
                    style={{
                      marginTop: "10px",
                      width: "150px",
                      padding: "5px",
                    }}
                    src={fast}
                    alt={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
