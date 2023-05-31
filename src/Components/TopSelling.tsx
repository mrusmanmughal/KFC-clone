import { Link } from "react-router-dom";
import { secondMenu } from "../Data/HPMenu";
const TopSelling = () => {
  return (
    <div className="pb-20">
      <div className="py-5 flex gap-5 text-white items-center">
        <h1 className="text-2xl font-bold  ">TopSelling</h1>
        <hr className="w-full  border-gray-500" />
      </div>
      <div
        className="flex gap-5 justify-center flex-wrap
         "
      >
        {secondMenu.map((val, i) => {
          const { title, img, des, price } = val;
          return (
            <Link to="/product">
              <div
                key={i}
                className="text-white flex flex-col justify-between p-5 w-64 bg-stone-900 rounded-md relative "
              >
                <div className="overflow-hidden">
                  <img
                    src={img}
                    alt="Menu"
                    className="transition ease-in-out overflow-hidden duration-500  hover:translate hover:scale-110 "
                  />

                  <h1 className="text-xl py-3 font-bold">{title}</h1>
                  <p className="text-gray-200 overflow-auto ">{des}</p>
                </div>
                <div className="flex items-center justify-between       ">
                  <div className="font-bold text-2xl">Rs {price}</div>
                  <div>
                    <button className="font-semibold bg-red-600 text-sm py-2 px-3 rounded-md">
                      Add to bucket
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default TopSelling;
