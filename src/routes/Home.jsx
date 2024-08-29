import React from 'react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';  // Banner
import { Swiper, SwiperSlide } from 'swiper/react'; // Banner
import 'swiper/css'; // Banner
import 'swiper/css/scrollbar'; // Banner
 
import Banner2 from "../assets/home/banners/banner-2-editada.png" // Img Banner

import { BannerStyle } from "../styles/BannerStyle"; // Style

const Home = () => {
  return (
    <>
    <BannerStyle>
      <section>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide><img src={Banner2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Banner2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Banner2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Banner2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Banner2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Banner2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Banner2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Banner2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Banner2} alt="" /></SwiperSlide>
        </Swiper>
      </section>
    </BannerStyle>

{/* 
    Section Home
    <section>
        <h1>Home</h1>
    </section>

     Section About
    <section>
        <h1>About</h1>
    </section>

     Section Pilots 
    <section>
        <h1>Pilots</h1>
    </section>

    Section Ecotracer 
        <section>
        <h1>Ecotracer</h1>
    </section> */}
    </>
  )
}

export default Home