// // App.js
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, Parallax } from "swiper/modules";
// import Image from "next/image";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/parallax";

//   const slides = [
//     {
//       image: "assets/images/atom1.png",
    
//     //   navImg: "assets/images/nav.png",
//     },
//     {
//         image: "assets/images/atom1.png",
    
      
//     //  navImg: "assets/images/nav1.png",
//     },
//     {
//         image: "assets/images/atom1.png",
    
     
//     },
//   ];


// const Ambiance = () => {
 

//   return (
//     <div className="container">
//     <div style={{ display: "flex", padding: "50px", gap: "50px" }}>
//       {/* Left Column */}
//       <div style={{ flex: 1 }}>
//         <h2>Awesome Title</h2>
//         <p>This is some descriptive text explaining the slider content.</p>
//         <button style={{ padding: "10px 20px", cursor: "pointer" }}>
//           Click Me
//         </button>
//       </div>

//       {/* Right Column */}
     
//         <section className="relative w-full h-auto ">
//       <Swiper
//         modules={[Navigation, Autoplay, Parallax]}
//         loop={true}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         navigation={false}
       
//         speed={1000}
//         parallax={true}
//         className="w-full h-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="relative w-[70%] h-full"
//               style={{ backgroundImage: `url(${slide.image})` }}
//               data-swiper-parallax="-100"
//             >
//               {/* Overlay */}
             

//               {/* Text */}
             
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//     </section>
//       </div>
//     </div>
    
//   );
// };

// export default Ambiance;


// App.js
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, Parallax } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/parallax";

// const slides = [
//   { image: "assets/images/atom1.png" },
//   { image: "assets/images/atom1.png" },
//   { image: "assets/images/atom1.png" },
// ];

// const Ambiance = () => {
//   return (
//     <div style={{ display: "flex", width: "100%", minHeight: "500px" }}>
//       {/* Left Column */}
//       <div
//         style={{
//           width: "50%",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           padding: "50px",
//         }}
//       >
//         <h2>Awesome Title</h2>
//         <p>This is some descriptive text explaining the slider content.</p>
//         <button style={{ padding: "10px 20px", cursor: "pointer" }}>
//           Click Me
//         </button>
//       </div>

//       {/* Right Column */}
//       <div style={{ width: "50%", position: "relative" }}>
//         <Swiper
//           modules={[Navigation, Autoplay, Parallax]}
//           loop={true}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           navigation={true} // enable nav buttons
//           speed={1000}
//           parallax={true}
//           style={{ width: "100%", height: "100%" }}
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 style={{
//                   width: "100%",
//                   height: "500px",
//                   backgroundImage: `url(${slide.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//                 data-swiper-parallax="-100"
//               ></div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Ambiance;


// App.js
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, Parallax } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/parallax";

// const slides = [
//   { image: "assets/images/atom1.png" },
//   { image: "assets/images/atom1.png" },
//   { image: "assets/images/atom1.png" },
// ];

// const Ambiance = () => {
//   return (
//     <div
//       style={{
//         maxWidth: "1200px",
//         margin: "0 auto",
//         padding: "50px 20px",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap", // allows stacking on mobile
//           gap: "50px",
//         }}
//       >
//         {/* Left Column */}
//         <div className="text-center"
//         >
//           <h2>Awesome Title</h2>
//           <p>This is some descriptive text explaining the slider content.</p>
//           <a
//           href="/"
//           className="kf-btn "
        
//         >
//           <span >Read More</span>
//           <i className="fas fa-chevron-right" />
//         </a>

//         </div>

//         {/* Right Column */}
//         <div
//           style={{
//             flex: "1 1 400px",
//             minWidth: "300px",
//             position: "relative",
//           }}
//         >
//           <Swiper
//             modules={[Navigation, Autoplay, Parallax]}
//             loop={true}
//             autoplay={{ delay: 5000, disableOnInteraction: false }}
//             navigation={false}
//             speed={1000}
//             parallax={true}
//             style={{
//               width: "100%",
//               height: "500px", // slider height
//             }}
//           >
//             {slides.map((slide, index) => (
//               <SwiperSlide key={index}>
//                 <div
//                   style={{
//                     width: "100%",
//                     height: "500px",
//                     backgroundImage: `url(${slide.image})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                   data-swiper-parallax="-100"
//                 ></div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ambiance;

// App.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/parallax";
import Link from "next/link";

const slides = [
  { image: "assets/images/atom1.png" },
  { image: "assets/images/atom2.png" },
  { image: "assets/images/atom3.png" },
  { image: "assets/images/atom4.png" },
  { image: "assets/images/atom5.png" },
];

const Ambiance = () => {
  return (
    <div className="ambiance-container glass">
      <div className="ambiance-wrapper">
        {/* Left Column */}
        <div className="ambiance-right">
          <Swiper
            modules={[Navigation, Autoplay, Parallax]}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={false}
            speed={1000}
            parallax={true}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="slide-item"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                  data-swiper-parallax="-100"
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Column */}
        <div className="ambiance-right">
           <h2>Perfect Ambiance</h2>
          <p>Whether you’re chilling with friends, catching a game, or just escaping the noise — Awtar is your spot.</p>
          <Link href="about" className="kf-btn w-48">
            <span>Read More</span>
            <i className="fas fa-chevron-right" />
          </Link>
         
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`

      .glass {
      
      background: rgba(190, 147, 4, 0.1); 
      backdrop-filter: blur(10px); /* blur effect */
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3); /* subtle border */
      border-radius: 15px; /* rounded corners */
      padding: 30px; /* padding inside box */
      color: #fff; /* text color */
    }

    /* Optional: add subtle shadow for depth */
    .glass {
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
    }

    /* Make links stand out on glass background */
    

        .ambiance-container {
        margin-top:50px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 50px 20px;
        }
        .ambiance-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 50px;
        }
        .ambiance-left {
          flex: 1 1 400px;
          min-width: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .ambiance-right {
          flex: 1 1 400px;
          min-width: 300px;
          position: relative;
        }
        .slide-item {
          width: 100%;
          height: 500px;
          background-size: cover;
          background-position: center;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .ambiance-wrapper {
            flex-direction: column;
          }
          .ambiance-left,
          .ambiance-right {
            width: 100%;
          }
          .slide-item {
            height: 300px; /* smaller slider height on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default Ambiance;
