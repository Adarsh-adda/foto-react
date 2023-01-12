import "./App.css";
import Home from "./Home";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Product from "./components/ProductPage/Product";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage/ProductPage";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import {Contacts} from "@mui/icons-material";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Home/> }/>
                <Route path={"/shop/:id/"} element={<ProductPage/> }/>
                <Route path={"/shop"} element={<Product/> }/>
                <Route path={"/contact"} element={<ContactUs/> }/>
                <Route path={"/about"} element={<About/> }/>
                <Route path={"/login"} element={<Login/> }/>
                <Route path={"/register"} element={<Register/> }/>
                <Route path={"/*"} element={<>not found</> }/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
