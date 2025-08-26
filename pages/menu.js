import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from 'gsap';
import Link from "next/link";
import Footer from "@/components/Footer";

import FlipCardSlider from '@/components/Flipslider'
import MenuSection from '@/components/Menupage'
export default function Menu () {
      
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
      // const { Draggable }  = await import("gsap/Draggable");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const SplitType = (await import("split-type")).default;

      gsap.registerPlugin(ScrollTrigger);
      // gsap.registerPlugin(Draggable);


// function getBgPos(i){ //returns the background-position string to create parallax movement in each image
//   return ( -gsap.utils.wrap(0,360,gsap.getProperty(ring, 'rotationY')-180-i*36)/360*400 )+'px 0px';
// }

      // Split text for subtitle and title
      const subtitleSplit = new SplitType(subtitleRef.current, { types: "words, chars" });
      const titleSplit = new SplitType(titleRef.current, { types: "words, chars" });

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
    <div className='mt-38'>
    
    <section> 
      <div className="relative w-full h-full overflow-hidden">
          {/* Smoke PNG */}
          <Image
            ref={smokeRef}
            src="/assets/images/menubg.png"
            alt="smoke"
            width={1920}
            height={1042}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
          />
    
      <h2 className='text-center'>Our Menu</h2>
    <FlipCardSlider/>
    </div>
    </section>

    
  <section className="section kf-menu-classic mt-32 section-bg">
    <div className="container">
      <div className="kf-titles align-center">
        <div
          className="kf-subtitle  scroll-animate"
          data-animate="active"
        >
         Choose Best of
        </div>
        <h3
          className="kf-title  scroll-animate"
          data-animate="active"
        >
         Hot Drinks
        </h3>
      </div>
    

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Left Column */}
      <div className="p-6 rounded-lg shadow">
        <Image src="/assets/images/hotdrink1.jpg" alt="hotdrink" width={700} height={1100} />
      </div>

      {/* Right Column */}
       <div
        className="kf-menu-items">


             <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
 <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated "
>
    <h5 className="name px-6">Moroccan Tea (Big)</h5>
     <div className="price">
                  <span className="px-6">AED34</span>
                </div>

                
</div>
</div>


  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Ginger Orange Honey</h5>
      <div className="price"><span className="px-6">AED19</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Ginger Lemon Honey</h5>
      <div className="price"><span className="px-6">AED19</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Cumin and Lemon</h5>
      <div className="price"><span className="px-6">AED19</span></div>
    </div>
  </div>


  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Matta</h5>
      <div className="price"><span className="px-6">AED18</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Sahlab</h5>
      <div className="price"><span className="px-6">AED22</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Roselle</h5>
      <div className="price"><span className="px-6">AED18</span></div>
    </div>
  </div>
    <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Hot mix Awtar</h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>
</div>
    </div>  
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        className="kf-menu-items">

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Moroccan Tea (Small)</h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Apple Cinnamon</h5>
      <div className="price"><span className="px-6">AED20</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Tea kettle</h5>
      <div className="price"><span className="px-6">AED27</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Tea (Lipton-Koshre)</h5>
      <div className="price"><span className="px-6">AED13</span></div>
    </div>
  </div>
  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Tea (Iraqian, Karak, Khamer, Miramya)</h5>
      <div className="price"><span className="px-6">AED14</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Zhourat</h5>
      <div className="price"><span className="px-6">AED14</span></div>
    </div>
  </div>
    <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Espresso (Single)</h5>
      <div className="price"><span className="px-6">AED16</span></div>
    </div>
  </div>



  
  
</div>    
      {/* Left Column */}
      <div className="p-6 rounded-lg shadow">
        <Image src="/assets/images/hotdrink2.jpg" alt="hotdrink" width={700} height={900} />
      </div>

      {/* Right Column */}
       
     

    </div>

    
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Left Column */}
      <div className="p-6 rounded-lg shadow">
        <Image src="/assets/images/hotdrink3.png" alt="hotdrink" width={700} height={1100} />
      </div>

      {/* Right Column */}
       <div
        className="kf-menu-items">


         <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">Espresso (Double)</h5>
    <div className="price">
      <span className="px-6">AED20</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">Turkish Coffee</h5>
    <div className="price">
      <span className="px-6">AED17</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">Coffee with Pistachio</h5>
    <div className="price">
      <span className="px-6">AED26</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">Jouzi Mocha</h5>
    <div className="price">
      <span className="px-6">AED22</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">Coffee Mocha</h5>
    <div className="price">
      <span className="px-6">AED22</span>
    </div>
  </div>
</div>
<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">Coffee Latte</h5>
    <div className="price">
      <span className="px-6">AED24</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">Cappuccino</h5>
    <div className="price">
      <span className="px-6">AED24</span>
    </div>
  </div>
</div>
<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">Frappuccino</h5>
    <div className="price">
      <span className="px-6">AED24</span>
    </div>
  </div>
</div>


</div>    
    </div>


     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        className="kf-menu-items">



<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">Nescafe Black</h5>
    <div className="price">
      <span className="px-6">AED15</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">Nescafe with Milk</h5>
    <div className="price">
      <span className="px-6">AED20</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">Spanish Latte</h5>
    <div className="price">
      <span className="px-6">AED24</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">French Coffee</h5>
    <div className="price">
      <span className="px-6">AED21</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">Americano</h5>
    <div className="price">
      <span className="px-6">AED20</span>
    </div>
  </div>
</div>
<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">Espresso Macchiato</h5>
    <div className="price">
      <span className="px-6">AED22</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">Arabic Coffee</h5>
    <div className="price">
      <span className="px-6">AED28</span>
    </div>
  </div>
