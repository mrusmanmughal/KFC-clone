import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import DelivIvon from "../assets/NavDeliveryicon.png";
import PickUpIcon from "../assets/NavPickupICon.png";
import { BiCurrentLocation } from "react-icons/bi";
import e from "../assets/bucket-empty (1).png";
const Nav = () => {
  return (
    <header className=" ">
      <nav className="bg-black    py-3  ">
        <div className="w-4/5 m-auto border-3 border-white-900 flex justify-between  ">
          <div className="flex-col  items-center    gap-5   md:flex  lg:flex-row xl:flex   ">
            <div className="logo ">
              <Link to="/">
                <img
                  src={Logo}
                  alt="Logo"
                  className="hidden  w-24 sm:block lg:block xl:block "
                />
              </Link>
              <h1 className="font-bold text-white text-3xl sm:hidden lg:hidden xl:hidden ">
                KFC
              </h1>
            </div>
            <div className="font-bold text-xs sm:w-full flex  bg-stone-900 text-white rounded-full">
              <span className="bg-stone-700 p-1 px-2 flex items-center rounded-md">
                {" "}
                <img src={DelivIvon} alt="Delivery" className="px-2" /> DELIVERY
              </span>
              <span className="  p-1 px-2 rounded-md flex items-center">
                {" "}
                <img src={PickUpIcon} alt="PIckUP" className="px-2" /> PICKUP
              </span>
            </div>
          </div>
          <div className="flex-col items-center gap-3 text-white   md:flex-row lg:flex  xl:flex">
            <div className=" flex justify-center gap-3 bg-stone-800 rounded-full px-4 py-2">
              <BiCurrentLocation className=" text-red-600 text-2xl" /> Select
              Location
            </div>
            <div className="   relative  ">
              <img src={e} alt="" className="w-8" />
              <p className="absolute top-1 left-3 text-xl font-bold">0 </p>
            </div>

            <div>
              <button className="bg-red-600 rounded-md py-1 px-2  font-semibold hover:bg-red-700 ">
                <Link to="/login "> Register / Sign in</Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
