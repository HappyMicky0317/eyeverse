import '../../assets/css/dashboard/World.css';
import hero1 from '../../assets/img/new/hero1.png';
import hero2 from '../../assets/img/new/hero2.png';
import hero3 from '../../assets/img/new/hero3.png';

import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay,EffectCoverflow, Pagination } from "swiper";

function World() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return(
    <div className="inside-world">
      <div className='world-container'>
        <div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={false}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            modules={[Autoplay,EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className='carousel-content'>
              <img src={hero1} alt="" className="hero-carousel-img"/>
              <span className='hero-text text-format '>This is  text for hero.This is  text for hero.This is  text for hero.This is  text for hero.This is  text for hero.</span>
            </SwiperSlide>
            <SwiperSlide className='carousel-content'>
              <img src={hero2} alt="" className="hero-carousel-img" />
              <span className='hero-text text-format'>This is  text for hero.This is  text for hero.This is  text for hero.This is  text for hero.This is  text for hero.</span>
            </SwiperSlide>
            <SwiperSlide className='carousel-content'>
              <img src={hero1} alt="" className="hero-carousel-img" />
              <span className='hero-text text-format'>This is  text for hero.This is  text for hero.This is  text for hero.This is  text for hero.This is  text for hero.</span>
            </SwiperSlide>
            <SwiperSlide className='carousel-content'>
              <img src={hero2} alt="" className="hero-carousel-img" />
              <span className='hero-text text-format'>This is  text for hero.This is  text for hero.This is  text for hero.This is  text for hero.This is  text for hero.</span>
            </SwiperSlide>
            <SwiperSlide className='carousel-content'>
              <img src={hero3} alt="" className="hero-carousel-img" />
              <span className='hero-text text-format'>This is  text for hero.This is  text for hero.This is  text for hero.This is  text for hero.This is  text for hero.</span>
            </SwiperSlide>
            <div style={{display:"none"}} slot="container-end">
              <svg viewBox="0 0 0 0" ref={progressCircle}>
                <circle cx="0" cy="0" r="0"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
        <div className='text-phragrapth'>
          <span className='text-format hero-phragraph-text'>This is the phragraph for hero.This is the phragraph for hero.This is the phragraph for hero.This is the phragraph for hero.This is the phragraph for hero.This is the phragraph for hero.This is the phragraph for hero.This is the phragraph for hero.This is the phragraph for hero.This is the phragraph for hero.This is the phragraph for hero.This is the phragraph for hero.This is the phragraph for hero.This is the phragraph for hero.</span>
        </div>
      </div>
    </div>
  )
}

export default World;