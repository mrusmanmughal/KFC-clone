import BrowsCategory from "./Components/BrowsCategory";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import TopSelling from "./Components/TopSelling";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <div className="w-4/5 m-auto">
        <Main />
        <BrowsCategory />
        <TopSelling />
      </div>
      <Footer />
    </>
  );
};

export default App;
