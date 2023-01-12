// import * as React from "react";
// import "../Navbar.css";
// import "./Product.css";
// import axios from "axios";
// import { Domain } from "../DominUrl";
// import { Fragment, useEffect } from "react";
//
// const MySidebar = () => {
//   const [initialprice, setInitialPrice] = React.useState(500);
//   const [endPrice, setEndPrice] = React.useState(15000);
//   const [brands, setBrands] = React.useState(null);
//
//   useEffect(() => {
//     getBrands();
//   },[]);
//
//   const getBrands = () => {
//     axios.get(Domain + "/api/brands/").then((res) => {
//       console.log(res.data.brands);
//       setBrands(res.data.brands);
//     });
//   };
//
//    const sendBrands = (brand)=>{
//      console.log("brand",brand)
//
//      let data={
//        "brand":brand
//      }
//       axios.post(Domain + "/api/products/",data).then((res) => {
//         console.log("res",res.data);
//     });
//     }
//
//   const handlePriceChange1 = (event) => {
//     setInitialPrice(event.target.value);
//   };
//
//   const handlePriceChange2 = (event) => {
//     setEndPrice(event.target.value);
//   };
//
//
//   return (
//     <>
//       <div
//         style={{
//           backgroundColor: "white",
//           borderRadius: "10px",
//           margin: "10px 0 10px 10px",
//           height: "auto",
//         }}
//       >
//         <div style={{ fontSize: "25px" }}>
//           <span style={{ marginRight: "10px" }}>Filters</span>
//           <i className="fa fa-filter"></i>
//         </div>
//         <div className="container">
//           <div
//             style={{
//               paddingTop: "20px",
//             }}
//           >
//             <div>
//               <input
//                 type={"number"}
//                 onChange={handlePriceChange1}
//                 value={initialprice}
//                 className={"input-style"}
//               />
//             </div>
//             <div>
//               <input
//                 type={"number"}
//                 onChange={handlePriceChange2}
//                 value={endPrice}
//                 className={"input-style"}
//               />
//             </div>
//             <button className="button-57" role="button">
//               <span className="text">Apply</span>
//             </button>
//           </div>{" "}
//           <nav>
//             <ul style={{ listStyleType: "none", fontSize: "18px" }}>
//               <li className={"mobile-menu"}>
//                 {/*<Link href={`/shop/?q=${}`} style={{ color: "black" }}>*/}
//                 <span>Brands</span>
//                 {/*</Link>*/}
//               </li>
//
//               <li className={"mobile-submenu"}>
//                 {brands
//                   ? brands.map((brand) => (
//                       <Fragment key={brand._id}>
//                           <div onClick={()=>sendBrands(brand.id)}>{brand.id}</div>
//                       </Fragment>
//                     ))
//                   : null}
//               </li>
//
//               <li className={"mobile-menu"}>
//                 <a href="/" style={{ color: "black" }}>
//                   <span>Categories</span>
//                 </a>
//               </li>
//
//               <li className={"mobile-submenu"}>
//                 <a href="/" style={{ color: "black" }}>
//                   <span>ASTRONOMY BINOCULARS</span>
//                 </a>
//               </li>
//
//               <li className={"mobile-menu"}>
//                 <a href="/" style={{ color: "black" }}>
//                   <span>Telescope Accessories</span>
//                 </a>
//               </li>
//
//               <li className={"mobile-submenu"}>
//                 <a href="/" style={{ color: "black" }}>
//                   <span>EYEPIECES</span>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// };
//
