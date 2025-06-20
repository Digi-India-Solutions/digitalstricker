import React, { useRef, useState } from 'react'
import './OurClient.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';


import c1 from './c1.png'
import c2 from './c2.png'
import c3 from './c3.png'
import c4 from './c4.png'
import c5 from './c5.png'
import c6 from './c6.png'
import c7 from './c7.png'
import c8 from './c8.png'
import c9 from './c9.png'


function OurClient() {
    return (
        <section className='client-section'>
            <div className="container">
                <div className="heading">
                    <span>OUR CLIENTS</span>
                </div>
                <div className="client-box">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Autoplay]}
                        className="mySwiper-clients"
                    >
                        <SwiperSlide className='img'>
                            <img src={c1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='img'>
                            <img src={c2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='img'>
                            <img src={c3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='img'>
                            <img src={c4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='img'>
                            <img src={c5} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='img'>
                            <img src={c6} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='img'>
                            <img src={c7} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='img'>
                            <img src={c8} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='img'>
                            <img src={c9} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default OurClient
