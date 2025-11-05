import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/Logo.svg';
import { TbTruckDelivery } from "react-icons/tb";
import { BsBagHeart } from "react-icons/bs";
import { TbUserBolt } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";



function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');   


    return (
        <nav className="bg-white text-black  ">

            <div className="pb-5" >
                <div className='bg-black text-white text-center font-semibold mb-4 text-sm p-2 '>BEWARE: No one from our team will call you for offers, free gifts or payments.</div>

                <div className="flex items-center justify-between h-16 container m-auto sm:px-6 lg:px-9 pb-4  ">

                    {/* Brand */}
                    <div className="flex-shrink-0 text-xl font-bold">
                        <Link to="/">
                            <img className='w-50' src={Logo} alt="" />
                        </Link>

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-800 hover:text-black focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}
                                viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Menu Items */}

                    <div className="hidden md:flex md:items-center font-semibold text-md space-x-5 ">


                        <div className="relative w-full max-w-md">
                            
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600 text-2xl">
                                <BiSearchAlt />
                            </span>
                            <input
                                type="search"
                                placeholder="Search for Sunscreen"
                                className="w-full border rounded-md pl-10 pr-4 py-2 focus:outline-pink-500"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            
                        </div>
                        <div>
                            <Link to="/track-order"> <TbTruckDelivery className='text-3xl text-pink-500' /> </Link>
                        </div>
                        <div>
                            <Link to="/cart"> <BsBagHeart className='text-2xl text-pink-500' /> </Link>
                        </div>
                        <div>
                            <Link to="/login"> <TbUserBolt className='text-2xl text-pink-500' /> </Link>
                        </div>

                    </div>
                </div>

                <hr className='text-gray-300' />
                
                <div className="hidden md:flex justify-center space-x-15 font-medium text-lg text-gray-700 pt-4 md:px-8">
                    <Link to="/shop-all" className="hover:text-pink-500  ">SHOP ALL</Link>
                    <Link to="/skin-concern" className="hover:text-pink-500 ">SKIN CONCERN</Link>
                    <Link to="/shop-by-ingredients" className="hover:text-pink-500">INGREDIENTS</Link>
                    <Link to="/shop-by-skin-type" className="hover:text-pink-500">SKIN TYPE</Link>
                    <Link to="/best-seller" className="hover:text-pink-500">BEST SELLER</Link>
                    <Link to="/new-arrivals" className="hover:text-pink-500">NEW ARRIVALS</Link>
                    <Link to="/blogs" className="hover:text-pink-500">BLOGS</Link>
                </div>

            </div>


            {/* Mobile Menu Items */}
            {isOpen && (

                <div>
                    <div className="md:hidden md:items-center font-semibold text-md space-x-5 ">

                        <div className="relative w-[50%] max-w-md ps-4">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-6 text-gray-600 text-2xl">
                                <BiSearchAlt />
                            </span>
                            <input
                                type="search"
                                placeholder="Search for Sunscreen"
                                className="w-full border rounded-md pl-10 pr-4 py-2 focus:outline-none"
                            />
                        </div>
                        <div className='ps-4 pt-3'>
                            <Link to="/track-order"> <TbTruckDelivery className='text-3xl text-pink-500' /> </Link>
                        </div>
                        <div className='ps-4 pt-3'>
                            <Link to="/cart"> <BsBagHeart className='text-2xl text-pink-500' /> </Link>
                        </div>
                        <div className='ps-4 pt-3'>
                            <Link to="/login"> <TbUserBolt className='text-2xl text-pink-500' /> </Link>
                        </div>

                    </div>
                    <div className="md:hidden flex flex-col px-4 pt-2 pb-4 space-y-3 font-medium text-base bg-white">

                        <Link to="/shop-all" className="hover:text-pink-500">SHOP ALL</Link>
                        <Link to="/skin-concern" className="hover:text-pink-500">SKIN CONCERN</Link>
                        <Link to="/shop-by-ingredients" className="hover:text-pink-500">INGREDIENTS</Link>
                        <Link to="/shop-by-skin-type" className="hover:text-pink-500">SKIN TYPE</Link>
                        <Link to="/best-seller" className="hover:text-pink-500">BEST SELLER</Link>
                        <Link to="/new-arrivals" className="hover:text-pink-500">NEW ARRIVALS</Link>
                        <Link to="/blogs" className="hover:text-pink-500">BLOGS</Link>
                    </div>
                </div>


            )}
        </nav>
    );
}

export default Navbar;
