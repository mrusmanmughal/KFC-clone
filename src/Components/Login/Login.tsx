import hi from "../../assets/login.gif";
import google from "../../assets/google-icon.svg";
const Login = () => {
  return (
    <div className="   login   py-16">
      <div className="bg-stone-900   lg:w-3/4 md:container  m-auto  rounded p-10  ">
        <div className="flex">
          <div className="w-1/2 pt-10">
            <img src={hi} alt="" />
          </div>
          <div className="w-1/2 py-5 px-10">
            <h1 className="font-bold text-4xl text-white">Welcome!</h1>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="border-b   white bg-stone-800 rounded-t-lg p-3 my-5 w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border-b white bg-stone-800 rounded-t-lg p-3 mb-5 w-full "
              />
            </div>
            <div>
              <button className="bg-red-600 w-full  p-3 rounded-md text-white font-semibold ">
                Login
              </button>
            </div>
            <div className="flex   items-center">
              <hr className=" w-20" />
              <p className="p-8 font-bold text-white md:text-xs md:p-2 lg:p-7 lg:text-lg">
                Or Login With
              </p>
              <hr className=" w-20" />
            </div>
            <div className="flex justify-center">
              <img src={google} alt="" className="bg-white p-3 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
