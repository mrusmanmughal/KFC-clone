import { Link } from "react-router-dom";
import e from "../../src/assets/bucket-empty (1).png";
import pic from "../assets/222.jpg";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
interface prop {
  open: boolean;
  setToggle: (value: boolean) => void;
}
const Cart = (val: prop) => {
  const { open, setToggle } = val;
  return (
    <div
      className={open ? "block transition-all  duration-500" : "hidden"}
      onClick={() => setToggle(false)}
    >
      <div className=" z-40 w-full h-screen text-white absolute   bg-gradient-to-r from-slate-700 to-transparent">
        <section className="sidemenu  bg-red-900  flex justify-end  relative  text-white ">
          <div className="lg:w-1/3 md:w-1/3 w-full   flex flex-col justify-between   h-screen p-5   bg-black absolute top-0 z-20">
            <div>
              <div className="flex justify-between gap-2 mb-10">
                <div className="flex gap-3">
                  <img src={e} alt="" className="w-8 " />
                  <h1 className="text-2xl font-semibold">Your Bucket</h1>
                </div>
                <p className="justify-end font-bold text-2xl">
                  Rs <span>500</span>{" "}
                  <span
                    className="text-2xl font-bold cursor-pointer"
                    onClick={() => setToggle(false)}
                  >
                    X
                  </span>
                </p>
              </div>

              <div className="bg-stone-900 my-5 rounded-md p-3 flex justify-between text-white">
                <div className="flex gap-2 items-center">
                  <img src={pic} alt="" className="w-16" />
                  <div>
                    <h1>Krunch Burger</h1>
                    <div className="flex items-center gap-3 px-2">
                      <button className="text-xl text-red-600">
                        <AiOutlineMinus />
                      </button>{" "}
                      <span>2</span>{" "}
                      <button className="  text-md text-red-600 ">
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  Rs <span>5600</span>
                </div>
              </div>
            </div>

            <div>
              <Link to="/bucket">
                <button className="bg-red-700 w-full rounded-md py-2 my-4">
                  {" "}
                  View Bucket{" "}
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
