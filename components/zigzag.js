"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";



const images = [
  "/assets/images/atom1.png",
  "/assets/images/atom (2).jpg",
  "/assets/images/atom (3).jpg",
  "/assets/images/atom (4).jpg",
  "/assets/images/atom (5).jpg",

];

const ZigZagGallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadAnimation = async () => {
     const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".zigzag-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 100, opacity: 0, rotate: i % 2 === 0 ? -5 : 5 },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }

   loadAnimation();
},

[]);

  return (
    <section ref={containerRef} className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Ambiance Gallery
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {images.map((src, i) => (
            <div
              key={i}
              className={`zigzag-item relative w-full h-80 overflow-hidden rounded-2xl shadow-lg ${
                i % 2 === 0 ? "ml-auto max-w-[70%]" : "mr-auto max-w-[70%]"
              }`}
            >
              <Image
                src={src}
                alt={`gallery-${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZigZagGallery;

