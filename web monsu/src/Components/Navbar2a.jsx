import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/logo.png';

const Navbar2a = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-28 max-w-screen-2xl mx-auto px-4 text-black bg-white'>
      <img src={Logo} alt="logo" className='ml-5 w-14 h-15' />
      <h1 className='px-5 w-full text-3xl font-bold text-black'>MONSU.</h1>
      <ul className='hidden md:flex mr-15'>
        <Link to = "Home">
            <li className='font-bold text-xl py-4 px-10 rounded-2xl hover:bg-emerald-400 transition cursor-pointer'>Home</li>
        </Link>
        <Link to = "About">
            <li className='font-bold text-xl mx-5 py-4 px-10 rounded-2xl hover:bg-emerald-400  transition cursor-pointer'>About</li>
        </Link>
        <Link to = "Login">
            <li className='font-bold text-xl mr-20 py-4 px-10 rounded-2xl hover:bg-emerald-400  transition cursor-pointer'>Login</li>
        </Link>
      </ul>
      <div onClick={handleNav} className='px-5 block md:hidden'>
          {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[40%] h-full  border-r-emerald-500 bg-emerald-500 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <div className='flex justify-between items-center mt-7 mb-6'>
            <img src={Logo} alt="logo" className='ml-9 w-14 h-15' />
            <h1 className='px-5 w-full text-3xl font-bold text-black'>MONSU.</h1>
        </div>
        <Link to = "Home">
            <li className='text-xl mt-9 mx-6 py-4 px-4 rounded-2xl hover:bg-slate-200 transition cursor-pointer'>Home</li>
        </Link>
        <Link to = "About">
            <li className='text-xl mx-6 py-4 px-4 rounded-2xl hover:bg-slate-400 transition cursor-pointer'>About</li>
        </Link>
        <Link to = "Login">
            <li className='text-xl mx-6 py-4 px-4 rounded-2xl   hover:bg-emerald-400 transition cursor-pointer'>Login</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar2a;