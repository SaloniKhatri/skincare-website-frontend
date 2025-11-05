import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { motion } from "framer-motion";

import Carousel from '../components/Carousel';
import BannerCarousel from '../components/BannerCarousel';

import Banner2 from '../assets/images/banner2.png'
import Banner3 from '../assets/images/banner3.png'
import Banner4 from '../assets/images/banner4.png'

import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';

import Icon1 from '../assets/images/Icon1.png'
import Icon2 from '../assets/images/Icon2.png'
import Icon3 from '../assets/images/Icon3.png'

import Icon4 from '../assets/images/Icon4.png'
import Icon5 from '../assets/images/Icon5.png'
import Icon6 from '../assets/images/Icon6.png'
import Icon7 from '../assets/images/Icon7.png'

import Recommend1 from '../assets/images/recommend1.png'
import Recommend2 from '../assets/images/recommend2.png'
import Recommend3 from '../assets/images/recommend3.png'
import Recommend4 from '../assets/images/recommend4.png'

import Consumer1 from '../assets/images/consumer1.png'
import Consumer2 from '../assets/images/consumer2.png'
import Consumer3 from '../assets/images/consumer3.png'
import Consumer4 from '../assets/images/consumer4.png'

const products = [
    'Sunscreen', 'Moisturizers', 'Serum', 'Face Mask',
    'Facewash', 'Lip Care', 'Hair Care', 'Eye Care', 'Body Care', 'Combos'
];
const skinconcern = [
    'Dullness', 'Dryness', 'Acne', 'Aging', 'Dark Spots',
];
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.4,
        },
    }),
};

