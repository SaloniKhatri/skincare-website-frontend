import react, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { IoIosArrowDropright } from "react-icons/io";
import { MdOutlineCardGiftcard } from "react-icons/md";

import DryLogo from "../assets/images/drylogo.png"
import OilyLogo from "../assets/images/oilylogo.png"
import CombinationLogo from "../assets/images/combinationlogo.png"
import SensitiveLogo from "../assets/images/sensitivelogo.png"
import NormalLogo from "../assets/images/normallogo.png"

import SkinTypeAllProductsCard from "../components/SkinTypeAllProductsCard";
import DryProducts from '../components/DryProducts';
import OilyProducts from '../components/OilyProducts';
import CombinationProducts from '../components/CombinationProducts';
import SensitiveProducts from '../components/SensitiveProducts';
import NormalProducts from '../components/NormalProducts';



const skinType = () => {
    // step1
    const [activeTab, setActiveTab] = useState("");

    return (
        <>
            <div>
                <div>
                    <div className='text-4xl font-bold bg-purple-100 p-5 flex flex-row justify-center items-center '>
                        <span className='text-purple-500 text-4xl pe-6'>Flat 15% Off</span>
                        <span className=' font-medium pe-1'>+Free Gifts </span>
                        <span className='pt-1 ps-1'><MdOutlineCardGiftcard className='text-purple-500' /></span>
                        <span className='text-gray-400 pt-1 ps-4 cursor-pointer'><IoIosArrowDropright /></span>
                    </div>
                </div>
                <div>
                    <p className='text-3xl font-semibold text-center mt-5 '>Shop By Skin Type</p>
                </div>
                <div className="p-4">
                    {/* step 2: buttons */}
                    <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto text-black text-center text-lg font-semibold my-8">
                        <div className='flex flex-col justify-center items-center'>
                            <div><img className='w-15 mb-2' src={DryLogo} alt="" /></div>
                           <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                                onClick={() => setActiveTab("tab1")}> Dry</button></div> 
                        </div>
                       
                        <div className='flex flex-col justify-center items-center'>
                            <div><img className='w-15 mb-2' src={OilyLogo} alt="" /></div>
                           <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                                onClick={() => setActiveTab("tab2")}> Oily</button></div> 
                        </div>
                       <div className='flex flex-col justify-center items-center'>
                            <div><img className='w-15 mb-2' src={CombinationLogo} alt="" /></div>
                           <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                                onClick={() => setActiveTab("tab3")}> Combination</button></div> 
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div><img className='w-15 mb-2' src={SensitiveLogo} alt="" /></div>
                           <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                                onClick={() => setActiveTab("tab4")}> Sensitive</button></div> 
                        </div>
                         <div className='flex flex-col justify-center items-center'>
                            <div><img className='w-15 mb-2' src={NormalLogo} alt="" /></div>
                           <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                                onClick={() => setActiveTab("tab5")}> Normal</button></div> 
                        </div>
                    </div>

                    {/* step 3: conditional rendering */}
                   
                    <div>
                        {activeTab === "" && (
                            <div className='container m-auto my-12'>
                                <p className='text-2xl font-semibold text-center my-5'>All SkinType Products</p>
                                <SkinTypeAllProductsCard />
                            </div>
                        )}
                        {activeTab === "tab1" && (
                            <div className='container m-auto my-12'>
                                <p className='text-2xl font-semibold text-center my-5'>Dry Skin Products</p>
                                <DryProducts />
                            </div>
                        )}

                        {activeTab === "tab2" && (
                            <div className='container m-auto my-12'>
                                <p className='text-2xl font-semibold text-center my-5'>Oily Skin Products</p>
                                <OilyProducts />
                            </div>
                        )}

                        {activeTab === "tab3" && (
                            <div className='container m-auto my-12'>
                                <p className='text-2xl font-semibold text-center my-5'>Combination Skin Products</p>
                                <CombinationProducts />
                            </div>
                        )}

                        {activeTab === "tab4" && (
                            <div className='container m-auto my-12'>
                                <p className='text-2xl font-semibold text-center my-5'>Sensitive Skin Products</p>
                                <SensitiveProducts />
                            </div>
                        )}

                        {activeTab === "tab5" && (
                            <div className='container m-auto my-12'>
                                <p className='text-2xl font-semibold text-center my-5'>Normal Skin Products</p>
                                <NormalProducts />
                            </div>
                        )}
                    </div>
                </div>


            </div>
        </>
    )
}
export default skinType