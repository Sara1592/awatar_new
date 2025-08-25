
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Parallax } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/parallax";


export default function HeroSlider() {
  const slides = [
   
    {
      image: "assets/images/slider2.png",
      title: "Welcome to",
      subtitle: "Awtar Café",
    //  navImg: "assets/images/nav1.png",
    },
     {
      image: "assets/images/slider1.png",
      title: "",
      subtitle: " ",
    //   navImg: "assets/images/nav.png",
    },
    {
      image: "assets/images/slider3.png",
      title: "Welcome to",
      subtitle: "Awtar Café",
//    navImg: "assets/images/nav1.png",
    },
  ];


  return (
    <section className="relative w-full h-[90vh] mt-22 ">
      <Swiper
        modules={[Navigation, Autoplay, Parallax]}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={false}
       
        speed={1000}
        parallax={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-[90vh] mt-[80px] "
              style={{ backgroundImage: `url(${slide.image})` }}
              data-swiper-parallax="-100"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Text */}
              <div className="relative z-10 px-6 pt-36">
                <p className="slider-subtitle tracking-widest">{slide.title}</p>
                <h1 className="slider-heading ">
                  {slide.subtitle}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
    
  );
}
