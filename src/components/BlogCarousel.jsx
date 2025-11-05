import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import BlogCarousel1 from '../assets/images/BlogBanner.png'
import BlogCarousel2 from '../assets/images/BlogBanner2.png'
import BlogCarousel3 from '../assets/images/BlogBanner3.png'
import BlogCarousel4 from '../assets/images/BlogBanner4.png'
import BlogCarousel5 from '../assets/images/BlogBanner5.png'

import "swiper/css";
import "swiper/css/pagination";

const BlogCarousel = () => {
    return (
        <>
            <div className="w-full">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className="rounded-2xl lg:h-[500px] md:h-[350px] sm:h-[600px]"
                >
                    <SwiperSlide>
                       
                        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
                            <div className=''>
                                <img className=' rounded-lg' src={BlogCarousel2} alt="" />
                            </div>
                            <div className='p-6 flex flex-col justify-center items-center text-center '>
                                <p className='font-bold h-15 text-pink-500 text-lg'>TINTED VS UN-TINTED SUNSCREEN: WHICH ONE SHOULD YOU CHOOSE?</p>
                                <p className='pt-1 text-md text-black  font-semibold'>Discover tinted vs untinted sunscreen differences- coverage, protection, and skin benefits. Which is best for you? Get expert tips for glowing, protected skin. Click to choose wiaely!</p>
                                <p className='text-sm text-rose-500  mt-2 font-semibold '>Moumita | 19 Aug 2025 </p>
                                <button type="button" className=' text-md  text-white bg-black py-2 px-5 border rounded-lg font-semibold w-50 cursor-pointer mt-3'>Read More </button>
                            </div>

                        </div>


                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
                            <div className=''>
                                <img className=' rounded-lg' src={BlogCarousel1} alt="" />
                            </div>
                            <div className='p-6 flex flex-col justify-center items-center text-center'>
                                <p className='font-bold h-15 text-pink-500  text-lg'>HOW TO USE A HAIR MASK: A COMPLETE STEP-BY-STEP GUIDE</p>
                                <p className='pt-1 text-md text-black  font-semibold'>Ste-by-step guide to applying a hair mask for deep nourishment, silky texture, and long-lasting growth. </p>
                                <p className='text-sm text-rose-500  mt-2 font-semibold '>Rashi | 15 Aug 2025 </p>
                                <button type="button" className=' text-md  text-white bg-black py-2 px-5 border rounded-lg font-semibold w-50 cursor-pointer mt-3'>Read More </button>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
                            <div className=''>
                                <img className=' rounded-lg' src={BlogCarousel3} alt="" />
                            </div>
                            <div className='p-6 flex flex-col justify-center items-center text-center'>
                                <p className='font-bold h-15 text-pink-500 text-lg'>DO YOU NEED A DIFFERENT FACE SERUM FOR EACH SEASON?</p>
                                <p className='pt-1 text-md text-black  font-semibold'>Discover whether your skincare needs change with the weather. Find out if switching serums by season really matters.</p>
                                <p className='text-sm text-rose-500  mt-2 font-semibold '>Moumita | 9 July 2025 </p>
                                <button type="button" className=' text-md  text-white bg-black py-2 px-5 border rounded-lg font-semibold w-50 cursor-pointer mt-3'>Read More </button>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
                            <div className=''>
                                <img className=' rounded-lg' src={BlogCarousel4} alt="" />
                            </div>
                            <div className='p-6 flex flex-col justify-center items-center text-center'>
                                <p className='font-bold h-15 text-pink-500 text-lg  '>MOISTURIZER LAYERING HACKS: GET THE PERFECT SKINCARE ROUTINE</p>
                                <p className='pt-1 text-md text-black font-semibold md:mt-4'>Master the art of layering moisturizers for glowing, hydrated skin. These expert tips will transform your skincare routine!</p>
                                <p className='text-sm text-rose-500  mt-2 font-semibold '>Raj | 6 July 2025 </p>
                                <button type="button" className=' text-md  text-white bg-black py-2 px-5 border rounded-lg font-semibold w-50 cursor-pointer mt-3'>Read More </button>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
                            <div className=''>
                                <img className=' rounded-lg' src={BlogCarousel5} alt="" />
                            </div>
                            <div className='p-6 flex flex-col justify-center items-center text-center'>
                                <p className='font-bold h-15 text-pink-500 text-lg'>WHAT HAPPENS IF YOU DON'T WASH YOUR FACE EVERY DAY?</p>
                                <p className='pt-1 text-md text-black  font-semibold'>Skipping your face wash? Find out what happens to your skin when you neglect this basic skincare step.</p>
                                <p className='text-sm text-rose-500  mt-2 font-semibold '>Moumita | 2 July 2025 </p>
                                <button type="button" className=' text-md  text-white bg-black py-2 px-5 border rounded-lg font-semibold w-50 cursor-pointer mt-3'>Read More </button>
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default BlogCarousel