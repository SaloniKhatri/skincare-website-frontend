import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


import BannerC2 from '../assets/images/Banner1C2.png'
import BannerC3 from '../assets/images/Banner1C4.png'


const BannerCarousel = () => {
    return (
        <>
            <div className="w-full">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className="rounded-2xl"
                >


                    <SwiperSlide>
                        <img
                            src={BannerC2}
                            alt="slide2"
                            className="w-full object-cover"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            src={BannerC3}
                            alt="slide3"
                            className="w-full object-cover"
                        />
                    </SwiperSlide>


                </Swiper>
            </div>
        </>
    )
}

export default BannerCarousel