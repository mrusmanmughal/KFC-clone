import { Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Components/Login/Login";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const Routepath = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/login" Component={Login} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Routepath;
