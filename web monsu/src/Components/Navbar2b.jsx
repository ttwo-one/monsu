import React, { useState } from "react";
// import { Link } from 'react-scroll';
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.png";

const Navbar2b = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-28 max-w-screen-2xl mx-auto px-4 text-black bg-white">
      <img src={Logo} alt="logo" className="ml-5 w-14 h-14" />
      <h1 className="px-5 w-full text-3xl font-bold text-black">MONSU.</h1>
      <ul className="hidden md:flex mr-15">
        <Link to="/">
          <li className="font-bold text-lg py-3 px-8 rounded-2xl hover:bg-emerald-400 transition cursor-pointer">
            Home
          </li>
        </Link>
        <Link to="About">
          <li className="font-bold text-lg mx-5 py-3 px-8 rounded-2xl hover:bg-emerald-400  transition cursor-pointer">
            About
          </li>
        </Link>
        <li className="font-bold text-lg mr-20 py-3 px-8 rounded-2xl hover:bg-emerald-400  transition cursor-pointer">
          <Link to="Login">Login</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="px-5 block md:hidden">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <ul
        className={
          nav
            ? "fixed right-7 top-24 w-[35%] h-60 rounded-2xl bg-emerald-500 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        {/* <div className='flex justify-between items-center mt-7 mb-6'>
            <img src={Logo} alt="logo" className='ml-9 w-14 h-15' />
            <h1 className='px-5 w-full text-3xl font-bold text-black'>MONSU.</h1>
        </div> */}
        <Link to="/">
          <li className="text-xl text-center mt-7 mx-6 py-3 px-4 rounded-2xl hover:bg-slate-300 transition cursor-pointer">
            Home
          </li>
        </Link>
        <Link to="About">
          <li className="text-xl text-center my-3 mx-6 py-3 px-4 rounded-2xl hover:bg-slate-300 transition cursor-pointer">
            About
          </li>
        </Link>
        <Link to="Login">
          <li className="text-xl text-center mx-6 py-3 px-4 rounded-2xl  hover:bg-slate-300 transition cursor-pointer">
            Login
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar2b;
