
// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

// export default function NoticePopup() {
//   const [open, setOpen] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     if (router.pathname === "/") {
//       const timer = setTimeout(() => setOpen(true), 400); // open after 400ms
//       return () => clearTimeout(timer);
//     }
//   }, [router.pathname]);

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-black w-11/12 max-w-md rounded-2xl p-6 shadow-xl relative text-center animate-scaleIn">
        
//         {/* Close Button */}
//         <button
//   onClick={() => setOpen(false)}
//   className="absolute top-3 left-30 text-gray-600 hover:text-black text-2xl"
// >
//   ×
// </button>

//         {/* Title */}
//         <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
//           Important Notice
//         </h2>

//         {/* Text */}
//         <p className="text-sm md:text-base text-white-700 leading-relaxed mb-5">
//           We do not allow children and do not <br />
//           offer a non-smoking section.
//         </p>

//         {/* CTA */}
//         <a
//           href="/"
//           className="inline-block px-5 py-2.5 bg-yellow-500 hover:bg-yellow-600 
//                      text-black font-semibold rounded-xl transition"
//         >
//           Get In Touch
//         </a>
//       </div>
//     </div>
//   );
// }



"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
        
        {/* Close Button */}
        {/* <button
          onClick={() => setOpen(false)}
          className="absolute top-3 left-3 text-gray-400 hover:text-white text-lg md:text-xl"
        >
          ×
        </button> */}

        <button
  onClick={() => setOpen(false)}
  className="absolute top-3 left-30 w-8 h-8 flex 
             bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-full"
>
  ×
</button>

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
        <a
          href="/"
          className="inline-block px-5 py-2.5 bg-yellow-500 hover:bg-yellow-600 
                     text-black font-semibold rounded-xl transition"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
}
