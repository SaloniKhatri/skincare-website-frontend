import react, { useState } from 'react'
import { IoIosArrowDropright } from "react-icons/io";
import { MdOutlineCardGiftcard } from "react-icons/md";

import IngredientsAllProductsCard from '../components/IngredientsAllProductsCard';
import VitaminCProducts from '../components/VitaminCProducts';
import CeramidesProducts from '../components/CeramidesProducts';
import NiacinamideProducts from '../components/NiacinamideProducts';
import WatermelonProducts from '../components/WatermelonProducts';  
import HyaluronicProducts from '../components/HylauronicProducts';
import StrawberryProducts from '../components/StrawberryProducts';
import RetinolProducts from '../components/RetinolProducts';
import SalicyclicProducts from '../components/SalicyclicProducts';
import GlycolicProducts from '../components/GlycolicProducts';
import OrangeProducts from '../components/OrangeProducts';
import CicaProducts from '../components/CicaProducts';
import BlueberryProducts from '../components/BlueberryProducts';
import MangoProducts from '../components/MangoProducts';
import PomegranateProducts from '../components/PomegranateProducts';
import LimeProducts from '../components/LimeProducts';  


import VitaminCLogo from "../assets/images/LogoVitaminC.png";
import CeramidesLogo from "../assets/images/LogoCeramides.png"
import NiacinamideLogo from "../assets/images/LogoNiacinamide.png"
import WatermelonLogo from "../assets/images/LogoWatermelon.png"
import HyaluronicLogo from "../assets/images/LogoHyaluronic.png"
import StrawberryLogo from "../assets/images/LogoStrawberry.png"
import RetinolLogo from "../assets/images/LogoRetinol.png"
import SalicyclicLogo from "../assets/images/LogoSalicyclic.png"
import GlycolicLogo from "../assets/images/LogoGlycolic.png"
import OrangeLogo from "../assets/images/LogoOrange.png"
import CicaLogo from "../assets/images/LogoCica.png"
import BlueberryLogo from "../assets/images/LogoBlueberry.png"
import MangoLogo from "../assets/images/LogoMango.png"
import PomegranateLogo from "../assets/images/LogoPomegranate.png"
import LimeLogo from "../assets/images/LogoLime.png"


const Ingredients = () => {
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
                    <p className='text-3xl font-semibold text-center my-5'>Shop By Ingredients</p>
                </div>
                
                <div className="grid grid-cols-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 text-black text-center text-lg font-semibold my-8">
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={VitaminCLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab1")}> Vitamin C</button></div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={CeramidesLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab2")}> Ceramides</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={NiacinamideLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab3")}> Niacinamide</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={WatermelonLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab4")}> Watermelon</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={HyaluronicLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab5")}> Hyaluronic</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={StrawberryLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab6")}> Strawberry</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={RetinolLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab7")}> Retinol</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={SalicyclicLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab8")}> Salicyclic</button></div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={GlycolicLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab9")}> Glycolic</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={OrangeLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab10")}> Blood Orange</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={CicaLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab11")}> Cica</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={BlueberryLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab12")}> Blueberry</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={MangoLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab13")}> Mango</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={PomegranateLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab14")}> Pomegranate</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><img className='w-15 mb-2' src={LimeLogo} alt="" /></div>
                        <div><button className=" w-50 p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveTab("tab15")}> Lime</button></div>
                    </div>
                </div>

                <div>
                    {activeTab === "" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>All Ingredients Products</p>
                            <IngredientsAllProductsCard />
                        </div>
                    )}
                    {activeTab === "tab1" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Vitamin C Products</p>
                            <VitaminCProducts />
                        </div>
                    )}

                    {activeTab === "tab2" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Ceramides Products</p>
                            <CeramidesProducts />
                        </div>
                    )}

                    {activeTab === "tab3" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Niacinamide Products</p>
                            <NiacinamideProducts />
                        </div>
                    )}

                    {activeTab === "tab4" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Watermelon Products</p>
                            <WatermelonProducts />
                        </div>
                    )}

                    {activeTab === "tab5" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Hyaluronic Products</p>
                            <HyaluronicProducts />
                        </div>
                    )}
                    {activeTab === "tab6" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Strawberry Products</p>
                            <StrawberryProducts />
                        </div>
                    )}

                    {activeTab === "tab7" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Retinol Products</p>
                            <RetinolProducts />
                        </div>
                    )}

                    {activeTab === "tab8" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Salicyclic Products</p>
                            <SalicyclicProducts />
                        </div>
                    )}
                    {activeTab === "tab9" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Glycolic Products</p>
                            <GlycolicProducts />
                        </div>
                    )}

                    {activeTab === "tab10" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Blood Orange Products</p>
                            <OrangeProducts />
                        </div>
                    )}

                    {activeTab === "tab11" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Cica Products</p>
                            <CicaProducts />
                        </div>
                    )}
                    {activeTab === "tab12" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Blueberry Products</p>
                            <BlueberryProducts />
                        </div>
                    )}

                    {activeTab === "tab13" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Mango Products</p>
                            <MangoProducts />
                        </div>
                    )}

                    {activeTab === "tab14" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Pomegranate Products</p>
                            <PomegranateProducts />
                        </div>
                    )}
                    {activeTab === "tab15" && (
                        <div className='container m-auto my-12'>
                            <p className='text-2xl font-semibold text-center my-5'>Lime Products</p>
                            <LimeProducts />
                        </div>
                    )}

                </div>

            </div>
        </>
    )
}

export default Ingredients