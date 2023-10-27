import React, { useState } from "react";
import { Link } from "react-scroll";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";
import Logo from "../assets/logo.png"


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () =>  setClick(!click);
  
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-emerald-500 transition">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="Home">
                    <li className="my-3 py-4 border-b border-slate-800 hover:bg-white hover:rounded">Home</li>
                </Link >
                <Link spy={true} smooth={true} to="About">
                    <li className="my-3 py-4 border-b border-slate-800 hover:bg-white hover:rounded">About</li>
                </Link>
                <Link spy={true} smooth={true} to="SignIn">
                    <li className="my-3 py-4 border-b border-slate-800 hover:bg-white hover:rounded">SignIn</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4 bg-emerald-500">
                <div className="flex items-center flex-1">
                    <img src={Logo} alt="logo" className="w-9 h-9 mr-2" />
                    <h1 className='w-full text-2xl font-bold text-black'>MonSu.</h1>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                    <ul className="flex gap-20 mr-16 text-[18px]">
                <Link spy={true} smooth={true} to="Home">
                    <li className="hover:text-white transition border-b-2 border-slate-900 hover:border-white cursor-pointer">Home</li>
                </Link>
                <Link spy={true} smooth={true} to="About">
                    <li className="hover:text-white transition border-b-2 border-slate-900 hover:border-white cursor-pointer">About</li>
                </Link>
                <Link spy={true} smooth={true} to="SignIn">
                    <li className="hover:text-white transition border-b-2 border-slate-900 hover:border-white cursor-pointer">SignIn</li>
                </Link>
            </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>

                <button className="block sm:hidden transtion" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/>}
                </button>

            </div>
        </nav>
    );
};

export default Navbar;