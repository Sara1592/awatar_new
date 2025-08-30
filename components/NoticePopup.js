"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NoticePopup() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      const timer = setTimeout(() => setOpen(true), 400); // open after 400ms
      return () => clearTimeout(timer);
    }
  }, [router.pathname]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      
      <div className="bg-black w-11/12 max-w-md rounded-2xl p-6 shadow-xl relative text-center animate-scaleIn">
        
<div
  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center
             bg-[#8E6E3B] hover:bg-[#8E6E3B] text-white text-sm rounded-full cursor-pointer"
  onClick={() => setOpen(false)}
>
  ×
</div>
{/* 
        <button
  onClick={() => setOpen(false)}
  className="close-btn">
  ×
</button> */}

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-100 mb-3">
          Important Notice
        </h2>

        {/* Text */}
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-5">
          We do not allow children and do not <br />
          offer a non-smoking section.
        </p>

        {/* CTA */}
        <Link
          href="contact"
           onClick={() => setOpen(false)}
          className="kf-btn">
         <span>Get In Touch</span> 
        </Link>
      </div>
    </div>
  );
}
