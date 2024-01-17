import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Shop from "./components/shop/Shop.jsx";
import Login from "./components/login/Login.jsx";
import About from "./components/about/About.jsx";
import Navbar from "./shared/navbar/NavBar.jsx";
import ShoppingCard from './components/shoppingCard/Shopping.jsx'
import Verification from "./components/verification/Verification.jsx"
import NewProduct from "./components/newProduct/NewProduct.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/shoppingCard" element={<ShoppingCard/>}></Route>
        <Route path="/verification" element={<Verification/>}></Route>
        <Route path="/newProduct" element={<NewProduct/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
