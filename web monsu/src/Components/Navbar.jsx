import React, { useState } from "react";
// import { Link } from 'react-scroll';
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/Newlogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex w-full justify-between items-center h-24 max-w-[1490px] text-black absolute z-10 px-10">
      <img src={Logo} alt="logo" className="md:ml-24 w-14" />
      <h1 className="px-4 w-full text-2xl font-bold text-white">MONSU.</h1>

      <ul className="font-bold text-lg text-white hidden md:flex mr-24">
        <li className="px-8 hover:text-emerald-900 transition cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-5 px-8 hover:text-emerald-900 transition cursor-pointer">
          <Link to="/About">About</Link>
        </li>
        <li className="px-8 hover:text-emerald-900 transition cursor-pointer">
          <Link to="/Login">Login</Link>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <ul
        className={
          nav
            ? "fixed right-8 top-20 w-[35%] h-56 rounded-2xl bg-gradient-to-b from-emerald-500 to-emerald-400 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div className="font-bold text-xl text-center text-white">
          <li className="mt-5 mx-6 py-3 px-4 hover:text-emerald-900 transition cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="my-3 mx-6 py-3 px-4 hover:text-emerald-900 transition cursor-pointer">
            <Link to="/About">About</Link>
          </li>
          <li className="mx-6 py-3 px-4 hover:text-emerald-900 transition cursor-pointer">
            <Link to="/Login">Login</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
