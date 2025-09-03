
// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// export default function Testimonials() {


// const testimonials = [
//   {
//     image:"/assets/images/rev1.jpg",
//     stars: 5,
//     text: "The most amazing place its take you from the depression world to the dream place that’s everyone love to have. The music, the food and the drink it’s fantastic. They have also very nice Hookah with many flavours so if you looking for quiet place, amazing service and great staff I guarantee to you this is the best place you can find.",
//     name: "Al N",
//   },
//   {
//      image:"/assets/images/rev2.jpg",
//     stars: 5,
//     text: "The place is amazing and it’s very nice view. The staff are very friendly and very nice. The prices are very reasonable.",
//     name: "Abdalrahman Nassar",
//   },
//   {
//      image:"/assets/images/rev3.jpg",
//     stars: 5,
//     text: "Great atmosphere and service. Great place to sit down and enjoy coffee, iced tea or fruit cocktail. I have been at this place 2 times. First day we had Turkish coffee. The second day I had lemon iced tea. It was so refreshing and not sweet at all. It had no sugar but the fresh mint made it so good. Thank you Latefa.",
//     name: "Liliana",
//   },
//   {
//      image:"/assets/images/rev1.jpg",
//     stars: 5,
//     text: "My recent experience was too good. Owner- Basel spoke to us so well & ensured our visit was comfortable & hassle free.",
//     name: "Asma Hussin",
//   },
//   {
//      image:"/assets/images/rev2.jpg",
//     stars: 5,
//     text: "Looking for a great cafe to chill and affordable also then I have come up with a great option for you all! I tried light sandwiches, pastas, burgers, and fajitas, and they tasted great.",
//     name: "Chaniksha",
//   },
// ];

//   return (
//     <div className="container mx-auto py-12">
//       <Swiper
//         modules={[Pagination, Autoplay]}
//         spaceBetween={30}
//         slidesPerView={1}
//         autoplay={{ delay: 4000 }}
//         breakpoints={{
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="w-full"
//       >
//         {testimonials.map((item, i) => (
//           <SwiperSlide key={i}>
//             <div className=" text-white p-6 rounded-2xl shadow-lg relative h-full flex flex-col justify-between">
//               {/* Stars */}
//               <div className="flex mb-4">
//                 {Array.from({ length: 5 }, (_, index) => (
//                   <svg
//                     key={index}
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill={index < item.stars ? "gold" : "gray"}
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="gold"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M11.48 3.499a.562.562 0 011.04 0l2.13 5.093a.562.562 0 00.475.345l5.478.423c.497.038.697.663.318.988l-4.17 3.53a.562.562 0 00-.182.557l1.285 5.327c.114.473-.39.846-.793.593l-4.684-2.807a.562.562 0 00-.586 0l-4.684 2.807c-.403.253-.907-.12-.793-.593l1.285-5.327a.562.562 0 00-.182-.557l-4.17-3.53c-.379-.325-.179-.95.318-.988l5.478-.423a.562.562 0 00.475-.345l2.13-5.093z"
//                     />
//                   </svg>
//                 ))}
//               </div>

//               {/* Review */}
//               <p className="text-gray-300 italic mb-6">"{item.text}"</p>

//               {/* Name */}
//               <h4 className="font-bold text-lg text-gold">{item.name}</h4>

//               {/* Quote Icon */}
//               {/* <span className="absolute bottom-4 right-4 text-gold text-4xl">”</span> */}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslations } from 'next-intl';

export default function Testimonials() {
 const t = useTranslations("home");
  const testimonials = [
    {
      image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730278/rev1_orrbxh.jpg",
      stars: 5,
      text: t('review1'),
      name: t('name1'),
    },
    {
      image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730278/rev2_u9asta.jpg",
      stars: 5,
      text: t('review2'),
      name: t('name2'),
    },
    {
      image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730278/rev3_rxdh1t.jpg",
      stars: 5,
      text: t('review3'),
      name: t('name3'),
    },
    {
      image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730278/rev1_orrbxh.jpg",
      stars: 5,
       text: t('review4'),
      name: t('name4'),
    },
    {
      image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730278/rev2_u9asta.jpg",
      stars: 5,
      text: t('review5'),
      name: t('name5'),
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        // pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-[rgba(190,147,4,0.1)] backdrop-blur-md text-white p-6 rounded-2xl shadow-lg relative flex flex-col items-center pt-16">
              {/* Image Circle */}
              {/* <div className="absolute -top-12 w-24 h-24 rounded-full border-4 border-gold overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={96}
                  height={96}
                  className="object-cover"
                /> */}
                <div className="-top-6 w-24 h-24 rounded-full border-4 border-gold overflow-hidden relative">
  <Image
    src={item.image}
    alt={item.name}
    fill
    style={{ objectFit: "cover" }}
  />
              </div>

              {/* Stars */}
              <div className="flex mb-4 mt-4">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index < item.stars ? "#8E6E3B" : "gray"}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#8E6E3B"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.13 5.093a.562.562 0 00.475.345l5.478.423c.497.038.697.663.318.988l-4.17 3.53a.562.562 0 00-.182.557l1.285 5.327c.114.473-.39.846-.793.593l-4.684-2.807a.562.562 0 00-.586 0l-4.684 2.807c-.403.253-.907-.12-.793-.593l1.285-5.327a.562.562 0 00-.182-.557l-4.17-3.53c-.379-.325-.179-.95.318-.988l5.478-.423a.562.562 0 00.475-.345l2.13-5.093z"
                    />
                  </svg>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-300 italic mb-6 text-center">{item.text}</p>

              {/* Name */}
              <h4 className="font-bold text-lg text-gold">{item.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
