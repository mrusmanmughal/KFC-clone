import { AiFillEdit } from "react-icons/ai";
import { AiTwotoneRest } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

import pic from "../assets/222.jpg";
const Bucket = () => {
  return (
    <div className="text-white">
      <Checkpoint />

      <div className="flex  gap-10 mb-10">
        <div className="  w-full  ">
          <div className="bg-stone-900 p-8 rounded-2xl border-3  ">
            <div className="flex justify-between ">
              <div className="flex gap-5">
                <img src={pic} className="w-16" alt="" />
                <div>
                  <h1 className="font-bold text-lg">Krunch Burger</h1>
                  <p className="font-semibold text-2xl">
                    {" "}
                    Rs <span>250</span>
                  </p>
                  <div className="flex gap-3 items-center text-lg">
                    <AiOutlinePlus className="text-red-700" />
                    2
                    <AiOutlineMinus className="text-red-700" />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-lg font-bold my-1">
                  {" "}
                  Rs <span>250</span>
                </p>

                <span className="text-white text-red-700  text-2xl flex gap-2">
                  <AiTwotoneRest /> <AiFillEdit />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-stone-900     w-1/2 rounded-lg p-5">
          <div>
            <textarea
              className="bg-stone-700 w-full border-b rounded-md border-white   p-2 text-sm my-5"
              placeholder="Special Instruction (Additional)"
              rows="4"
            />
          </div>
          <div className=" flex justify-between mb-5">
            <div className="flex gap-3">
              {" "}
              <input
                type="checkbox"
                className="bg-black-900 border border-red-700"
              />
              <p className="font-semibold text-lg">Save for Future</p>
            </div>
            <div className="text-lg font-semibold  text-gray-500">0/200</div>
          </div>
          <div className="my-10">
            <button className="w-full  border-2 border-white rounded-md py-3">
              {" "}
              Done
            </button>
          </div>
          <div>
            <button className="w-full bg-red-700 rounded-md py-2">
              {" "}
              Proceed to Checkout{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bucket;
import { AiOutlineCheck } from "react-icons/ai";
const Checkpoint = () => {
  return (
    <div className="p-14">
      <div className="  flex items-center gap-5 justify-center ">
        <div className="text-center">
          <div className="rounded-full py-3 px-3 my-2 text-xl   bg-red-700 text-white">
            <AiOutlineCheck />
          </div>
          <p className="font-semibold ">MENU</p>
        </div>
        <hr className="text-white  w-40 border-red-700 " />
        <div className=" items-center">
          <div className="rounded-full py-3 px-5 text-lg  bg-red-700 text-white">
            2
          </div>
          <p className="font-semibold mt-2 ">Bucket</p>
        </div>
        <hr className="text-white  w-40 opacity-20 border-red-600 " />
        <div className=" items-center flex flex-col opacity-20">
          <div className="rounded-full py-3 px-5 text-lg   bg-red-700 text-white">
            3
          </div>
          <p className="font-semibold mt-2 ">Check out</p>
        </div>
      </div>
    </div>
  );
};

export { Checkpoint };
