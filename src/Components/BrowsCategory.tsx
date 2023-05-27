import { PicsArr } from "../Data/HPMenu";
const BrowsCategory = () => {
  console.log(PicsArr);
  return (
    <div>
      <div className="py-5 flex gap-5  text-white">
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-2xl font-bold  ">BrowseCategories</h1>
          </div>
          <div>
            <hr />
          </div>
        </div>
      </div>
      {/* menu-content starts here  */}
      <div className="flex  justify-center flex-wrap     ">
        {PicsArr.map((val, i) => {
          return (
            <div key={i}>
              <img src={val} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrowsCategory;
