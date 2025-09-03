
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

export default function MobFlipCardSlider() {
  const slides = [
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756731159/mob_menu_2_nkwrsk.png" },
   { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756731175/mob_menu_10_mlorol.png" },
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756731167/mob_menu_8_zgj48x.png" },
 { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756731160/mob_menu_5_lwpfmf.png" },
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756731180/mob_menu_11_j5ugxo.png" },
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756731166/mob_menu_7_a0jc6t.png" },
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756731160/mob_menu_3_cchwdk.png" },
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756731158/mob_menu_1_f5bbiz.jpg" },
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756731161/mob_menu_4_lcvg3x.png" },
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756731174/mob_menu_1_zhnjnr.png" },
    // { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756731160/mob_menu_6_r7up16.png" },
    { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756731167/mob_menu_9_fupg64.png" }
  ];

  return (
    <section className="w-full flex justify-center">
      {/* Responsive width/height */}
      <div className="w-full  h-[550px] px-2">
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
                width={710}
                height={1180}
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

