import { Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Components/Login/Login";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Product from "./Components/Category/Product";

const Routepath = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/login" Component={Login} />
        <Route path="/product" Component={Product} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Routepath;
