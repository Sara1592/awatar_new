
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Parallax } from "swiper/modules";
import Image from "next/image";
import { useTranslations } from 'next-intl';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/parallax";


export default function HeroSlider() {
    const t = useTranslations('home');
  const slides = [
   
    {
      // image: "assets/images/slider2.png",
      // title: "Welcome to",
      // subtitle: "Awtar Café",
       image: t("slide1Image"),
       title: t("slide1Title"),
      subtitle: t("slide1Subtitle"),
    //  navImg: "assets/images/nav1.png",
    },
     {
             image: t("slide2Image"),

      // image: "assets/images/slider1.png",
      title: t("slide2Title"),
      subtitle: t("slide2Subtitle"),
    //   navImg: "assets/images/nav.png",
    },
    {
                   image: t("slide3Image"),

      // image: "assets/images/slider3.png",
     title: t("slide3Title"),
      subtitle: t("slide3Subtitle"),
//    navImg: "assets/images/nav1.png",
    },
  ];


  return (
   
    <section className="relative w-full h-[80vh] sm:h-[90vh]  sm:mt-22">
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
          className="relative w-full h-[80vh] sm:h-[90vh] mt-[120px] md:mt-[80px] sm:mt-[80px] bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
          data-swiper-parallax="-100"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text */}
          <div className="relative z-10 px-4 sm:px-6 pt-24 sm:pt-36">
            <p className="slider-subtitle tracking-widest text-sm sm:text-base">
              {slide.title}
            </p>
            <h1 className="slider-heading text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
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
