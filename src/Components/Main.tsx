import pic from "../assets/cover.jpg";
const Main = () => {
  return (
    <>
      <main>
        <div>
          <img src={pic} alt="cover" className="bg-cover py-2" />
        </div>
      </main>
    </>
  );
};

export default Main;
