import React, {useState} from "react";
import Logo from "../assets/logo.png"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar2 = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <div className='flex justify-between item-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
            <img src={Logo} alt="logo" className='bg-white-500 w-10 h-10' />
            <h1 className='w-full text-3xl font-bold text-black'>MonSu.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Login</li>    
            </ul>  
            <div onClick={handleClick} className='block md:hidden'>
                {click ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
            </div>
            <div className={!click ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'fixed-left-[-100%]'}>
                <div className='flex justify-between item-center px-5'>
                    <img src={Logo} alt="logo" className='bg-white-500 w-10 h-10 my-3 mx-1' />
                    <h1 className='w-full text-3xl font-bold text-black mx-auto my-3 mx-2'>MonSu.</h1>
                </div>
                <ul className='p-4'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 border-b border-gray-600'>Login</li> 
                </ul>
            </div>
        </div>
    )
}

export default Navbar2;