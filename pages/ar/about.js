import { useEffect, useRef } from "react";
import AbtBreadcrumbBanner from '@/components/AbtBreadcrum'
import gsap from 'gsap';
import Image from "next/image";
import Link from "next/link";
import AboutWhyChooseUs from "@/components/aboutchoose";
import CounterSection from "@/components/aboutcount";
import Footer from "@/components/Footer";

const About = () => {
//     let xPos = 0;
//   const subtitleRef = useRef(null);
//   const titleRef = useRef(null);
//   const descRef = useRef(null);
//   const buttRef = useRef(null);
// const about1Ref = useRef(null);
//   const about2Ref = useRef(null);
//   const about3Ref = useRef(null);
//   const about4Ref = useRef(null);
const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);

   const smokeRef = useRef(null);


  useEffect(() => {
    const loadAnimation = async () => {
      // const { Draggable }  = await import("gsap/Draggable");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const SplitText = (await import("split-type")).default;

      gsap.registerPlugin(ScrollTrigger);
      // gsap.registerPlugin(Draggable);
       const splitSub = new SplitText(subtitleRef.current, { type: "chars" });
    const splitTitle = new SplitText(titleRef.current, { type: "chars" });


// function getBgPos(i){ //returns the background-position string to create parallax movement in each image
//   return ( -gsap.utils.wrap(0,360,gsap.getProperty(ring, 'rotationY')-180-i*36)/360*400 )+'px 0px';
// }

      // Split text for subtitle and title
    //   const subtitleSplit = new SplitType(subtitleRef.current, { types: "words, chars" });
    //   const titleSplit = new SplitType(titleRef.current, { types: "words, chars" });
 gsap.from(splitSub.chars, {
      opacity: 0,
      y: 30,
      stagger: 0.03,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(splitTitle.chars, {
      opacity: 0,
      y: 40,
      stagger: 0.05,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.3,
    });
 gsap.from(descRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power2.out",
      delay: 0.8,
    });


    }


    loadAnimation();
  }, []);
  return (
    <div>
      <AbtBreadcrumbBanner/>
         {/* <section
        className="section kf-category"
        style={{ backgroundImage: "url('assets/images/category_bg.jpg')" }}
      >

          <div className="container">
            <div className="flex flex-wrap gap-2 mb-20 ">
              <div className="w-full sm:w-[45%] mt-30">
       <div className="kf-category-items" >
                <div className="kf-category-item" >
                  <div className="image kf-image-hover" ref={about1Ref} >
                   <Image src="/assets/images/about1.png" alt="Awatar" width={1000} height={1000}/>
                  </div>

                </div>
                <div className="kf-category-item" ref={about3Ref}>
                  <div className="image kf-image-hover">
                    <Image src="/assets/images/about3.png" alt="Awatar" width={1000} height={1000}/>
                  </div>

                </div>
                <div className="kf-category-item" ref={about4Ref}>
                  <div className="image kf-image-hover">
                  <Image src="/assets/images/about4.png" alt="Awatar" width={1000} height={1000}/>

                  </div>

                </div>
                <div className="kf-category-item" ref={about2Ref}>
                  <div className="image kf-image-hover">
                  <Image src="/assets/images/about2.png" alt="Awatar" width={1000} height={1000}/>

                  </div>

                </div>
              </div>
              </div>
                <div className="w-full sm:w-[5%] mt-30">

            </div>
            <div className="w-full sm:w-[40%] mt-0 md:mt-50">
             <div className="kf-titles">
                <div
                  className="kf-subtitle " ref={subtitleRef} >
                  About Us
                </div>
                <h3
                  className="kf-title" ref={titleRef}

                >
                  Awtar Café’s Story
                </h3>
              </div>
              <div className="kf-text" ref={descRef}>
                <p>
                  At a cozy corner of Al Muraqqabat, there’s a place where the scent of coffee pulls you in before you even see the door. That corner was once just a dream — today, it’s Awtar.
                </p>
                <p>We named it Awtar because every sip, every moment here plays like a note on the strings of your.
                </p>
                <p>We wanted to bring back the old rituals — the warmth of Arabic coffee, the calm of a fresh mint tea, the comfort of tradition.</p>
              </div>
              <a
                href="/"
                className="kf-btn "
               ref={buttRef}
              >
                <span >Read More</span>
                <i className="fas fa-chevron-right" />
              </a>
            </div>
            </div>
            </div>


      </section>  */}

      <section   className="section kf-category py-20"
  style={{ backgroundImage: "url('assets/images/abt_bg.png')" }}
>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div>
          <h4
            ref={subtitleRef}
            className="kf-subtitle "
          >
            About
          </h4>
          <h2
            ref={titleRef}
            className="text-3xl md:text-5xl font-bold leading-tight mb-4"
          >
            Awtar Café’ <br />
          </h2>
          <h3 className="text-lg text-gray-600 mb-6">
           Warm Flavors, Warmer Hearts Food & Drinks crafted with care, shared with joy.
          </h3>
          <p ref={descRef} className=" mb-6 leading-relaxed">
            In the heart of Al Muraqqabat, Awtar Café brings people together
            over rich flavors and relaxing moments. Whether you’re sipping on
            traditional Arabic coffee, cooling off with fresh juices, or
            enjoying one of our signature cold drinks — there’s something here
            for every mood.
            <br />
            <br />
            Our wide selection of flavors, from classic favorites to bold blends, makes Awtar the perfect place to sit back, catch up, and enjoy the vibe — day or night.
          </p>
          <Link
            href="/menu"
            className="kf-btn"
          >
            <span > Our Menu</span>
          <i className="fas fa-chevron-right" />

          </Link>
        </div>

        {/* Right column */}
        <div className="relative w-full h-[450px] md:h-[550px]">
          <Image
            src="/assets/images/about_1.png"
            alt="Awtar Café"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

<AboutWhyChooseUs/>
<CounterSection/>
  <div className="section kf-video">
  <div className="kf-video-item relative w-full h-[250px] overflow-hidden">
    {/* Video */}
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="assets/images/video/awtar-vedio.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
 <div className="absolute inset-0 bg-black/50"></div>
    {/* Content on top of video */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <div className="kf-titles max-w-2xl">
        {/* Subtitle */}
        <div className=" mb-2 text-white text-sm md:text-base">
          Booking Table For You, Family & Friends
        </div>

        {/* Title */}
        <h3 className="kf-title text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-white">
          Your satisfaction means everything to us
        </h3>

        {/* Button */}
        <Link
          href="reservation"
          className="kf-btn inline-flex items-center px-2 py-2 md:px-3 md:py-3 text-sm md:text-lg font-medium text-white bg-gold rounded transition-all duration-300"
        >
          <span>Booking Table</span>
          <i className="fas fa-chevron-right ml-2" />
        </Link>
      </div>
    </div>
  </div>
</div>
<Footer/>

    </div>
  )
}

export default About

export async function getStaticProps() {
  return {
    props: {
      messages: (await import(`../../locales/ar.json`)).default,
    },
  };
}
