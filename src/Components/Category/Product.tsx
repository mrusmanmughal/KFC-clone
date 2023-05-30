import { useState } from "react";
import { ProductBtn } from "../../Data/productBtns";
import img from "../../assets/222.jpg";
const Product = () => {
  const [border, setborder] = useState(0);

  return (
    <div className="">
      <div className="  w-4/5 m-auto py-5 ">
        <div className="flex justify-center gap-5">
          {ProductBtn.map((val, i) => {
            return (
              <button
                key={i}
                className={
                  border !== i
                    ? "px-5 py-2 bg-red-700 gap-4 rounded text-white font-semibold "
                    : "px-5 py-2 bg-red-700 gap-4 rounded text-white font-semibold border-4 border-white"
                }
                onClick={() => setborder(i)}
              >
                {val.name}
              </button>
            );
          })}
        </div>

        <div className="flex text-white relative">
          <div className="w-80 h-80 bg-stone-900  absolute"></div>
          <div className="  z-10  p-20 flex justify-end">
            <img src={img} alt="" className="w-11/12 " />
          </div>
          <div className="p-10">
            <h1 className="text-4xl font-semibold my-5">Krunch Burger</h1>
            <p className="text-lg mt-5 text-gray-300">
              Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a
              sesame seed bun
            </p>
            <p className="my-5 text-2xl font-bold">
              Rs <span> 250</span>
            </p>

            <div className="flex gap-10">
              <div className="flex items-center">
                <button className="px-5 bg-red-700 rounded-md text-4xl">
                  {" "}
                  -{" "}
                </button>
                <p className="px-5"> 1 </p>
                <button className="px-5 bg-red-700 rounded-md text-4xl">
                  +
                </button>
              </div>
              <div>
                <button className="px-5 py-3 bg-red-700 rounded-md text-md p ">
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
