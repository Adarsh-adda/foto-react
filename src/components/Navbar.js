import "./../App.css";
import React from "react";
import logo from "./../images/logo.jpg";
import telecope from "./../images/telescope-logo.jpg";
import "./Navbar.css";
import MobileHeader from "./MobileHeader";
import {Link} from "react-router-dom";
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <header
        className="header"
        style={{ position: "sticky", top: "0", zIndex: "999" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-2">
              <div className="header__logo">
                  <Link to="/#">
                    <img src={logo} alt="" height={"50px"} />
                  </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <nav className="header__menu">
                <ul>
                  <li>
                    <Link to="/#">Home</Link>
                  </li>
                  <li>
                    <div style={{ display: "flex" }}>
                      <Link to="/about">About</Link> &nbsp;

                    </div>
                  </li>

                  <li>
                    <Link to={"/shop"} >Shop</Link>
                  </li>
                  <li>
                    <a href="/#">Unboxed Products</a>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <button className="button-62" role="button" style={{margin: "10px"}}>Deal of the Day</button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__right">
                <div className="header__right__auth">
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </div>
                <ul className="header__right__widget">
                  <li>
                    <span className="icon_search search-switch"></span>
                  </li>

                  <li>
                    <a href="/#">
                      <span className="icon_bag_alt"></span>
                      <div className="tip">2</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="canvas__open" onClick={toggleNavbar}>
            <i className="fa fa-bars"></i>
          </div>
          <div className={"header2"}>
            <nav
              className="header__menu"
              style={{
                padding: "0",
                display: "flex",
                justifyContent: "space-between",
                borderTop: "1px solid lightgrey",
              }}
            >
              <ul>
                <li>
                  <a href="/#">
                    <img
                      src={telecope}
                      alt=""
                      height={"40px"}
                      style={{ height: "50px", width: "50px", margin: "5px" }}
                    />
                    <div
                      style={{
                        margin: "5px",
                        color: "#111111",
                        fontWeight: "500",
                      }}
                    >
                      Telescope
                    </div>
                  </a>
                  <ul
                    className="dropdown"
                    style={{
                      marginTop: "70px",
                    }}
                  >
                    <li>
                      <a href="/#">Camera & Lenses</a>
                    </li>
                    <li>
                      <a href="/#">Telescope</a>
                    </li>
                    <li>
                      <a href="/#">Binocular</a>
                    </li>
                    <li>
                      <a href="/#">Spotting Scope</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/#">
                    <img
                      src={telecope}
                      alt=""
                      height={"40px"}
                      style={{ height: "50px", width: "50px", margin: "5px" }}
                    />
                    <div
                      style={{
                        margin: "5px",
                        color: "#111111",
                        fontWeight: "500",
                      }}
                    >
                      Telescope
                    </div>
                  </a>
                  <ul
                    className="dropdown"
                    style={{
                      marginTop: "70px",
                    }}
                  >
                    <li>
                      <a href="/#">Camera & Lenses</a>
                    </li>
                    <li>
                      <a href="/#">Telescope</a>
                    </li>
                    <li>
                      <a href="/#">Binocular</a>
                    </li>
                    <li>
                      <a href="/#">Spotting Scope</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/#">
                    <img
                      src={telecope}
                      alt=""
                      height={"40px"}
                      style={{ height: "50px", width: "50px", margin: "5px" }}
                    />
                    <div
                      style={{
                        margin: "5px",
                        color: "#111111",
                        fontWeight: "500",
                      }}
                    >
                      Telescope
                    </div>
                  </a>
                  <ul
                    className="dropdown"
                    style={{
                      marginTop: "70px",
                    }}
                  >
                    <li>
                      <a href="/#">Camera & Lenses</a>
                    </li>
                    <li>
                      <a href="/#">Telescope</a>
                    </li>
                    <li>
                      <a href="/#">Binocular</a>
                    </li>
                    <li>
                      <a href="/#">Spotting Scope</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/#">
                    <img
                      src={telecope}
                      alt=""
                      height={"40px"}
                      style={{ height: "50px", width: "50px", margin: "5px" }}
                    />
                    <div
                      style={{
                        margin: "5px",
                        color: "#111111",
                        fontWeight: "500",
                      }}
                    >
                      Telescope
                    </div>
                  </a>
                  <ul
                    className="dropdown"
                    style={{
                      marginTop: "70px",
                    }}
                  >
                    <li>
                      <a href="/#">Camera & Lenses</a>
                    </li>
                    <li>
                      <a href="/#">Telescope</a>
                    </li>
                    <li>
                      <a href="/#">Binocular</a>
                    </li>
                    <li>
                      <a href="/#">Spotting Scope</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/#">
                    <img
                      src={telecope}
                      alt=""
                      height={"40px"}
                      style={{ height: "50px", width: "50px", margin: "5px" }}
                    />
                    <div
                      style={{
                        margin: "5px",
                        color: "#111111",
                        fontWeight: "500",
                      }}
                    >
                      Telescope
                    </div>
                  </a>
                  <ul
                    className="dropdown"
                    style={{
                      marginTop: "70px",
                    }}
                  >
                    <li>
                      <a href="/#">Camera & Lenses</a>
                    </li>
                    <li>
                      <a href="/#">Telescope</a>
                    </li>
                    <li>
                      <a href="/#">Binocular</a>
                    </li>
                    <li>
                      <a href="/#">Spotting Scope</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/#">
                    <img
                      src={telecope}
                      alt=""
                      height={"40px"}
                      style={{ height: "50px", width: "50px", margin: "5px" }}
                    />
                    <div
                      style={{
                        margin: "5px",
                        color: "#111111",
                        fontWeight: "500",
                      }}
                    >
                      Telescope
                    </div>
                  </a>
                  <ul
                    className="dropdown"
                    style={{
                      marginTop: "70px",
                    }}
                  >
                    <li>
                      <a href="/#">Camera & Lenses</a>
                    </li>
                    <li>
                      <a href="/#">Telescope</a>
                    </li>
                    <li>
                      <a href="/#">Binocular</a>
                    </li>
                    <li>
                      <a href="/#">Spotting Scope</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/#">
                    <img
                      src={telecope}
                      alt=""
                      height={"40px"}
                      style={{ height: "50px", width: "50px", margin: "5px" }}
                    />
                    <div
                      style={{
                        margin: "5px",
                        color: "#111111",
                        fontWeight: "500",
                      }}
                    >
                      Telescope
                    </div>
                  </a>
                  <ul
                    className="dropdown"
                    style={{
                      marginTop: "70px",
                    }}
                  >
                    <li>
                      <a href="/#">Camera & Lenses</a>
                    </li>
                    <li>
                      <a href="/#">Telescope</a>
                    </li>
                    <li>
                      <a href="/#">Binocular</a>
                    </li>
                    <li>
                      <a href="/#">Spotting Scope</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/#">
                    <img
                      src={telecope}
                      alt=""
                      height={"40px"}
                      style={{ height: "50px", width: "50px", margin: "5px" }}
                    />
                    <div
                      style={{
                        margin: "5px",
                        color: "#111111",
                        fontWeight: "500",
                      }}
                    >
                      Telescope
                    </div>
                  </a>
                  <ul
                    className="dropdown"
                    style={{
                      marginTop: "70px",
                    }}
                  >
                    <li>
                      <a href="/#">Camera & Lenses</a>
                    </li>
                    <li>
                      <a href="/#">Telescope</a>
                    </li>
                    <li>
                      <a href="/#">Binocular</a>
                    </li>
                    <li>
                      <a href="/#">Spotting Scope</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/#">
                    <img
                      src={telecope}
                      alt=""
                      height={"40px"}
                      style={{ height: "50px", width: "50px", margin: "5px" }}
                    />
                    <div
                      style={{
                        margin: "5px",
                        color: "#111111",
                        fontWeight: "500",
                      }}
                    >
                      Telescope
                    </div>
                  </a>
                  <ul
                    className="dropdown"
                    style={{
                      marginTop: "70px",
                    }}
                  >
                    <li>
                      <a href="/#">Camera & Lenses</a>
                    </li>
                    <li>
                      <a href="/#">Telescope</a>
                    </li>
                    <li>
                      <a href="/#">Binocular</a>
                    </li>
                    <li>
                      <a href="/#">Spotting Scope</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/#">
                    <img
                      src={telecope}
                      alt=""
                      height={"40px"}
                      style={{ height: "50px", width: "50px", margin: "5px" }}
                    />
                    <div
                      style={{
                        margin: "5px",
                        color: "#111111",
                        fontWeight: "500",
                      }}
                    >
                      Telescope
                    </div>
                  </a>
                  <ul
                    className="dropdown"
                    style={{
                      marginTop: "70px",
                      right: "-14px",
                      left: "auto",
                    }}
                  >
                    <li>
                      <a href="/#">Camera & Lenses</a>
                    </li>
                    <li>
                      <a href="/#">Telescope</a>
                    </li>
                    <li>
                      <a href="/#">Binocular</a>
                    </li>
                    <li>
                      <a href="/#">Spotting Scope</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {mobileOpen && (
        <div className={"mobile-header"}>
          <MobileHeader toggleNavbar={toggleNavbar} mobileOpen={mobileOpen} />
        </div>
      )}
      {/*header mobile */}
      {/*<div className="offcanvas-menu-overlay"></div>*/}
      {/*<div className="offcanvas-menu-wrapper">*/}
      {/*  <div*/}
      {/*    className="offcanvas__close"*/}
      {/*    style={{*/}
      {/*      border: "none",*/}
      {/*      transform: "none",*/}
      {/*      right: "10px",*/}
      {/*      top: "100px",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <img*/}
      {/*      src="https://img.icons8.com/ios-glyphs/60/null/macos-close.png"*/}
      {/*      alt={""}*/}
      {/*    />*/}
      {/*  </div>*/}

      {/*  <ul className="offcanvas__widget" style={{ marginTop: "80px" }}>*/}
      {/*    <li>*/}
      {/*      <span className="icon_search search-switch"></span>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <a href="/#">*/}
      {/*        <span className="icon_bag_alt"></span>*/}
      {/*        <div className="tip">2</div>*/}
      {/*      </a>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*  <div id="mobile-menu-wrap"></div>*/}
      {/*  <div className="offcanvas__auth">*/}
      {/*    <a href="/#">Login</a>*/}
      {/*    <a href="/#">Register</a>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};

export default Navbar;
