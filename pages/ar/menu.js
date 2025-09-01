import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from 'gsap';
import Link from "next/link";
import Footer from "@/components/Footer";
import MobFlipCardSlider from '@/components/mobFilpslider';
import FlipCardSlider from '@/components/Flipslider'
import MenuSection from '@/components/Menupage'
import { useTranslations } from "next-intl";

export default function Menu () {
   const t = useTranslations("home");

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

   const cold_drink = [
    { key: "iceChocolate", price: 26 },
    { key: "iceAmericano", price: 26 },
    { key: "redbull", price: 20 },
    { key: "barbican", price: 18 },
    { key: "perrierWater", price: 16 },
    { key: "mineralWater", price: 4 },
    { key: "softDrinks", price: 12 },
    { key: "vitaminC", price: 15 },
    { key: "iceKarkadie", price: 18 },
  ];

const milkshakeLeft = [
  { key: "chocolate", price: 23 },
  { key: "strawberry", price: 23 },
  { key: "mango", price: 23 },
  { key: "vanilla", price: 23 },
  { key: "mix", price: 23 },
  { key: "snickers", price: 27 },
];

const milkshakeRight = [
  { key: "kitKat", price: 27 },
  { key: "lotus", price: 27 },
  { key: "oreo", price: 27 },
  { key: "pistachio", price: 27 },
  { key: "cerelac", price: 27 },
  { key: "nescafe", price: 27 },
];

const fruitSaladLeft = [
  { key: "snickersFruitSalad", price: "AED30" },
          { key: "nutellaFruitSalad", price: "AED30" },
          { key: "pistachioFruitSalad", price: "AED30" },
          { key: "uponRequestFruitSalad", price: "AED30" },
];

const fruitSaladRight = [
    { key: "iceCreamUponRequest", price: "AED22" },
          { key: "mixIceCreamAwtar", price: "AED35" },
          { key: "bananaSplit", price: "AED35" },
  ];

  const dessertLeft = [
     { key: "pistachioCrepe", price: "AED25" },
    { key: "nutellaCrepe", price: "AED25" },
    { key: "fruitCrepe", price: "AED25" },
    { key: "lotusCrepe", price: "AED25" },
 ];

 const dessertRight = [
     { key: "honeyCake", price: "AED24" },
    { key: "pistachioCake", price: "AED24" },
    { key: "carrotCake", price: "AED24" },
    { key: "chocolateCake", price: "AED24" },
      { key: "strawberryCake", price: "AED24" },
 ];

  const dessertWaffle = [
     { key: "nutellaWaffle", price: "AED22" },
    { key: "pistachioWaffle", price: "AED22" },
    { key: "fruitWaffle", price: "AED22" },
    { key: "lotusWaffle", price: "AED23" },
    
 ];

 const dessertKunafah = [
     { key: "cheeseKunafa", price: "AED26" },
    { key: "creamKunafa", price: "AED26" },
   
    
 ];

  const bubbleTeaLeft = [
     { key: "macha", price: "AED18" },
    { key: "classicVanilla", price: "AED18" },
     { key: "taro", price: "AED18" },
 ];

 const bubbleTeaRight = [
     { key: "strawberry", price: "AED18" },
    { key: "blackBerry", price: "AED18" },
     { key: "chocolate", price: "AED18" },
 ];

  const bubbleSmoothLeft = [
     { key: "peach", price: "AED18" },
    { key: "oreo", price: "AED18" },
     { key: "blackBerry", price: "AED18" },
       { key: "caramel", price: "AED18" },
         { key: "vanilla", price: "AED18" },
         
 ];


  const bubbleSmoothRight = [
     { key: "chocolate", price: "AED18" },
    { key: "masha", price: "AED18" },
     { key: "watermelon", price: "AED18" },
       { key: "strawberry", price: "AED18" },
         { key: "taro", price: "AED18" },
         
 ];
  return (
    <div className='mt-38'>

    <section>
      <div className="relative w-full h-full overflow-hidden md:block hidden">
          {/* Smoke PNG */}
          <Image
            ref={smokeRef}
            src="/assets/images/menubg.png"
            alt="smoke"
            fill
            className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
          />

      <h2 className='text-center'>
        {/* Our Menu */}
        {t('ourMenu')}
        </h2>
    <FlipCardSlider/>
    </div>
    </section>
     <div className="relative w-full h-full overflow-hidden md:hidden block">
          {/* Smoke PNG */}
          <Image

           src="/assets/images/menubg.png"
            alt="smoke"

            fill
             className="
       absolute top-0 left-0 w-full h-full object-cover opacity-40
      "
          />

      <h2 className='text-center'>
        {/* Our Menu */}
        {t('ourMenu')}
        </h2>
    <MobFlipCardSlider/>
    </div>


  <section className="section kf-menu-classic mt-32 section-bg">
    <div className="container">
      <div className="kf-titles align-center">
        <div
          className="kf-subtitle  scroll-animate"
          data-animate="active"
        >
         {/* Choose Best of */}
         {t('chooseBestOf')}
        </div>
        <h3
          className="kf-title  scroll-animate"
          data-animate="active"
        >
         {/* Hot Drinks */}
          {t('hotDrinks')}
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
    <h5 className="name px-6">
      {/* Moroccan Tea (Big) */}
       {t('moroccanTeaBig')}
      </h5>
     <div className="price">
                  <span className="px-6">AED34</span>
                </div>


</div>
</div>


  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Ginger Orange Honey */}
               {t('gingerOrangeHoney')}

        </h5>
      <div className="price"><span className="px-6">AED19</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Ginger Lemon Honey */}
        {t('gingerLemonHoney')}
        </h5>
      <div className="price"><span className="px-6">AED19</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Cumin and Lemon */}
        {t('cuminAndLemon')}
        </h5>
      <div className="price"><span className="px-6">AED19</span></div>
    </div>
  </div>


  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Matta */}
        {t('matta')}
        </h5>
      <div className="price"><span className="px-6">AED18</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Sahlab */}
         {t('sahlab')}
        </h5>
      <div className="price"><span className="px-6">AED22</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Roselle */}
        {t('roselle')}
        </h5>
      <div className="price"><span className="px-6">AED18</span></div>
    </div>
  </div>
    <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Hot mix Awtar */}
        {t('hotMixAwtar')}
        </h5>
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
      <h5 className="name px-6">
        {/* Moroccan Tea (Small) */}
         {t('moroccanTeaSmall')}
        </h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Apple Cinnamon */}
         {t('appleCinnamon')}
        </h5>
      <div className="price"><span className="px-6">AED20</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Tea kettle */}
         {t('teaKettle')}
        </h5>
      <div className="price"><span className="px-6">AED27</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Tea (Lipton-Koshre) */}
        {t('teaLipton')}
        </h5>
      <div className="price"><span className="px-6">AED13</span></div>
    </div>
  </div>
  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Tea (Iraqian, Karak, Khamer, Miramya) */}
         {t('teaIraqi')}
        </h5>
      <div className="price"><span className="px-6">AED14</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Zhourat */}
         {t('zhourat')}
        </h5>
      <div className="price"><span className="px-6">AED14</span></div>
    </div>
  </div>
    <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Espresso (Single) */}
         {t('espressoSingle')}
        </h5>
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
    <h5 className="name px-6">
      {/* Espresso (Double) */}
      {t('espressoDouble')}
      </h5>
    <div className="price">
      <span className="px-6">AED20</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">
      {/* Turkish Coffee */}
       {t('turkishCoffee')}
      </h5>
    <div className="price">
      <span className="px-6">AED17</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">
      {/* Coffee with Pistachio */}
      {t('coffeePistachio')}
      </h5>
    <div className="price">
      <span className="px-6">AED26</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">
      {/* Jouzi Mocha */}
      {t('jouziMocha')}
      </h5>
    <div className="price">
      <span className="px-6">AED22</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">
      {/* Coffee Mocha */}
       {t('coffeeMocha')}
      </h5>
    <div className="price">
      <span className="px-6">AED22</span>
    </div>
  </div>