</div>


  
  
</div>    
      {/* Left Column */}
      <div className="p-6 rounded-lg shadow">
        <Image src="/assets/images/hotdrink4.png" alt="hotdrink" width={700} height={900} />
      </div>

      {/* Right Column */}
       
     

    </div>
       
       
    
    </div>
  </section>
      {/* end */}

      <section className="section kf-menu-classic mt-32 section-bg">
    <div className="container">
      <div className="kf-titles align-center">
        <div
          className="kf-subtitle  scroll-animate"
          data-animate="active"
        >
         Choose Best of
        </div>
        <h3
          className="kf-title  scroll-animate"
          data-animate="active"
        >
        FRESH JUICES & COCKTAIL
        </h3>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Left Column */}
      <div className="p-6 rounded-lg shadow">
        <Image src="/assets/images/jui2.png" alt="hotdrink" width={700} height={1100} />
      </div>

      {/* Right Column */}
       <div
        className="kf-menu-items">

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Orange</h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Lemon</h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Lemon w/mint</h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Strawberry</h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Mango</h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Pineapple</h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Kiwi</h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Pomegranate</h5>
      <div className="price"><span className="px-6">AED26</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Watermelon</h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Melon</h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>


</div>    
    </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Left Column */}
     

      {/* Right Column */}
       <div
        className="kf-menu-items">
<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Orange w/Carrot</h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>
 
  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Awtar Qashati</h5>
      <div className="price"><span className="px-6">AED36</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Galaxy Cocktail</h5>
      <div className="price"><span className="px-6">AED36</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Grendizer</h5>
      <div className="price"><span className="px-6">AED30</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Pcs Cocktail</h5>
      <div className="price"><span className="px-6">AED36</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Awtar Cocktail</h5>
      <div className="price"><span className="px-6">AED36</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Cocktail as your order</h5>
      <div className="price"><span className="px-6">AED35</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Florida Cocktail</h5>
      <div className="price"><span className="px-6">AED30</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Avocado Cocktail Honey and Nuts</h5>
      <div className="price"><span className="px-6">AED28</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Banana Milk Chocolate / Strawberry</h5>
      <div className="price"><span className="px-6">AED26</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">Layers Cocktail as your order</h5>
      <div className="price"><span className="px-6">AED36</span></div>
    </div>
  </div>


</div>  
 <div className="py-6 rounded-lg shadow">
        <Image src="/assets/images/jui1.png" alt="hotdrink" width={700} height={1200} />
      </div>  
    </div>
    


</div>


  </section>

   <section className="section kf-menu-classic mt-32 section-bg">
    <div className="container">
      <div className="kf-titles align-center">
        <div
          className="kf-subtitle  scroll-animate"
          data-animate="active"
        >
         Choose Best of
        </div>
        <h3
          className="kf-title  scroll-animate"
          data-animate="active"
        >
       MOJITO
        </h3>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Left Column */}
      <div className="p-6 rounded-lg shadow">
        <Image src="/assets/images/mojito.png" alt="hotdrink" width={700} height={1100} />
      </div>

      {/* Right Column */}
      <div
        className="kf-menu-items">

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">Orange</h5>
      <div class="price">
        <span class="px-6">AED24</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">Mango Mojito</h5>
      <div class="price">
        <span class="px-6">AED27</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">Kiwi Mojito</h5>
      <div class="price">
        <span class="px-6">AED27</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">Passion Mojito</h5>
      <div class="price">
        <span class="px-6">AED27</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">Virgin Mojito</h5>
      <div class="price">
        <span class="px-6">AED25</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">Strawberry Mojito</h5>
      <div class="price">
        <span class="px-6">AED27</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">Pomegranate Mojito</h5>
      <div class="price">
        <span class="px-6">AED27</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">Redbull Mojito</h5>
      <div class="price">
        <span class="px-6">AED28</span>
      </div>
    </div>
  </div>

</div>
 
    </div>
   


</div>


  </section>


  
   <section className="section kf-menu-classic mt-32 section-bg">
    <div className="container">
      <div className="kf-titles align-center">
        <div
          className="kf-subtitle  scroll-animate"
          data-animate="active"
        >
         Choose Best of
        </div>
        <h3
          className="kf-title  scroll-animate"
          data-animate="active"
        >
COLD DRINKS
        </h3>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Left Column */}
    <div class="kf-menu-items">
  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">Ice Tea Black Berry</h5>
      <div class="price">
        <span class="px-6">AED26</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">Ice Tea Peach</h5>
      <div class="price">
        <span class="px-6">AED26</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">Ice Tea Lemon</h5>
      <div class="price">
        <span class="px-6">AED26</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">Ice Tea Pomegranate</h5>
      <div class="price">
        <span class="px-6">AED26</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">Ice Tea Passionfruit</h5>
      <div class="price">
        <span class="px-6">AED26</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">Ice Spanish Latte</h5>
      <div class="price">
        <span class="px-6">AED26</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">Ice Latte</h5>
      <div class="price">
        <span class="px-6">AED26</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">Ice Mocha</h5>
      <div class="price">
        <span class="px-6">AED26</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">Ice Macchiato</h5>
      <div class="price">
        <span class="px-6">AED26</span>
      </div>
    </div>
  </div>
</div>

      {/* Right Column */}
        <div className="p-6 rounded-lg shadow">
        <Image src="/assets/images/cold.png" alt="hotdrink" width={700} height={1100} />
      </div>
     
 
    </div>
</div>
  </section>
  
      <div className="section kf-video mt-10">
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
