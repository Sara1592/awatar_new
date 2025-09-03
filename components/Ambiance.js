
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/parallax";
import Link from "next/link";
import { useTranslations } from "next-intl";


const Ambiance = () => {
   const t = useTranslations("home");
   
const slides = [
  { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730222/atom1_jkdb77.png"
 },
  { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730222/atom2_lvjupz.png"},
  // { image:  "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730222/atom3_cx4rkm.png" },
  { image:  "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730223/atom4_ekgv8m.png"},
  { image: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730223/atom5_nc5erh.png"  },
];
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
           <h2>
            {/* Perfect Ambiance */}
            {t('ambtitle')}
            </h2>
          <p>
            {/* Whether you’re chilling with friends, catching a game, or just escaping the noise — Awtar is your spot. */}
            {t('ambdescription')}
            </p>
          
          <Link href="about" className="kf-btn w-48">
            <span>
              {/* Read More */}
              {t('ambreadMore')}
              </span>
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
          @media (max-width: 480px) {

  .ambiance-container {
    margin-top:0px;
    padding: 30px 30px;
    margin-bottom:-20px;
  }

  .slide-item {
    height: 250px;
  }

  .ambiance-right h2 {
    font-size: 2rem;
    margin-top:-80px
    
  }

  .ambiance-right p {
    font-size: 1rem;
  }

  .kf-btn {
    padding: 6px 12px;
    font-size: 0.85rem;
  }
}
      `}</style>
    </div>
  );
};

export default Ambiance;
