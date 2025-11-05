import react, {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import { IoIosArrowDropright } from "react-icons/io";
import { MdOutlineCardGiftcard } from "react-icons/md";


import ShopAllCard from '../components/ShopAllProductsCard';
import SunscreenProducts from '../components/SunscreenProducts';
import MoisturiserProducts from '../components/MoisturizerProducts';
import SerumProducts from '../components/SerumProducts';    
import ComboProducts from '../components/AllCombo';
import FacewashProducts from '../components/FacewashProducts';
import LipCareProducts from '../components/LipCareProducts';    
import FaceMaskProducts from '../components/FaceMaskProducts';
import FaceTonerProducts from '../components/FaceTonerProducts';
import EyeCareProducts from '../components/EyeCareProducts';    
import BodyCareProducts from '../components/BodyCareProducts';
// import HairCareProducts from '../components/HairCareProducts';

import AllLogo from "../assets/images/LogoAll.png";
import SunscreenLogo from "../assets/images/LogoSunscreen.png";
import MoisturiserLogo from "../assets/images/LogoMoisturizer.png"
import SerumLogo from "../assets/images/LogoSerum.png"
import ComboLogo from "../assets/images/LogoCombo.png"
import FaceWashLogo from "../assets/images/LogoFaceWash.png"
import LipCareLogo from "../assets/images/LogoLipcare.png"
import FaceMaskLogo from "../assets/images/LogoFacemask.png"
import FaceTonerLogo from "../assets/images/LogoToner.png"
import EyeCareLogo from "../assets/images/LogoEyecare.png"
import BodyCareLogo from "../assets/images/LogoBodycare.png"
// import HairCareLogo from "../assets/images/LogoHaircare.png"





const ShopAll = () => {
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

                <div className="grid grid-cols-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-black text-center text-lg font-semibold my-8 mx-auto max-w-7xl">
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={AllLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab1")}> All</button></div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={SunscreenLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab2")}> Sunscreen</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={MoisturiserLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab3")}> Moisturiser</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={SerumLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab4")}> Serum</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={ComboLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab5")}> Combo</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={FaceWashLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab6")}> FaceWash</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={LipCareLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab7")}> Lip Care</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={FaceMaskLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab8")}> Face Mask</button></div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={FaceTonerLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab9")}> Face Toner</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={EyeCareLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab10")}> Eye Care </button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={BodyCareLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab11")}> Body Care</button></div>
                    </div>
                    {/* <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={HairCareLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab12")}> Hair Care</button></div>
                    </div> */}
                  
                </div>
              
                  <div>
                    {activeTab === "" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>All Products</p>
                            <ShopAllCard />
                        </div>
                    )}
                    {activeTab === "tab1" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>All Products</p>
                            <ShopAllCard />
                        </div>
                    )}
                    {activeTab === "tab2" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Sunscreen</p>
                            <SunscreenProducts />
                        </div>
                    )}

                    {activeTab === "tab3" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Moisturiser</p>
                            <MoisturiserProducts />
                        </div>
                    )}

                    {activeTab === "tab4" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Serum</p>
                            <SerumProducts />
                        </div>
                    )}

                    {activeTab === "tab5" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Combo </p>
                            <ComboProducts />
                        </div>
                    )}

                    {activeTab === "tab6" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>FaceWash </p>
                            <FacewashProducts />
                        </div>
                    )}
                    {activeTab === "tab7" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Lip Care </p>
                            <LipCareProducts />
                        </div>
                    )}

                    {activeTab === "tab8" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'> Face Mask</p>
                            <FaceMaskProducts />
                        </div>
                    )}

                    {activeTab === "tab9" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Face Toner </p>
                            <FaceTonerProducts />
                        </div>
                    )}
                    {activeTab === "tab10" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Eye Care</p>
                            <EyeCareProducts />
                        </div>
                    )}

                    {activeTab === "tab11" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Body Care</p>
                            <BodyCareProducts />
                        </div>
                    )}

                    {/* {activeTab === "tab12" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Hair Care</p>
                            <HairCareProducts />
                        </div>
                    )} */}
                 

               

                </div>

            </div>
        </>
    )
}

export default ShopAll