import React, { useRef, useState } from 'react';
import './Hero.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import b1 from './banner-1.jpg'
import b2 from './banner-2.jpg'
import b3 from './banner-3.jpg'
import b4 from './banner-4.jpg'
import b5 from './banner-5.jpg'
import b6 from './banner-6.jpg'
import b7 from './banner-7.jpg'
import b8 from './banner-8.jpg'
import b9 from './banner-9.jpg'
import b10 from './banner-10.jpg'
import b11 from './banner-11.webp'
import b12 from './banner-12.jpg'
import b13 from './banner-13.jpg'

function Hero() {
  return (
    <>
      <section className='hero-section'>
        <div className="container">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className='hero-slide hero-slide-5'>
              <img src={b11} alt="" />
              <div className="banner-content banner-content-5">
                  <h2>FTTH Solutions</h2>
                  <p>We listen, understand, then perform the task until your goal would be completely achieved.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='hero-slide hero-slide-1'>
              <img src={b13} alt="" />
              <div className="banner-content banner-content-1">
                <h2> Digital Striker Manufacturing</h2>
                <p>Digital Striker Pvt Ltd Is A Leading Manufacturer Of OFC Equipment, Splice Protection Sleeves(SPS), Ribbon Fiber Sleeve(Half Round).</p>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide className='hero-slide hero-slide-2'>
              <img src={b5} alt="" />
              <div className="banner-content banner-content-2">
                <h2>Digital Striker Telecom Infrastructure</h2>
                <p>Telecom Civil Construction And Projects Is A Wide Part Of Company's Scope.</p>
              </div>
            </SwiperSlide> */}
            <SwiperSlide className='hero-slide hero-slide-3'>
              <img src={b12} alt="" />
              <div className="banner-content banner-content-3">
                  <h2>Optical Fiber Tools</h2>
                  <p>We import machinery specialized for fiber work to enhance productivity and precision in our manufacturing processes</p>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide className='hero-slide hero-slide-4'>
              <img src={b1} alt="" />
              <div className="banner-content banner-content-4">
                  <h2>Digital Striker PMC Services</h2>
                  <p>We Have Started Our New Vertical Of Hospitality Services For End Users, Corporate Clients, And OYO Rooms, FAB Hotels Etc.</p>
              </div>
            </SwiperSlide> */}
            
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Hero