</div>
<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">
      {/* Coffee Latte */}
      {t('coffeeLatte')}
      </h5>
    <div className="price">
      <span className="px-6">AED24</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">
      {/* Cappuccino */}
       {t('cappuccino')}
      </h5>
    <div className="price">
      <span className="px-6">AED24</span>
    </div>
  </div>
</div>
<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">
      {/* Frappuccino */}
      {t('frappuccino')}
      </h5>
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
    <h5 className="name px-6">
      {/* Nescafe Black */}
       {t('nescafeBlack')}
      </h5>
    <div className="price">
      <span className="px-6">AED15</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">
      {/* Nescafe with Milk */}
       {t('nescafeMilk')}
      </h5>
    <div className="price">
      <span className="px-6">AED20</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">
      {/* Spanish Latte */}
      {t('spanishLatte')}
      </h5>
    <div className="price">
      <span className="px-6">AED24</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">
      {/* French Coffee */}
      {t('frenchCoffee')}
      </h5>
    <div className="price">
      <span className="px-6">AED21</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">
      {/* Americano */}
       {t('americano')}
      </h5>
    <div className="price">
      <span className="px-6">AED20</span>
    </div>
  </div>
</div>
<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">
      {/* Espresso Macchiato */}
      {t('espressoMacchiato')}
      </h5>
    <div className="price">
      <span className="px-6">AED22</span>
    </div>
  </div>
