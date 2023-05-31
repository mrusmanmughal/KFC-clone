import { Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Components/Login/Login";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Product from "./Components/Category/Product";
import Cart from "./Components/Cart";
import Bucket from "./Components/Bucket";

const Routepath = () => {
  return (
    <div>
      <Cart />
      <Nav />
      <div className="w-4/5 m-auto">
        <Routes>
          <Route path="/" Component={App} />
          <Route path="/login" Component={Login} />
          <Route path="/product" Component={Product} />
          <Route path="/bucket" Component={Bucket} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Routepath;
