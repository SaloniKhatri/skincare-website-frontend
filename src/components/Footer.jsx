import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.svg';

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const Footer = () => {
    return (
        <>

            <div className='bg-gray-100 grid grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-1  gap-4 p-10 text-black sm:text-center lg:text-start md:text-start '>
                <div>
                    <div className="flex-shrink-0 text-xl h-full flex items-center justify-center ">
                        <Link to="/">
                            <img className='w-60 pb-3 ' src={Logo} alt="" />
                        </Link>

                    </div>

                </div>

                <div>
                    <div> <h2 className='font-bold text-lg py-3'>KNOW US BETTER</h2></div>
                    <div>
                        <ul className='list-none space-y-1'>
                            <li>About Us</li>
                            <li>Affiliate Program</li>
                            <li>FAQ</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div> <h2 className='font-bold text-lg py-3'>HELP</h2></div>
                    <div>
                        <ul className='list-none space-y-1'>
                            <li>Contact Us</li>
                            <li>Grievance Officer</li>
                            <li>Our Policies</li>
                            <li>Terms & Conditions</li>
                            <li>Terms Of Service</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div> <h2 className='font-bold text-lg py-3'>ALSO AVALIABLE ON</h2></div>
                    <div>
                        <ul className='list-none space-y-1'>
                            <li>Nykaa</li>
                            <li>Amazon</li>
                            <li>Flipkart</li>
                            <li>Myntra</li>
                            <li>Purplle</li>
                        </ul>
                    </div>
                </div>

                <div>

                    <div>
                        <h2 className='font-bold text-lg py-3'>SIGN UP FOR UPDATES</h2>
                        <div className='flex flex-row lg:justify-start md:justify-start sm:justify-center '>
                            <div>  <input className='border border-pink-500 rounded-s-2xl p-2 focus:border-pink-500 focus:outline focus:outline-pink-500 font-semibold' type="email" name="" id="" placeholder='Enter yout email' /></div>
                            <div> <button className='border border-pink-500 rounded-e-2xl p-2 text-white bg-pink-500 font-semibold' type="button">SUBSCRIBE</button></div>

                        </div>

                    </div>
                    <div> <h2 className='font-bold text-lg py-3'>FOLLOW US</h2>
                        <div className='flex flex-row space-x-6 text-3xl text-pink-500  lg:justify-start md:justify-start sm:justify-center'>
                            <div><FaFacebook /></div>
                            <div> <FaInstagram /> </div>
                            <div> <FaYoutube /></div>
                        </div>



                    </div>

                </div>

            </div>
            <div>
                <h2 className='text-sm text-center text-gray-700 bg-gray-100'>©️ 2025 Dot & Key Wellness Ltd. All Rights Reserved.</h2>
            </div>

        </>
    )
}

export default Footer