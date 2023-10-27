import React from "react";
import img from "../assets/monitor.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-around items-center md:mx-44 mx-5 mt-8">
      <div className=" md:w-2/4 text-center">
        <h2 className=" text-5xl font-semibold leading-tight">
          Monitoring Suhu
        </h2>
        <p className=" text-lightText m-5 text-start">
          ini buat isinya barangkali mau isi something
        </p>

      </div>

      <div className=" w-56 md:w-1/4 ">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;