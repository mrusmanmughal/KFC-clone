import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import DelivIvon from "../assets/NavDeliveryicon.png";
import PickUpIcon from "../assets/NavPickupICon.png";
import { BiCurrentLocation } from "react-icons/bi";
import e from "../assets/bucket-empty (1).png";
import { useState } from "react";
import Cart from "./Cart";
const Nav = () => {
  const [tab, settab] = useState(1);
  const [Toggle, setToggle] = useState<boolean>(false);
  return (
    <header>
      <Cart open={Toggle} setToggle={setToggle} />
      <nav className="bg-black    py-3  ">
        <div className="w-3/4 px-5 lg:w-4/5 md:container m-auto   flex justify-between   ">
          <div className="flex-col  items-center  gap-5      md:flex  lg:flex-row xl:flex   ">
            <div>
              <Link to="/">
                <img
                  src={Logo}
                  alt="Logo"
                  className="hidden  w-24 md:w-16  sm:block lg:block  lg:w-28 xl:block "
                />
              </Link>
              <h1 className="font-bold text-white text-3xl sm:hidden lg:hidden xl:hidden ">
                KFC
              </h1>
            </div>
            <div className="font-bold text-xs sm:w-full flex  bg-stone-900 text-white rounded-full">
              <button
                className={
                  tab == 1
                    ? " bg-stone-700 p-1 px-2 flex items-center rounded-md"
                    : "p-1 px-2 flex items-center rounded-md"
                }
                onClick={() => settab(1)}
              >
                {" "}
                <img src={DelivIvon} alt="Delivery" className="px-2" /> DELIVERY
              </button>
              <button
                className={
                  tab == 2
                    ? " bg-stone-700 p-1 px-2 flex items-center rounded-md"
                    : "p-1 px-2 flex items-center rounded-md"
                }
                onClick={() => settab(2)}
              >
                {" "}
                <img src={PickUpIcon} alt="PIckUP" className="px-2" /> PICKUP
              </button>
            </div>
          </div>
          <div className="flex items-top gap-3 text-white  items-center  md:flex-row md:flex-wrap lg:flex  xl:flex">
            <button className="   bg-stone-800 rounded-full   gap-1  hidden   md:flex md:items-center md:p-3 lg:px-5 lg:gap-3">
              <BiCurrentLocation className=" text-red-600 md:text-md lg:text-2xl  " />
              <span> Select Location</span>
            </button>
            <div className="   relative    " onClick={() => setToggle(!Toggle)}>
              <p className="absolute md:left-3  left-2 font-bold">0 </p>

              <img src={e} alt="" className="w-6 md:w-8 " />
            </div>

            <div>
              <button className="bg-red-600 rounded-md    text-xs px-2 py-2 font-semibold  hover:bg-red-700 ">
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
