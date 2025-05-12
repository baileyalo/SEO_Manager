import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <><div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className=" rounded-lg text-center">
        <img
          src="/Logo.png"
          alt="Music SEO Icon"
          className="h-[350px] w-[350px] mx-auto" />
        <h1 className="text-3xl font-bold text-reprisk-blue mt-5 border-b-2 border-reprisk-yellow pb-1 ">
          Welcome to the new SEO Music Manager
        </h1>
      </div>
    </div><Footer /></>
  );
};

export default LandingPage;