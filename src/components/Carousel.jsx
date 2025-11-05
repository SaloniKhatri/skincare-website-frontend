import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import Carousel1 from '../assets/images/mainImage.png'
import Carousel2 from '../assets/images/Carousel2.png'
import Carousel3 from '../assets/images/Carousel3.png'  
import Carousel4 from '../assets/images/Carousel4.png'
import Carousel5 from '../assets/images/Carousel5.png'

import "swiper/css";
import "swiper/css/pagination";

const Carousel = () => {
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
                            src={Carousel1}
                            alt="slide1"
                            className="w-full object-cover"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            src={Carousel2}
                            alt="slide2"
                            className="w-full object-cover"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            src={Carousel3}
                            alt="slide3"
                            className="w-full object-cover"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            src={Carousel4}
                            alt="slide3"
                            className="w-full  object-cover"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            src={Carousel5}
                            alt="slide3"
                            className="w-full  object-cover"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Carousel