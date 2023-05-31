import { PicsArr } from "../Data/HPMenu";
const BrowsCategory = () => {
  return (
    <div>
      <div>
        <div className="flex items-center gap-4 py-4">
          <h1 className="text-2xl font-bold  text-white">BrowseCategories</h1>

          <hr className="w-full  border-gray-500" />
        </div>
      </div>
      {/* menu-content starts here  */}
      <div className="  flex flex-direction-row overflow-x-scroll lg:justify-center lg:gap-5  py-5 ">
        {PicsArr.map((val, i) => {
          return <img src={val} alt="" key={i} className="w-40" />;
        })}
      </div>
    </div>
  );
};

export default BrowsCategory;
