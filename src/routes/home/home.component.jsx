import Typed from "react-typed";
import Navbar from "../navbar/navbar.component";
import dp from "../../assets/IMG-20210305-WA0080.jpg"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-[1246px] mt-[20px] w-full h-screen mx-auto grid md:grid-cols-2 grid-rows-2 gap-4 align-middle justify-center">
    <div>
      <img src={dp} alt='Dipayan' className=" md:w-96 h-auto md:mt-48 rounded-full ml-20 md:ml-0 w-64 mr-80 "/>
        <p className=" ml-16 mt-5 ">Shri Dipayan Chakraborty</p>
        <p className=" ml-16 ">Hon'ble MLA, Silchar</p> 
        <p className=" ml-16 ">Convenor, Silchar Quiz Festival 2023</p> 
    </div>
    <div className=" text-[#8868ff]">
      <div className="max-w-[800px] md:mt-[-46px] w-full h-screen mx-auto text-center flex flex-col justify-center my-[-450px]">
        <p className="text-[#4e2686] font-bold p-2">
          GRWOING WITH KNOWLEDGE
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl md:py-6 font-bold">
          Silchar Quiz Fest.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold neo">
            Unlock Your Knowledge at Silchar Quiz Festival 2023: Where Champions Rise!
          </p>
        </div>
          <Typed
            className="md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-[#4e2686]"
            strings={["21st - 23rd November 2023 (Online)", "24th - 26th November 2023 (Offline)"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        <p className="md:text-2xl sm:text-xl font-bold text-[#6952bc] md:pt-5">
          A wonderful clebration of Knowledge and wisdom.<br></br>
          20 Quizzes | 6 Days
        </p>
        <button className="bg-[#4e2686] w-[200px] rounded-md font-medium text-white my-6 mx-auto py-3">
          <Link to='/register'>Register</Link>
        </button>
      </div>
    </div>
    </div>
    </>
  );
};

export default Hero;
