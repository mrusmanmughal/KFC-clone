import { useState } from "react";
import { ProductBtn } from "../../Data/productBtns";
import img from "../../assets/222.jpg";
const Product = () => {
  const [border, setborder] = useState(0);

  return (
    <div className="">
      <div className="  container  m-auto py-5 ">
        <div className=" w-11/12   flex flex-direction-row overflow-x-scroll gap-5 justify-center ">
          {ProductBtn.map((val, i) => {
            return (
              <button
                key={i}
                className={
                  border !== i
                    ? " bg-red-700 gap-4 rounded text-white text-sm px-3 py-2 font-semibold lg:p-5"
                    : " bg-red-700 gap-4 rounded text-white  text-sm font-semibold px-3   border-4 border-white"
                }
                onClick={() => setborder(i)}
              >
                {val.name}
              </button>
            );
          })}
        </div>

        <div className="flex-col md:flex-row md:flex lg:flex-row 2xl:flex-row    relative text-white ">
          <div className="w-40 h-40 bg-stone-900   absolute"></div>

          <div className="p-10 flex justify-end ">
            <img src={img} alt="" className="z-10" />
          </div>
          <div className="p-10">
            <h1 className="text-4xl font-semibold mb-5">Krunch Burger</h1>
            <p className="text-lg mt-5 text-gray-300">
              Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a
              sesame seed bun
            </p>

            <div className="flex-col gap-10">
              <p className="my-5 text-2xl font-bold">
                Rs <span> 250</span>
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button className="px-5 bg-red-700 rounded-md  lg:text-3xl  text-xl">
                    -
                  </button>
                  <p className="px-5"> 1 </p>
                  <button className="px-5 bg-red-700 rounded-md lg:text-3xl  text-xl">
                    +
                  </button>
                </div>
                <button className="px-5 py-3 w-full lg:w-auto my-4 bg-red-700 rounded-md text-md p ">
                  {" "}
                  Add to Bucket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
