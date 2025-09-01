import React from 'react'
import HeroSlider from '@/components/HeroSlider'
import MobFlipCardSlider from '@/components/mobFilpslider';
import dynamic from "next/dynamic";
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import Counters from '@/components/CounterItem';
import Testimonials from '@/components/Testimonial';
import FlipCardSlider from '@/components/Flipslider';
import ZigZagGallery from '@/components/zigzag';
import WhyChooseUs from '@/components/choose';
import { useEffect, useRef } from "react";
import Ambiance from '@/components/Ambiance';
import Footer from '@/components/Footer';
import CounterSection from '@/components/aboutcount';
import { useTranslations } from 'next-intl';
// import LanguageSwitcher from '../components/LanguageSwitcher';
import enMessages from '../locales/en.json'


// const HeavyComponent = dynamic(
//   () => import("../components/HeavyComponent"),
//   { ssr: false } // will only load on client
// );


export default function Home({ locale }) {
  // const t = useTranslations('home');
// const Home = () => {

let xPos = 0;
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttRef = useRef(null);
const about1Ref = useRef(null);
  const about2Ref = useRef(null);
  const about3Ref = useRef(null);
  const about4Ref = useRef(null);

   const smokeRef = useRef(null);
  

  useEffect(() => {
    const loadAnimation = async () => {
      
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const SplitType = (await import("split-type")).default;

      gsap.registerPlugin(ScrollTrigger);
      


     
      const subtitleSplit = new SplitType(subtitleRef.current, { types: "words, chars" });
      const titleSplit = new SplitType(titleRef.current, { types: "words, chars" });

    //    gsap.to(smokeRef.current, {
    //   x: 100,
    //   y: -50,
    //   scale: 1.2,
    //   opacity: 0.7,
    //   duration: 10,
    //   repeat: -1,
    //   yoyo: true,
    //   ease: "sine.inOut",
    // });

    const ctx = gsap.context(() => {
    let mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      gsap.to(smokeRef.current, {
        x: 40,
        y: -20,
        scale: 1.1,
        opacity: 0.7,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    mm.add("(min-width: 769px)", () => {
      gsap.to(smokeRef.current, {
        x: 100,
        y: -50,
        scale: 1.2,
        opacity: 0.7,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  });

  return () => ctx.revert();

      // Animate subtitle (letters one by one)
      gsap.from(subtitleSplit.chars, {
        y: 30,
        opacity: 0,
        stagger: 0.05, // delay between letters
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animate title (letters one by one)
      gsap.from(titleSplit.chars, {
        y: 50,
        opacity: 0,
        stagger: 0.04,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animate description normally (not split)
      gsap.fromTo(
        descRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );



       gsap.fromTo(
        buttRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    


       gsap.fromTo(
        about1Ref.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: about1Ref.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        about4Ref.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: about4Ref.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );


       gsap.fromTo(
        about3Ref.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: about3Ref.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        about2Ref.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: about2Ref.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

    }

    
    loadAnimation();
  }, []);

  return (
    <div>
      {/* <HeavyComponent/> */}
        {/* <LanguageSwitcher currentLocale="en" /> */}
      <HeroSlider/>
       <section
  className="section kf-category"
  style={{ backgroundImage: "url('assets/images/category_bg.jpg')" }}
>

    <div className="container">
      <div className="flex flex-wrap gap-2 mb-20 ">
        <div className="w-full sm:w-[45%] mt-30">
 <div className="kf-category-items" ref={about1Ref}>
          <div className="kf-category-item" >
            <div className="image kf-image-hover" >
             <Image src="/assets/images/about1.png" alt="Awatar" width={1000} height={1000}/>
            </div>
        
          </div>
          <div className="kf-category-item">
            <div className="image kf-image-hover">
              <Image src="/assets/images/about3.png" alt="Awatar" width={1000} height={1000}/>
            </div>
           
          </div>
          <div className="kf-category-item" >
            <div className="image kf-image-hover">
            <Image src="/assets/images/about4.png" alt="Awatar" width={1000} height={1000}/>

            </div>
           
          </div>
          <div className="kf-category-item">
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
            {/* {t('aboutSubtitle')} */}
          </div>
          <h3
            className="kf-title" ref={titleRef}
          
          >
            Awtar Café’s Story
            {/* {t('aboutTitle')} */}
          </h3>
        </div>
        <div className="kf-text" ref={descRef}>
          <p>
            At a cozy corner of Al Muraqqabat, there’s a place where the scent of coffee pulls you in before you even see the door. That corner was once just a dream — today, it’s Awtar.
            {/* {t('aboutDesc1')} */}
          </p>
          <p>
            We named it Awtar because every sip, every moment here plays like a note on the strings of your mood.
            {/* {t('aboutDesc2')} */}
            </p>
<p>
  We wanted to bring back the old rituals — the warmth of Arabic coffee, the calm of a fresh mint tea, the comfort of tradition.
  {/* {t('aboutDesc3')} */}
  </p>
        </div>
        <Link
          href="about"
          className="kf-btn "
         ref={buttRef}
        >
          <span >
            Read More
            {/* {t('readMore')} */}
            </span>
          <i className="fas fa-chevron-right" />
        </Link>
      </div>
      </div>
      </div> 


</section> 


<section> 
  <div className="relative w-full h-full overflow-hidden md:block hidden">
      {/* Smoke PNG */}
      <Image
        ref={smokeRef}
        src="/assets/images/bg_smoke1.png"
        alt="smoke"
        fill
         className="
   absolute top-0 left-0 w-full h-full object-cover opacity-40
  "
      />

  <h2 className='text-center'>
    Our Menu
    {/* {t('someItems')} */}
    </h2>
<FlipCardSlider/>
</div>
 <div className="relative w-full h-full overflow-hidden md:hidden block">
      {/* Smoke PNG */}
      <Image
       
        src="/assets/images/bg_smoke1.png"
        alt="smoke"
        fill
         className="
   absolute top-0 left-0 w-full h-full object-cover opacity-40
  "
      />

  <h2 className='text-center'>
    Our Menu
    {/* {t('someItems')} */}
    </h2>
<MobFlipCardSlider/>
</div>
</section>
<section className=' mt-5 md:mt-10 md:mb-10 mb-5'>

  <Ambiance/>
</section>

<WhyChooseUs/>
<CounterSection/>

{/* <Counters/> */}
<h2 className='text-center mt-20'>Some Of Our Items</h2>
<section className="w-full">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      
    <div className="overflow-hidden">
      <Image
        src="/assets/images/grid1.png"
        alt="item"
        width={640}
        height={350}
        className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>

    <div className="overflow-hidden">
      <Image
        src="/assets/images/grid2.png"
        alt="item"
        width={640}
        height={350}
        className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>

    <div className="overflow-hidden">
      <Image
        src="/assets/images/grid3.png"
        alt="item"
        width={640}
        height={350}
        className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>

    <div className="overflow-hidden">
      <Image
        src="/assets/images/grid4.png"
        alt="item"
        width={640}
        height={350}
        className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>

    <div className="overflow-hidden">
      <Image
        src="/assets/images/grid5.png"
        alt="item"
        width={640}
        height={350}
        className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>

    <div className="overflow-hidden">
      <Image
        src="/assets/images/grid6.png"
        alt="item"
        width={640}
        height={350}
        className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>

  </div>
</section>
<div>
      <p className="text-center text-[#8E6E3B] text-xl  my-8">
        Customer Feedback
        {/* {t('customerFeedback')} */}
        </p>
      <h3 className="text-center text-3xl font-bold my-8">
        What Our Clients Say
        {/* {t('whatClientsSay')} */}
        </h3>
      {/* <TestimonialSlider /> */}
      <Testimonials/>

       
    </div>







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
          {/* {t('bookingSubtitle')} */}
        </div>

        {/* Title */}
        <h3 className="kf-title text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-white">
          Your satisfaction means everything to us
          {/* {t('bookingTitle')} */}
        </h3>

        {/* Button */}
        <Link
          href="reservation"
          className="kf-btn inline-flex items-center px-2 py-2 md:px-3 md:py-3 text-sm md:text-lg font-medium text-white bg-gold rounded transition-all duration-300"
        >
          <span>
           {/* {t('bookingButton')} */}Book a Table
            </span>
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


// export async function getStaticProps() {
//   return { props: { messages: enMessages, locale: 'en' } };
// }


export async function getStaticProps() {
  return {
    props: {
      messages: (await import(`../locales/en.json`)).default,
    },
  };
}