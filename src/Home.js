import "./App.css"
import Navbar from "./components/Navbar";
import FeatureSlider from "./components/FeatureSlider";
import HomeBanner from "./components/HomeBanner";
import MultiSlider from "./components/MultiSlider";
import image from "./images/camera1.jpg";
import image2 from "./images/telescope1.jpg";
import image3 from "./images/binocular1.jpg";
import image4 from "./images/unboxedproducts1.jpg";
import image5 from "./images/accessories1.jpg";

const Home=()=>{
    return(
        <>
        <div className="maincontainer">
        <FeatureSlider/>
        <section className="categories">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div
                className="categories__item categories__large__item set-bg"
                data-setbg={image}
              >
                <div className="categories__text">
                  <h1 style={{color:"white"}}>Latest Camera's</h1>
                  <a style={{color:"white"}} href="/#">Shop now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    data-setbg={image2}
                  >
                    <div className="categories__text">
                      <h4 style={{color:"white"}}>Telescope</h4>
                      <a style={{color:"white"}} href="/#">Shop now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    data-setbg={image3}
                  >
                    <div className="categories__text">
                      <h4 style={{color:"white"}}>Binocular</h4>
                      <a style={{color:"white"}} href="/#">Shop now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    data-setbg={image4}
                  >
                    <div className="categories__text">
                      <h4 style={{color:"white"}}>Unboxed Products</h4>
                      <a style={{color:"white"}} href="/#">Shop now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    data-setbg={image5}
                  >
                    <div className="categories__text">
                      <h4 style={{color:"white"}}>Accessories</h4>
                      <a style={{color:"white"}} href="/#">Shop now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <br/>
        <MultiSlider/>

        <section className="services spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="services__item">
                  <i className="fa fa-car"></i>
                  <h6>Free Shipping</h6>
                  <p>For all oder over $99</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="services__item">
                  <i className="fa fa-money"></i>
                  <h6>Money Back Guarantee</h6>
                  <p>If good have Problems</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="services__item">
                  <i className="fa fa-support"></i>
                  <h6>Online Support 24/7</h6>
                  <p>Dedicated support</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="services__item">
                  <i className="fa fa-headphones"></i>
                  <h6>Payment Secure</h6>
                  <p>100% secure payment</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div className="search-model">
          <div className="h-100 d-flex align-items-center justify-content-center">
            <div
              className="search-close-switch"
              style={{
                transform: "none",
                border: "none",
                background: "white",
                height: "40px",
              }}
            >
              <img
                src="https://img.icons8.com/ios-glyphs/120/null/macos-close.png"
                style={{ height: "50px" }}
                alt={"wait"}
              />
            </div>
            <form className="search-model-form">
              <input
                type="text"
                id="search-input"
                placeholder="Search here....."
              />
            </form>
          </div>
        </div>
      </div></>
    );
}
export default Home;