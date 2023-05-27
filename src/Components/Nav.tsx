import Logo from "../assets/logo.png";
import DelivIvon from "../assets/NavDeliveryicon.png";
import PickUpIcon from "../assets/NavPickupICon.png";
import { BiCurrentLocation } from "react-icons/bi";
const Nav = () => {
  return (
    <div className="">
      <nav className="bg-black fixed top-0 left-0 right-0  z-50 py-3  ">
        <div className="w-4/5 m-auto border-3 border-white-900 flex justify-between  ">
          <div className="flex-col  items-center    gap-5   md:flex  lg:flex-row xl:flex   ">
            <div className="logo ">
              <img
                src={Logo}
                alt="Logo"
                className="hidden  sm:block lg:block xl:block "
              />
              <h1 className="font-bold text-white text-3xl sm:hidden lg:hidden xl:hidden ">
                KFC
              </h1>
            </div>
            <div className="font-bold text-xs sm:w-full flex  bg-stone-800 text-white rounded-full">
              <span className="bg-stone-500 p-1 px-2 flex items-center rounded-md">
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
            <div className="  border-2 px-4 text-lg  ">0</div>

            <div>
              <button className="bg-red-600 rounded-md py-1 px-2  font-semibold hover:bg-red-700 ">
                Register / Sign in
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
