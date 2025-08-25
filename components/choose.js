"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

useEffect(() => {
  const whychoose = async () => {
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Title
      gsap.from(".why-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-title",
          start: "top 80%",
        },
      });

      // Paragraphs
      gsap.from(".why-text", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".why-text",
          start: "top 80%",
        },
      });

      // Image animation
      gsap.from(".why-image", {
        opacity: 0,
        scale: 0.9,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-image",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  };
  whychoose();
}, []);

  return (
    // <section
    //   ref={sectionRef}
    //   className="relative bg-gradient-to-r from-black via-[#352900] to-black text-white py-20 px-8 md:px-20 overflow-hidden"
    // >
    //   {/* Optional smoke overlay */}
    //   <div className="absolute inset-0 bg-[url('/assets/images/bg_smoke1.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>

    //   <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
    //     {/* Left Content */}
    //     <div>
    //       <h2 className="why-title text-4xl md:text-5xl font-bold mb-6 text-[#ffd700] drop-shadow-lg">
    //         Why Choose Us
    //       </h2>
    //       <p className="why-text text-lg opacity-80">
    //         We’re not just another café. We’re home to the best café in town —
    //         smooth, flavorful, and crafted to perfection, every time.
    //       </p>

    //       <p className="why-text text-lg opacity-80 mt-4">
    //         At Awtar, we mix tradition with a modern twist. From rich Arabic
    //         coffee to icy fresh juices, every detail is made to elevate your
    //         moment. Whether you’re chilling with friends, catching a game, or
    //         just escaping the noise — Awtar is your spot.
    //       </p>

    //       <p className="why-text text-lg opacity-80 mt-4">
    //         Great vibes and a space that feels just right. That’s why Awtar.
    //       </p>

    //       <Link href="/" className="kf-btn w-48 mt-6 inline-block">
    //         <span>Read More</span>
    //         <i className="fas fa-chevron-right" />
    //       </Link>
    //     </div>

    //     {/* Right Image Feature Cards */}
    //     <div className="grid sm:grid-cols-2 gap-6">
        
        
    //     </div>
    //   </div>
    // </section>

    <section
  ref={sectionRef}
  className="relative bg-gradient-to-r from-black via-[#352900] to-black text-white py-20 px-8 md:px-20 overflow-hidden"
>
  {/* Optional smoke overlay */}
  <div className="absolute inset-0 bg-[url('/assets/images/bg_smoke1.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>

  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
   
    <div className="flex-1">
      <h2 className="why-title text-4xl md:text-5xl font-bold mb-6  drop-shadow-lg">
        Why Choose Us
      </h2>
      <p className="why-text text-lg opacity-80">
        We’re not just another café. We’re home to the best café in town —
        smooth, flavorful, and crafted to perfection, every time.
      </p>

      <p className="why-text text-lg opacity-80 mt-4">
        At Awtar, we mix tradition with a modern twist. From rich Arabic coffee
        to icy fresh juices, every detail is made to elevate your moment.
        Whether you’re chilling with friends, catching a game, or just escaping
        the noise — Awtar is your spot.
      </p>

      <p className="why-text text-lg opacity-80 mt-4">
        Great vibes and a space that feels just right. That’s why Awtar.
      </p>

      <Link href="/about" className="kf-btn w-48 mt-6 inline-block">
        <span>Read More</span>
        <i className="fas fa-chevron-right" />
      </Link>
    </div>

    
    <div className="flex-1 flex flex-col gap-6">
       <div className="relative  overflow-hidden shadow-lg ">
        <Image
          src="/assets/images/atom (17).png"
          alt="choose"
          width={500}
          height={700}
          className="why-imagew-full h-96 object-cover"
        />


      </div> 

    
     
    </div>
  </div>
</section>

  );
};

export default WhyChooseUs;
