
// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCards, Autoplay } from "swiper/modules";
// import Image from "next/image";

// import "swiper/css";
// import "swiper/css/effect-cards";

// export default function FlipCardSlider() {
//   const slides = [
//     { image: "/assets/images/menu_1.png" },
//     { image: "/assets/images/menu_2.png" },
//     { image: "/assets/images/menu_3.png" },
//     { image: "/assets/images/menu_4.png" },
//     { image: "/assets/images/menu_5.png" },
//     { image: "/assets/images/menu_6.png" },
//     { image: "/assets/images/menu_7.png" },
//     { image: "/assets/images/menu_8.png" },
//     { image: "/assets/images/menu_9.png" },
//    { image: "/assets/images/menu_10.png" },
//    { image: "/assets/images/menu_11.png" },
//    { image: "/assets/images/menu_12.png" },
//   ];

//   return (
//     <section className="w-full flex justify-center py-16">
       
//       <div className="w-[500px] h-[600px]">
//         <Swiper
//           effect={"cards"}
//           grabCursor={true}
//           modules={[EffectCards, Autoplay]}
//           autoplay={{ delay: 3000 }}
//           loop={true}
//           className="mySwiper w-full h-full"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide
//               key={index}
//               className="relative flex items-center justify-center bg-black rounded-2xl overflow-hidden"
//             >
//               <Image
//                 src={slide.image}
//                 alt={slide.title}
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
//                 {/* <h3 className="text-white text-2xl font-bold mb-2">{slide.title}</h3> */}
//                 {/* <p className="text-gray-200 text-sm">{slide.desc}</p> */}
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }


"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-cards";

export default function FlipCardSlider() {
  const slides = [
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730252/menu_1_tvo94d.png" },
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730252/menu_2_gxrlcd.png" },
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730253/menu_3_d5iqaa.png" },
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730253/menu_4_dtlyyj.png" },
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730253/menu_5_kjwwql.png" },
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730254/menu_6_czqddl.png" },
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730257/menu_7_mmqng4.png" },
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730257/menu_8_qfpuce.png" },
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756732368/menu_9_ifqyu3.png" },
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730258/menu_10_a7nvdg.png" },
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730258/menu_11_ncuyq8.png" },
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730258/menu_12_yiuj3g.png" },
  ];

  return (
    <section className="w-full flex justify-center py-10 sm:py-16">
      {/* Responsive width/height */}
      <div className="w-full  h-[550px] sm:max-w-[500px] sm:h-[700px]">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="mySwiper w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="relative flex items-center justify-center bg-black rounded-2xl overflow-hidden"
            >
              <Image
                src={slide.image}
                alt={`menu-${index}`}
                fill
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