</div>

<div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
  <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
    <h5 className="name px-6">
      {/* Arabic Coffee */}
       {t('arabicCoffee')}
      </h5>
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
         {/* Choose Best of */}
         {t("chooseBestOf")}
        </div>
        <h3
          className="kf-title  scroll-animate"
          data-animate="active"
        >
        {/* FRESH JUICES & COCKTAIL */}
        {t('freshJuicesCocktail')}
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
      <h5 className="name px-6">
        {/* Orange */}
         {t('orange')}
        </h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Lemon */}
         {t('lemon')}
        </h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Lemon w/mint */}
         {t('lemonMint')}
        </h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Strawberry */}
        {t('strawberry')}
        </h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Mango */}
         {t('mango')}
        </h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Pineapple */}
         {t('pineapple')}
        </h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Kiwi */}
         {t('kiwi')}
        </h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Pomegranate */}
         {t('pomegranate')}
        </h5>
      <div className="price"><span className="px-6">AED26</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Watermelon */}
        {t('watermelon')}
        </h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
         {t('melon')}
        {/* Melon */}
        </h5>
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
      <h5 className="name px-6">
        {/* Orange w/Carrot */}
         {t('orangeCarrot')}
        </h5>
      <div className="price"><span className="px-6">AED24</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Awtar Qashati */}
        {t('awtarQashati')}
        </h5>
      <div className="price"><span className="px-6">AED36</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Galaxy Cocktail */}
        {t('galaxyCocktail')}
        </h5>
      <div className="price"><span className="px-6">AED36</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Grendizer */}
         {t('grendizer')}
        </h5>
      <div className="price"><span className="px-6">AED30</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Pcs Cocktail */}
         {t('pcsCocktail')}
        </h5>
      <div className="price"><span className="px-6">AED36</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Awtar Cocktail */}
        {t('awtarCocktail')}
        </h5>
      <div className="price"><span className="px-6">AED36</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Cocktail as your order */}
         {t('cocktailYourOrder')}
        </h5>
      <div className="price"><span className="px-6">AED35</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Florida Cocktail */}
        {t('floridaCocktail')}
        </h5>
      <div className="price"><span className="px-6">AED30</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Avocado Cocktail Honey and Nuts */}
         {t('avocadoCocktail')}
        </h5>
      <div className="price"><span className="px-6">AED28</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Banana Milk Chocolate / Strawberry */}
         {t('bananaMilkChocolate')}
        </h5>
      <div className="price"><span className="px-6">AED26</span></div>
    </div>
  </div>

  <div className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 className="name px-6">
        {/* Layers Cocktail as your order */}
        {t('layersCocktailYourOrder')}
        </h5>
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
         {/* Choose Best of */}
          {t("chooseBestOf")}
        </div>
        <h3
          className="kf-title  scroll-animate"
          data-animate="active"
        >
       {/* MOJITO */}
        {t("mojito")}
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
      <h5 class="name px-6">
        {/* Orange */}
         {t("orange")}
        </h5>
      <div class="price">
        <span class="px-6">AED24</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">
        {/* Mango Mojito */}
         {t("mangoMojito")}
        </h5>
      <div class="price">
        <span class="px-6">AED27</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">
        {/* Kiwi Mojito */}
         {t("kiwiMojito")}
        </h5>
      <div class="price">
        <span class="px-6">AED27</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">
        {/* Passion Mojito */}
         {t("passionMojito")}
        </h5>
      <div class="price">
        <span class="px-6">AED27</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">
        {/* Virgin Mojito */}
         {t("virginMojito")}
        </h5>
      <div class="price">
        <span class="px-6">AED25</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">
        {/* Strawberry Mojito */}
         {t("strawberryMojito")}
        </h5>
      <div class="price">
        <span class="px-6">AED27</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">
        {/* Pomegranate Mojito */}
         {t("pomegranateMojito")}
        </h5>
      <div class="price">
        <span class="px-6">AED27</span>
      </div>
    </div>
  </div>

  <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
      <h5 class="name px-6">
        {/* Redbull Mojito */}
        {t("redbullMojito")}
        </h5>
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
           {/* Choose Best of */}
            {t("chooseBestOf")}
          </div>
          <h3
            className="kf-title  scroll-animate"
            data-animate="active"
          >
  {/* COLD DRINKS */}
  {t("coldDrinks")}
          </h3>
        </div>
  
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column */}
      <div class="kf-menu-items">
    <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 class="name px-6">
          {/* Ice Tea Black Berry */}
          {t("iceTeaBlackBerry")}
          </h5>
        <div class="price">
          <span class="px-6">AED26</span>
        </div>
      </div>
    </div>
  
    <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 class="name px-6">
          {/* Ice Tea Peach */}
          {t("iceTeaPeach")}
          </h5>
        <div class="price">
          <span class="px-6">AED26</span>
        </div>
      </div>
    </div>
  
    <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 class="name px-6">
          {/* Ice Tea Lemon */}
           {t("iceTeaLemon")}
          </h5>
        <div class="price">
          <span class="px-6">AED26</span>
        </div>
      </div>
    </div>
  
    <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 class="name px-6">
          {/* Ice Tea Pomegranate */}
           {t("iceTeaPomegranate")}
          </h5>
        <div class="price">
          <span class="px-6">AED26</span>
        </div>
      </div>
    </div>
  
    <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 class="name px-6">
          {/* Ice Tea Passionfruit */}
           {t("iceTeaPassionfruit")}
          </h5>
        <div class="price">
          <span class="px-6">AED26</span>
        </div>
      </div>
    </div>
  
    <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 class="name px-6">
          {/* Ice Spanish Latte */}
           {t("iceSpanishLatte")}
          </h5>
        <div class="price">
          <span class="px-6">AED26</span>
        </div>
      </div>
    </div>
  
    <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 class="name px-6">
          {/* Ice Latte */}
          {t("iceLatte")}
          </h5>
        <div class="price">
          <span class="px-6">AED26</span>
        </div>
      </div>
    </div>
  
    <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 class="name px-6">
          {/* Ice Mocha */}
           {t("iceMocha")}
          </h5>
        <div class="price">
          <span class="px-6">AED26</span>
        </div>
      </div>
    </div>
  
    <div class="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div class="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 class="name px-6">
          {/* Ice Macchiato */}
           {t("iceMacchiato")}
          </h5>
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
  
      
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Column */}
    <div className="p-6 rounded-lg shadow">
      <Image src="/assets/images/cold1.png" alt="hotdrink" width={700} height={1100} />
    </div>
  
    {/* Right Column */}
    <div className="kf-menu-items">
      {/* {[
        { name: "Ice Chocolate", price: "AED26" },
        { name: "Ice Amricano", price: "AED26" },
        { name: "Redbull", price: "AED20" },
        { name: "Barbican", price: "AED18" },
        { name: "Perrier water", price: "AED16" },
        { name: "Mineral water", price: "AED4" },
        { name: "Soft drinks", price: "AED12" },
        { name: "Vitamin C", price: "AED15" },
        { name: "Ice Karkadie", price: "AED18" },
      ].map((item, i) => (
        <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
            <h5 className="name px-6">{item.name}</h5>
            <div className="price">
              <span className="px-6">{item.price}</span>
            </div>
          </div>
        </div>
      ))} */}

      <div className="kf-menu-items">
  {cold_drink.map((item) => (
    <div key={item.key} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 className="name px-6">{t(`${item.key}`)}</h5>
        <div className="price">
          <span className="px-6">AED{item.price}</span>
        </div>
      </div>
    </div>
  ))}
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
           {/* Choose Best of */}
           {t('chooseBestOf')}
          </div>
          <h3
            className="kf-title  scroll-animate"
            data-animate="active"
          >
  {/* MILK SHAKE */}
  {t('milkShake')}
          </h3>
        </div>
  
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column */}
     <div className="kf-menu-items">
    {/* {[
      { name: "Chocolate", price: "AED23" },
      { name: "Strawberry", price: "AED23" },
      { name: "Mango", price: "AED23" },
      { name: "Vanilla", price: "AED23" },
      { name: "Mix", price: "AED23" },
      { name: "Snickers", price: "AED27" },
    ].map((item, i) => (
      <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
          <h5 className="name px-6">{item.name}</h5>
          <div className="price">
            <span className="px-6">{item.price}</span>
          </div>
        </div>
      </div>
    ))} */}
    <div className="kf-menu-items">
  {milkshakeLeft.map((item, i) => (
    <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 className="name px-6">{t(`${item.key}`)}</h5>
        <div className="price">
          <span className="px-6">AED{item.price}</span>
        </div>
      </div>
    </div>
  ))}
