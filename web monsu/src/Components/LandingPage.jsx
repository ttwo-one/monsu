import React from "react";
import Login from "./_Auth2/Login";
import img from "../assets/Bg-lp-fix.png";

const LPage = () => {
  return (
    <div className="w-full h-full relative bg-teal-800">
      <img
        className="top-0 left-0 h-screen w-full object-cover"
        src={img}
        alt="img"
      />
    </div>
  );
};

export default LPage;