const Home = () => {
    return (
        <>
            <div>
                <div className='border-t border-pink-300'>
                    <div className='text-3xl font-bold bg-pink-100 p-5 flex flex-row justify-center items-center space-x-6'>
                        <span className='text-pink-500'>Buy 1 Get 1 FREE</span>
                        <span className=' font-medium italic'>Sale Live Now </span>
                        <span className='text-gray-400 pt-1 cursor-pointer'><IoIosArrowDropright /></span>
                    </div>
                </div>
                <div>
                    <Carousel />
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2'>
                    <div className=' font-bold bg-pink-300 p-5 flex flex-row justify-center items-center space-x-6'>
                        <span><span className='lg:text-4xl sm:text-md italic text-pink-600'>Buy</span> <span className='lg:text-6xl sm:text-xl text-white '>2</span> <span className='lg:text-4xl sm:text-md italic text-pink-600'>Get</span> <span className='lg:text-6xl sm:text-md text-white '>2</span></span>
                        <span className=' font-medium italic rounded-4xl text-white px-10 py-3 bg-pink-500 lg:text-4xl sm:text-lg sm:px-4 sm:py-5'> + 1 FREE Gift </span>
                    </div>
                      <div className=' font-bold  bg-blue-400 p-5 flex flex-row justify-center items-center space-x-6'>
                        <span><span className='lg:text-4xl sm:text-md italic text-pink-600'>Buy</span> <span className='lg:text-6xl sm:text-xl text-white '>3</span> <span className='lg:text-4xl sm:text-md italic text-pink-600'>Get</span> <span className='lg:text-6xl sm:text-md text-white '>3</span></span>
                        <span className=' font-medium italic rounded-4xl text-white px-10 py-3 bg-pink-500 lg:text-4xl sm:text-lg sm:px-4 sm:py-5'> + 2 FREE Gift </span>
                    </div>
                   

                </div>
            </div>

            <div>
                <div>
                    <h1 className='text-4xl font-bold  text-center my-6'>Our Products </h1>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto text-black text-center text-lg font-semibold">
                    {products.map((product, i) => (
                        <motion.div
                            key={product}
                            className="p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={itemVariants}
                        >
                            {product}
                        </motion.div>
                    ))}
                </div>
                <div className='mt-15 container m-auto'>
                    <Card1 />
                </div>
            </div>

            <div className='mt-15 mb-10'>
                
                <BannerCarousel />
            </div>

            <div>
                <div>
                    <h1 className='text-4xl font-bold  text-center my-6'>New Arrivals </h1>
                </div>
                <div className='mt-15 container m-auto '>
                    <Card2 className='' />
                </div>

            </div>

            <div className='mt-15 mb-10'>
                <img className='w-full' src={Banner2} alt="" />
            </div>

            <div className='mt-15'>
                <div>
                    <h1 className='text-4xl font-bold  text-center my-6'>Skin Concerns </h1>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto text-black text-center text-lg font-semibold">
                    {skinconcern.map((product, i) => (
                        <motion.div
                            key={product}
                            className="p-2 border border-gray-700 rounded-lg hover:bg-rose-500 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={itemVariants}
                        >
                            {product}
                        </motion.div>
                    ))}
                </div>

                <div className='mt-15 container m-auto'>
                    <Card3 />
                </div>

            </div> 

            <div>
                <div>
                    <h1 className='text-3xl font-bold  text-center mt-15'>Clean Beauty </h1>
                    <h1 className='text-2xl  text-center mt-2'>with uncompromised efficacy </h1>
                    <div className=' flex flex-row justify-center items-center space-x-30 mt-12'>
                        <div>
                            <img className='w-30' src={Icon1} alt="" />

                        </div>
                        <div>
                            <img className='w-20' src={Icon2} alt="" />

                        </div>
                        <div>
                            <img className='w-25' src={Icon3} alt="" />

                        </div>

                    </div>

                </div>
            </div>

            <div className='my-9 container m-auto'>
                <img src={Banner3} alt="" />
            </div>

            <div>
                <h1 className='text-3xl font-bold text-center my-8 '>About Us</h1>
                <div>
                    <img className='w-full' src={Banner4} alt="" />
                </div>
            </div>

            <div className='bg-[#ffb4c1] '>
                <div className='text-4xl font-bold text-center my-8 text-black pt-8 '> Featured In</div>
                <div className=' flex flex-row justify-center items-center space-x-30 py-8'>
                    <div>
                        <img className='w-30' src={Icon4} alt="" />

                    </div>
                    <div>
                        <img className='w-30' src={Icon5} alt="" />

                    </div>
                    <div>
                        <img className='w-30' src={Icon6} alt="" />

                    </div>
                    <div>
                        <img className='w-30' src={Icon7} alt="" />

                    </div>

                </div>
            </div>

            <div>
                <div className='text-4xl font-bold text-center my-5 text-black pt-8 '> Consumer Love</div>

                <div className='grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  m-10 p-10 gap-4'>
                    <div className='border rounded-b-4xl border-gray-300 p-4'>
                        <div className='flex flex-row space-x-4 mb-4'>
                            <div><img className=' rounded-full w-20 h-20 object-cover' src={Consumer1} alt="" /></div>
                            <div><h2 className='font-bold text-sm pt-4'>MEGHA <br /> PARASAR</h2></div>

                        </div>
                        <div className='text-green-600 flex flex-row my-3 text-xl'>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <div>
                            <h2 className='text-sm font-bold'>Just Love It!</h2>
                            <p className='text-sm text-gray-700'>
                                I've been using Dot & Key Vitamin C Sunscreen for a year now. It's lightweight & quick-absorbing. Reduces dullness too with a dewy finish. A must-buy!</p>
                        </div>
                        <div className='flex flex-row space-x-4 my-4'>
                            <div><img className=' rounded-full w-15 ' src={Recommend1} alt="" /></div>
                            <div >
                                <div><h2 className='text-gray-700 text-xs pt-4'>Megha recommended this product</h2></div>
                                <div className=' flex space-x-2 text-xs font-bold text-pink-500 underline'>
                                    <div>SHOP NOW</div>
                                    <div><RiArrowRightDoubleLine className=' text-lg' /> </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='border rounded-b-4xl border-gray-300 p-4'>
                        <div className='flex flex-row space-x-4 mb-4'>
                            <div><img className=' rounded-full w-20 h-20 object-cover' src={Consumer2} alt="" /></div>
                            <div><h2 className='font-bold text-sm pt-4'>Reshma

                                <br /> Satheesh</h2></div>

                        </div>
                        <div className='text-green-600 flex flex-row my-3 text-xl'>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <div>
                            <h2 className='text-sm font-bold'>Blends In No Time</h2>
                            <p className='text-sm text-gray-700'>
                                This is my third bottle of using this sunscreen. Zero white cast & non-pilling formula...just love it!                            </p>
                        </div>
                        <div className='flex flex-row space-x-4 my-4'>
                            <div><img className=' rounded-full w-15' src={Recommend2} alt="" /></div>
                            <div >
                                <div><h2 className='text-gray-700 text-xs pt-4'>Reshma recommended this product</h2></div>
                                 <div className=' flex space-x-2 text-xs font-bold text-pink-500 underline'>
                                    <div>SHOP NOW</div>
                                    <div><RiArrowRightDoubleLine className=' text-lg' /> </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className='border rounded-b-4xl border-gray-300 p-4'>
                        <div className='flex flex-row space-x-4 mb-4'>
                            <div><img className=' rounded-full w-20 h-20 object-cover' src={Consumer3} alt="" /></div>
                            <div><h2 className='font-bold text-sm pt-4'>Muskan <br />

                                Chowdhury</h2></div>

                        </div>
                        <div className='text-green-600 flex flex-row my-3 text-xl'>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <div>
                            <h2 className='text-sm font-bold'>No More Dry Skin</h2>
                            <p className='text-sm text-gray-700'>
                                Ceramide in this moisturizer protects the natural barrier of my skin while deeply moisturizing. It also soothes redness & dry skin.                            </p>
                        </div>
                        <div className='flex flex-row space-x-4 my-4'>
                            <div><img className=' rounded-full w-15 ' src={Recommend3} alt="" /></div>
                            <div >
                                <div><h2 className='text-gray-700 text-xs pt-4'>Muskan recommended this product</h2></div>
                              <div className=' flex space-x-2 text-xs font-bold text-pink-500 underline'>
                                    <div>SHOP NOW</div>
                                    <div><RiArrowRightDoubleLine className=' text-lg' /> </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className='border rounded-b-4xl border-gray-300 p-4'>
                        <div className='flex flex-row space-x-4 mb-4'>
                            <div><img className=' rounded-full w-20 h-20 object-cover' src={Consumer4} alt="" /></div>
                            <div><h2 className='font-bold text-sm pt-4'>Sonal <br />

                                Sareen</h2></div>

                        </div>
                        <div className='text-green-600 flex flex-row my-3 text-xl'>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <div>
                            <h2 className='text-sm font-bold'>It Works!</h2>
                            <p className='text-sm text-gray-700'>
                                I have been using this moisturiser for almost 3 months now. It is non-sticky & quick absorbing. My looks visibly brightened & even-toned now.                            </p>
                        </div>
                        <div className='flex flex-row space-x-4 my-4'>
                            <div><img className=' rounded-full w-15' src={Recommend4} alt="" /></div>
                            <div >
                                <div><h2 className='text-gray-700 text-xs pt-4'>Sonal recommended this product</h2></div>
                               <div className=' flex space-x-2 text-xs font-bold text-pink-500 underline'>
                                    <div>SHOP NOW</div>
                                    <div><RiArrowRightDoubleLine className=' text-lg' /> </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home