</div>
  </div>
  
        {/* Right Column */}
          <div className="p-6 rounded-lg shadow">
          <Image src="/assets/images/milk_1.png" alt="hotdrink" width={700} height={750} />
        </div>
       
   
      </div>
  
      
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Column */}
    <div className="p-6 rounded-lg shadow">
      <Image src="/assets/images/milk_2.png" alt="hotdrink" width={700} height={700} />
    </div>
  
    {/* Right Column */}
  <div className="kf-menu-items">
    {/* {[
      { name: "Kit Kat", price: "AED27" },
      { name: "Lotus", price: "AED27" },
      { name: "Oreo", price: "AED27" },
      { name: "Pistachio", price: "AED27" },
      { name: "Cerelac", price: "AED27" },
      { name: "Nescafe", price: "AED27" },
    ].map((item, i) => (
      <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
          <h5 className="name px-6">{item.name}</h5>
          <div className="price">
            <span className="px-6">{item.price}</span>
          </div>
        </div>
      </div>
    ))} */}

    {milkshakeRight.map((item, i) => (
    <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 className="name px-6">{t(`${item.key}`)}</h5>
        <div className="price">
          <span className="px-6">AED{item.price}</span>
        </div>
      </div>
    </div>
  ))}
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
           {/* Choose Best of */}
           {t('chooseBestOf')}
          </div>
          <h3
            className="kf-title  scroll-animate"
            data-animate="active"
          >
  {/* FRUIT SALAD & ICE CREAM */}
   {t('fruitSaladTitle')}
          </h3>
        </div>
  
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column */}
     <div className="kf-menu-items">
    {/* {[
     { key: "Snickers Fruit Salad", price: "AED30" },
      { key: "Nutella Fruit Salad", price: "AED30" },
      { key: "Pistachio Fruit Salad", price: "AED30" },
      { key: "Upon Request Fruit Salad", price: "AED30" },
    ].map((item, i) => (
      <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
          <h5 className="name px-6">{t(`${item.key}`)}</h5>
          <div className="price">
            <span className="px-6">{item.price}</span>
          </div>
        </div>
      </div>
    ))} */}

    {fruitSaladLeft.map((item, i) => (
    <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 className="name px-6">{t(`${item.key}`)}</h5>
        <div className="price">
          <span className="px-6">{item.price}</span>
        </div>
      </div>
    </div>
  ))}
  </div>
  
        {/* Right Column */}
          <div className="p-6 rounded-lg shadow">
          <Image src="/assets/images/fruitsald.png" alt="hotdrink" width={700} height={600} />
        </div>
       
   
      </div>
  
      
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Column */}
    <div className="p-6 rounded-lg shadow">
      <Image src="/assets/images/fruitsald1.png" alt="hotdrink" width={700} height={400} />
    </div>
  
    {/* Right Column */}
  <div className="kf-menu-items">
    {/* {[
      { name: "Ice cream upon request", price: "AED22" },
      { name: "Mix Ice cream Awtar", price: "AED35" },
      { name: "Banana Split", price: "AED35" },
     
    ].map((item, i) => (
      <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
          <h5 className="name px-6">{item.name}</h5>
          <div className="price">
            <span className="px-6">{item.price}</span>
          </div>
        </div>
      </div>
    ))} */}

    {fruitSaladRight.map((item, i) => (
    <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 className="name px-6">{t(`${item.key}`)}</h5>
        <div className="price">
          <span className="px-6">{item.price}</span>
        </div>
      </div>
    </div>
  ))}
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
           {t('chooseBestOf')}
          </div>
          <h3
            className="kf-title  scroll-animate"
            data-animate="active"
          >
  {/* DESSERT */}
   {t('dessertTitle')}
          </h3>
        </div>
  
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column */}
     <div className="kf-menu-items">
    {/* {[
     { name: "Pistachio Crepe", price: "AED25" },
      { name: "Nutella Crepe", price: "AED25" },
      { name: "Fruit Crepe", price: "AED25" },
      { name: "Lotus Crepe", price: "AED25" },
    ].map((item, i) => (
      <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
          <h5 className="name px-6">{item.name}</h5>
          <div className="price">
            <span className="px-6">{item.price}</span>
          </div>
        </div>
      </div>
    ))} */}
    
    {dessertLeft.map((item, i) => (
    <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 className="name px-6">{t(`${item.key}`)}</h5>
        <div className="price">
          <span className="px-6">{item.price}</span>
        </div>
      </div>
    </div>
  ))}
  </div>
  
        {/* Right Column */}
          <div className="p-6 rounded-lg shadow">
          <Image src="/assets/images/dessert.png" alt="hotdrink" width={700} height={500} />
           <h3 className="text-center">
            {/* CREPE */}
            {t('crepeTitle')}
            </h3>
       
        </div>
       
   
      </div>
  
      
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Column */}
    <div className="p-6 rounded-lg shadow">
      <Image src="/assets/images/dessert1.png" alt="hotdrink" width={700} height={600} />
       <h3 className="text-center">
        {/* CAKE */}
        {t('cakeTitle')}
        </h3>
    </div>
  
    {/* Right Column */}
  <div className="kf-menu-items">
    {/* {[
       { name: "Honey Cake", price: "AED24" },
      { name: "Pistachio Cake", price: "AED24" },
      { name: "Carrot Cake", price: "AED24" },
      { name: "Chocolate Cake", price: "AED24" },
      { name: "Strawberry Cake", price: "AED24" },
    ].map((item, i) => (
      <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
          <h5 className="name px-6">{item.name}</h5>
          <div className="price">
            <span className="px-6">{item.price}</span>
          </div>
        </div>
      </div>
    ))} */}
    
    {dessertRight.map((item, i) => (
    <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 className="name px-6">{t(`${item.key}`)}</h5>
        <div className="price">
          <span className="px-6">{item.price}</span>
        </div>
      </div>
    </div>
  ))}
  </div>
  
  </div>
  
   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column */}
     <div className="kf-menu-items">
    {/* {[
     { name: "Nutella Waffle", price: "AED22" },
      { name: "Pistachio Waffle", price: "AED22" },
      { name: "Fruit Waffle", price: "AED22" },
      { name: "Lotus Waffle", price: "AED23" },
    ].map((item, i) => (
      <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
          <h5 className="name px-6">{item.name}</h5>
          <div className="price">
            <span className="px-6">{item.price}</span>
          </div>
        </div>
      </div>
    ))} */}

     {dessertWaffle.map((item, i) => (
    <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 className="name px-6">{t(`${item.key}`)}</h5>
        <div className="price">
          <span className="px-6">{item.price}</span>
        </div>
      </div>
    </div>
  ))}
  </div>
  
        {/* Right Column */}
          <div className="p-6 rounded-lg shadow">
          <Image src="/assets/images/waffle.png" alt="hotdrink" width={700} height={400} />
           <h3 className="text-center">
            {/* Waffle */}
            {t('waffleTitle')}
            </h3>
       
        </div>
       
   
      </div>
  
          
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Column */}
    <div className="p-6 rounded-lg shadow">
      <Image src="/assets/images/kunafa.png" alt="hotdrink" width={700} height={100} />
       {/* <h3 className="text-center">Kunafa</h3> */}
    </div>
  
    {/* Right Column */}
  <div className="kf-menu-items">
    {/* {[
       { name: "Cheese Kunafah", price: "AED26" },
      { name: "Cream Kunafah", price: "AED26" },
     
    ].map((item, i) => (
      <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
          <h5 className="name px-6">{item.name}</h5>
          <div className="price">
            <span className="px-6">{item.price}</span>
          </div>
        </div>
      </div>
    ))} */}
    {dessertKunafah.map((item, i) => (
    <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 className="name px-6">{t(`${item.key}`)}</h5>
        <div className="price">
          <span className="px-6">{item.price}</span>
        </div>
      </div>
    </div>
  ))}
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
           {/* Choose Best of */}
           {t('chooseBestOf')}
          </div>
          <h3
            className="kf-title  scroll-animate"
            data-animate="active"
          >
{t('bubbleTeaTitle')}
          </h3>
        </div>
  
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column */}
     <div className="kf-menu-items">
    {/* {[
     { name: "Macha", price: "AED18" },
      { name: "Classic Vanilla", price: "AED18" },
      { name: "Taro", price: "AED18" },
    
    ].map((item, i) => (
      <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
          <h5 className="name px-6">{item.name}</h5>
          <div className="price">
            <span className="px-6">{item.price}</span>
          </div>
        </div>
      </div>
    ))} */}

    {bubbleTeaLeft.map((item, i) => (
    <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 className="name px-6">{t(`${item.key}`)}</h5>
        <div className="price">
          <span className="px-6">{item.price}</span>
        </div>
      </div>
    </div>
  ))}
  </div>
  
        {/* Right Column */}
          <div className="p-6 rounded-lg shadow">
          <Image src="/assets/images/bubble.png" alt="hotdrink" width={700} height={600} />
        </div>
       
   
      </div>
  
      
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Column */}
    <div className="p-6 rounded-lg shadow">
      <Image src="/assets/images/bubble1.png" alt="hotdrink" width={700} height={400} />
    </div>
  
    {/* Right Column */}
  <div className="kf-menu-items">
    {/* {[
      { name: "Strawberry", price: "AED18" },
      { name: "Black Berry", price: "AED18" },
      { name: "Chocolate", price: "AED18" },
     
    ].map((item, i) => (
      <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
          <h5 className="name px-6">{item.name}</h5>
          <div className="price">
            <span className="px-6">{item.price}</span>
          </div>
        </div>
      </div>
    ))} */}

      {bubbleTeaRight.map((item, i) => (
    <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 className="name px-6">{t(`${item.key}`)}</h5>
        <div className="price">
          <span className="px-6">{item.price}</span>
        </div>
      </div>
    </div>
  ))}
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
           {/* Choose Best of */}
           {t('chooseBestOf')}
          </div>
          <h3
            className="kf-title  scroll-animate"
            data-animate="active"
          >
  {/* BUBBLE SMOOTHIE */}
  {t('bubbleSmoothieTitle')}
          </h3>
        </div>
  
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column */}
     <div className="kf-menu-items">
    {/* {[
    { name: "Peach", price: "AED18" },
      { name: "Oreo", price: "AED18" },
      { name: "Black Berry", price: "AED18" },
      { name: "Caramel", price: "AED18" },
      { name: "Vanilla", price: "AED18" },
    
    ].map((item, i) => (
      <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
          <h5 className="name px-6">{item.name}</h5>
          <div className="price">
            <span className="px-6">{item.price}</span>
          </div>
        </div>
      </div>
    ))} */}

      {bubbleSmoothLeft.map((item, i) => (
    <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 className="name px-6">{t(`${item.key}`)}</h5>
        <div className="price">
          <span className="px-6">{item.price}</span>
        </div>
      </div>
    </div>
  ))}


  </div>
  
  <div className="kf-menu-items">
    {/* {[
      { name: "Chocolate", price: "AED18" },
      { name: "Masha", price: "AED18" },
      { name: "Watermelon", price: "AED18" },
      { name: "Strawberry", price: "AED18" },
      { name: "Taro", price: "AED18" },
    ].map((item, i) => (
      <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
          <h5 className="name px-6">{item.name}</h5>
          <div className="price">
            <span className="px-6">{item.price}</span>
          </div>
        </div>
      </div>
    ))} */}
     {bubbleSmoothRight.map((item, i) => (
    <div key={i} className="kf-menu-item-2 col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div className="kf-menu-item-2 element-anim-1 scroll-animate animate__active animate__animated">
        <h5 className="name px-6">{t(`${item.key}`)}</h5>
        <div className="price">
          <span className="px-6">{item.price}</span>
        </div>
      </div>
    </div>
  ))}
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
      <source src="/assets/images/video/awtar-vedio.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
 <div className="absolute inset-0 bg-black/50"></div>
    {/* Content on top of video */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <div className="kf-titles max-w-2xl">
        {/* Subtitle */}
        <div className=" mb-2 text-white text-sm md:text-base">
          {/* Booking Table For You, Family & Friends */}
        {t('bookingSubtitle')}
        </div>

        {/* Title */}
        <h3 className="kf-title text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-white">
          {/* Your satisfaction means everything to us */}
        {t('bookingTitle')}
        </h3>

        {/* Button */}
        <Link
          href="reservation"
          className="kf-btn inline-flex items-center px-2 py-2 md:px-3 md:py-3 text-sm md:text-lg font-medium text-white bg-gold rounded transition-all duration-300"
        >
          <span>
            {/* Booking Table */}
            {t('bookingButton')}
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

export async function getStaticProps() {
  return {
    props: {
      messages: (await import(`../../locales/ar.json`)).default,
    },
  };
}
