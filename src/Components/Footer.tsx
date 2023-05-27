import logo from "./../assets/logo.png";
import store1 from "../assets/app-store.png";
import store2 from "../assets/google-store.png";

const Footer = () => {
  return (
    <div className="bg-stone-900  p-12 border-3 ">
      <div className="w-4/5 m-auto">
        <div className="  justify-center flex items-center pb-12">
          <img src={logo} alt="logo" className="w-24" />
        </div>
        <div className="flex  gap-5  text-stone-300">
          <div className="w-2/5  space-y-4   ">
            <h1 className="font-bold text-xl text-white">Information</h1>
            <p>About Us</p>
            <p>Mitao Bookh</p>

            <p>Mitao Bookh -Scholorship</p>
            <p>Privacy Policy </p>
            <p>Careers</p>
          </div>
          <div className="w-2/5 space-y-4">
            <h1 className="font-bold text-xl text-white">Location</h1>
            <p>Contact Us</p>
          </div>

          <div className="w-2/5 space-y-4">
            <h1 className="font-bold text-xl text-white">Get in Touch</h1>{" "}
            <p>Terms & Conditions</p>
          </div>

          <div className="w-2/5 space-y-4">
            <h1 className="font-bold text-xl text-white">
              <img src={store1} alt="Logo" className="mb-4" />
              <img src={store2} alt="Logo" />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
