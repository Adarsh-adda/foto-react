import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

export default function MobileHeader(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    props.toggleNavbar();
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="container">
        <nav>
          <ul style={{listStyleType: "none",fontSize:"18px"}}>
            <li className={"mobile-menu"} >
              <a href="/" style={{ color: "black" }}>
                <span>Home</span>
              </a>
            </li>

            <li className={"mobile-menu"}>
              <a href="/" style={{ color: "black" }}>
                <span>Telescope</span>
              </a>
            </li>

            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>REFRACTOR TELESCOPES</span>
              </a>
            </li>
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>REFLECTOR TELESCOPES</span>
              </a>
            </li>
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>CATADIOPTRIC TELESCOPES</span>
              </a>
            </li>
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>COMPUTERIZED TELESCOPES</span>
              </a>
            </li>
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>DOBSONIAN TELESCOPES</span>
              </a>
            </li>
            <li className={"mobile-menu"}>
              <a href="/" style={{ color: "black" }}>
                <span>Binocular</span>
              </a>
            </li>

            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>ASTRONOMY BINOCULARS</span>
              </a>
            </li>
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>WILDLIFE BINOCULARS</span>
              </a>
            </li>
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>ALL PURPOSE BINOCULAR</span>
              </a>
            </li>
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>SPOTTING SCOPES</span>
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
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>BARLOWS</span>
              </a>
            </li>
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>VIEWFINDERS AND FINDERSCOPES</span>
              </a>
            </li>
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>COLLIMATORS</span>
              </a>
            </li>
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>EYEPIECE FILTERS</span>
              </a>
            </li>
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>TELESCOPE PADDED BAGS AND KIT</span>
              </a>
            </li>
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>STAR DIAGONALS</span>
              </a>
            </li>
            <li className={"mobile-menu"}>
              <a href="/" style={{ color: "black" }}>
                <span>ASTROPHOTOGRAPHY ACCESSORIES</span>
              </a>
            </li>

            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>CAMERA ADAPTERS AND MOUNTS</span>
              </a>
            </li>
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>T-RINGS AND T-ADAPTERS/MOUNTS</span>
              </a>
            </li>
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>ASTROPHOTOGRAPHY TRIPODS</span>
              </a>
            </li>
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>FOCAL REDUCERS AND EXTENDERS</span>
              </a>
            </li>
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>NIGHT SKY TOOLS AND RESOURCES</span>
              </a>
            </li>
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>LASER POINTER</span>
              </a>
            </li>
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>RED TORCHES/LIGHTS</span>
              </a>
            </li>
            <li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>POWER BANKS/TANKS/CORDS</span>
              </a>
            </li><li className={"mobile-submenu"}>
              <a href="/" style={{ color: "black" }}>
                <span>RED TORCHES/LIGHTS</span>
              </a>
            </li>
            <li className={"mobile-menu"}>
              <a href="/" style={{ color: "black" }}>
                <span>Unboxed Products</span>
              </a>
            </li>

            <li className={"mobile-menu"}>
              <a href="/" style={{ color: "black" }}>
                <span>Brands</span>
              </a>
            </li>
            <li className={"mobile-menu"}>
              <a href="/" style={{ color: "black" }}>
                <span>Contact us</span>
              </a>
            </li>
            <li className={"mobile-menu"}>
              <a href="/" style={{ color: "black" }}>
                <span>About us</span>
              </a>
            </li>
            <li className={"mobile-menu"}>
              <a href="/" style={{ color: "black" }}>
                <span>Return & refund policy</span>
              </a>
            </li>


          </ul>
        </nav>
      </div>
    </Box>
  );

  return (
    <>
      <Drawer
        anchor={"left"}
        open={props.mobileOpen}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </>
  );
}
