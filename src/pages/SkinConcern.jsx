import react, { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import { IoIosArrowDropright } from "react-icons/io";
import { MdOutlineCardGiftcard } from "react-icons/md";
// import { motion } from "framer-motion";

import SkinConcernAllProducts from "../components/SkinConcernAllProducts";
import AcneProducts from "../components/AcneProducts";
import PigmentationProducts from "../components/PigmentationProducts";
import DrynessProducts from "../components/DrynessProducts";
import DullnessProducts from "../components/DullnessProducts";
import DarkSpotsProducts from "../components/DarkSpotsProducts";
import AgingProducts from "../components/AgingProducts";
import ExcessOilProducts from "../components/ExcessOilProducts";

import AcneLogo from "../assets/images/LogoAcne.png"
import PigmentationLogo from "../assets/images/LogoPigmentation.png"
import DrynessLogo from "../assets/images/LogoDryness.png"
import DullnessLogo from "../assets/images/LogoDullness.png"
import DarkSpotsLogo from "../assets/images/LogoDarkspots.png"
import AgingLogo from "../assets/images/LogoAging.png"
import ExcessOilLogo from "../assets/images/LogoExcessoil.png"


const SkinConcern = () => {
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
                    <p className='text-3xl font-semibold text-center my-5'>Shop By Concern</p>
                </div>
              
                <div className="grid grid-cols-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 text-black text-center text-lg font-semibold my-8 lg:ms-52 md:ms-4 sm:ms-1 ">
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={AcneLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab1")}> Acne</button></div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-22 mb-2' src={PigmentationLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab2")}> Pigmentation</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={DrynessLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab3")}> Dryness</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={DullnessLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab4")}> Dullness</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={DarkSpotsLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab5")}> Dark Spots</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={AgingLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab6")}> Aging</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={ExcessOilLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab7")}> Excess Oil</button></div>
                    </div>
                </div>

                <div>
                    {activeTab === "" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>All SkinConcern Products</p>
                            <SkinConcernAllProducts />
                        </div>
                    )}
                    {activeTab === "tab1" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Acne Skin Products</p>
                            <AcneProducts />
                        </div>
                    )}

                    {activeTab === "tab2" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Pigmentation Skin Products</p>
                            <PigmentationProducts />
                        </div>
                    )}

                    {activeTab === "tab3" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Dryness Skin Products</p>
                            <DrynessProducts />
                        </div>
                    )}

                    {activeTab === "tab4" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Dullness Skin Products</p>
                            <DullnessProducts />
                        </div>
                    )}

                    {activeTab === "tab5" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Dark Spots Skin Products</p>
                            <DarkSpotsProducts />
                        </div>
                    )}
                    {activeTab === "tab6" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Aging Skin Products</p>
                            <AgingProducts />
                        </div>
                    )}
                    {activeTab === "tab7" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Excess Oil Skin Products</p>
                            <ExcessOilProducts />
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}
export default SkinConcern;