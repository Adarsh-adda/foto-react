import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import fujifilm from "../images/fujifilm.jpg";
import celestron from "../images/celestron.jpg";
import canon from "../images/canon.jpg";
import sony from "../images/telescope.png";
import panasonic from "../images/panasonic.jpg";
import hoya from "../images/hoya.jpg";
import joby from "../images/joby.jpg";
import nikon from "../images/nikon.jpg";
import "../components/Navbar.css";
import "../App.css"
const MultiSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };
  return (
    <>
      <b style={{ fontSize: "25px", padding: "10px" }}>Our Brands</b>

      {/* brand Slider */}
      <Carousel responsive={responsive} className={"brandSlider"}>
        <div style={{ margin: "15px" }}>
          <img src={fujifilm} alt={""} />
        </div>
        <div style={{ margin: "15px" }}>
          <img src={celestron} alt={""} />
        </div>
        <div style={{ margin: "15px" }}>
          <img src={nikon} alt={""} />
        </div>
        <div style={{ margin: "15px" }}>
          <img src={hoya} alt={""} />
        </div>
        <div style={{ margin: "15px" }}>
          <img src={canon} alt={""} />
        </div>
        <div style={{ margin: "15px" }}>
          <img src={joby} alt={""} />
        </div>
        <div style={{ margin: "15px" }}>
          <img src={sony} alt={""} />
        </div>
        <div style={{ margin: "15px" }}>
          <img src={panasonic} alt={""} />
        </div>
      </Carousel>

      {/* brand Slider */}
      <Carousel responsive={responsive} className={"product-slider"}>
                <div className="product__item" style={{margin:"15px"}}>
                   {/* image */}
                  <div
                    className="product__item__pic set-bg"
                      style={{
                        backgroundPosition: "center",
                        height: "250px",
                        backgroundSize:"contain"
                      }}
                    data-setbg={sony}
                  >
                     {/*<div className="label new">New</div>*/}
                    <ul className="product__hover">
                      <li>
                         {/* image */}
                        <a

                          href={sony}
                          className="image-popup"
                        >
                          <span className="arrow_expand"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span className="icon_bag_alt"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="/#">Buttons tweed blazer</a>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="product__price">$ 59.0</div>
                  </div>
                </div><div className="product__item" style={{margin:"15px"}}>
                   {/* image */}
                  <div
                    className="product__item__pic set-bg"
                      style={{
                        backgroundPosition: "center",
                        height: "250px",
                        backgroundSize:"contain"
                      }}
                    data-setbg={sony}
                  >
                     
                    <ul className="product__hover">
                      <li>
                         {/* image */}
                        <a

                          href={sony}
                          className="image-popup"
                        >
                          <span className="arrow_expand"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span className="icon_bag_alt"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="/#">Buttons tweed blazer</a>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="product__price">$ 59.0</div>
                  </div>
                </div><div className="product__item" style={{margin:"15px"}}>
                   {/* image */}
                  <div
                    className="product__item__pic set-bg"
                      style={{
                        backgroundPosition: "center",
                        height: "250px",
                        backgroundSize:"contain"
                      }}
                    data-setbg={sony}
                  >
                     
                    <ul className="product__hover">
                      <li>
                         {/* image */}
                        <a

                          href={sony}
                          className="image-popup"
                        >
                          <span className="arrow_expand"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span className="icon_bag_alt"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="/#">Buttons tweed blazer</a>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="product__price">$ 59.0</div>
                  </div>
                </div><div className="product__item" style={{margin:"15px"}}>
                   {/* image */}
                  <div
                    className="product__item__pic set-bg"
                      style={{
                        backgroundPosition: "center",
                        height: "250px",
                        backgroundSize:"contain"
                      }}
                    data-setbg={sony}
                  >
                     
                    <ul className="product__hover">
                      <li>
                         {/* image */}
                        <a

                          href={sony}
                          className="image-popup"
                        >
                          <span className="arrow_expand"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span className="icon_bag_alt"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="/#">Buttons tweed blazer</a>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="product__price">$ 59.0</div>
                  </div>
                </div><div className="product__item" style={{margin:"15px"}}>
                   {/* image */}
                  <div
                    className="product__item__pic set-bg"
                      style={{
                        backgroundPosition: "center",
                        height: "250px",
                        backgroundSize:"contain"
                      }}
                    data-setbg={sony}
                  >
                     
                    <ul className="product__hover">
                      <li>
                         {/* image */}
                        <a

                          href={sony}
                          className="image-popup"
                        >
                          <span className="arrow_expand"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span className="icon_bag_alt"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="/#">Buttons tweed blazer</a>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="product__price">$ 59.0</div>
                  </div>
                </div><div className="product__item" style={{margin:"15px"}}>
                   {/* image */}
                  <div
                    className="product__item__pic set-bg"
                      style={{
                        backgroundPosition: "center",
                        height: "250px",
                        backgroundSize:"contain"
                      }}
                    data-setbg={sony}
                  >
                     
                    <ul className="product__hover">
                      <li>
                         {/* image */}
                        <a

                          href={sony}
                          className="image-popup"
                        >
                          <span className="arrow_expand"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span className="icon_bag_alt"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="/#">Buttons tweed blazer</a>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="product__price">$ 59.0</div>
                  </div>
                </div><div className="product__item" style={{margin:"15px"}}>
                   {/* image */}
                  <div
                    className="product__item__pic set-bg"
                      style={{
                        backgroundPosition: "center",
                        height: "250px",
                        backgroundSize:"contain"
                      }}
                    data-setbg={sony}
                  >
                     
                    <ul className="product__hover">
                      <li>
                         {/* image */}
                        <a

                          href={sony}
                          className="image-popup"
                        >
                          <span className="arrow_expand"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span className="icon_bag_alt"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="/#">Buttons tweed blazer</a>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="product__price">$ 59.0</div>
                  </div>
                </div><div className="product__item" style={{margin:"15px"}}>
                   {/* image */}
                  <div
                    className="product__item__pic set-bg"
                      style={{
                        backgroundPosition: "center",
                        height: "250px",
                        backgroundSize:"contain"
                      }}
                    data-setbg={sony}
                  >
                     
                    <ul className="product__hover">
                      <li>
                         {/* image */}
                        <a

                          href={sony}
                          className="image-popup"
                        >
                          <span className="arrow_expand"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span className="icon_bag_alt"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="/#">Buttons tweed blazer</a>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="product__price">$ 59.0</div>
                  </div>
                </div>
      </Carousel>
    </>
  );
};
export default MultiSlider;
