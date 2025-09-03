
// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { useTranslations } from "next-intl";

// // Sample menu data

// export default function MenuTabs() {
//   const t = useTranslations("home");
//   const menuItems = {
  
//   "View All": [
//     { id: 1, img: "/assets/images/milk1.png", name: "MilkShake" },
//     { id: 2, img: "/assets/images/hotdrink1.jpg", name: "Hot Drink 1" },
//     { id: 3, img: "/assets/images/gall_jui1.png", name: "Sandwich 2" },
//     { id: 4, img: "/assets/images/gall_tab.png", name: "Juices" },
//     { id: 5, img: "/assets/images/hotdrink3.png", name: "Hot Drink 1" },
//     { id: 6, img: "/assets/images/hotdrink2.jpg", name: "Sandwich 2" },
//   ],
//   Juices: [
//     { id: 1, img: "/assets/images/gall_tab.png", name: "Juices 1" },
//     { id: 2, img: "/assets/images/gall_jui1.png", name: "Juices 2" },
//     { id: 3, img: "/assets/images/gall_jui2.png", name: "Juices 3" },
//   ],
//   MilkShake: [
//     { id: 1, img: "/assets/images/milk1.png", name: "Milkshake" },
//     { id: 2, img: "/assets/images/milk2.png", name: "Milkshake" },
//   ],
//   "Hot Drink": [
//     { id: 1, img: "/assets/images/hotdrink1.jpg", name: "Hot Drink" },
//     { id: 2, img: "/assets/images/hotdrink2.jpg", name: "Hot Drink" },
//     { id: 3, img: "/assets/images/hotdrink3.png", name: "Hot Drink" },
//   ],
// };

//   const [activeTab, setActiveTab] = useState("View All");

//   return (
//     <section className="section kf-gallery">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Tabs */}
//         <div className="kf-filter kf-filter-gal flex flex-wrap gap-4 mb-6">
//           {Object.keys(menuItems).map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`font-semibold  rounded ${
//                 activeTab === tab
//                   ? "border-b-4 border-yellow-600 text-yellow-600"
//                   : "text-gray-600 hover:text-yellow-600"
//               } transition`}
//             >
//               {/* {tab} */}
//                {t(tab)}
//             </button>
//           ))}
//         </div>

//         {/* Tab content */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {menuItems[activeTab].map((item) => (
//             <div
//               key={item.id}
//               className="overflow-hidden rounded-lg shadow hover:scale-105 transform transition"
//             >
//               <Image
//                 src={item.img}
//                 alt={item.name}
//                 width={600}
//                 height={600}
//                 className="object-cover w-full h-48 sm:h-56 md:h-64"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function MenuTabs() {
  const t = useTranslations("home");

  const menuItems = {
    "View All": [
      { id: 1, img: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730263/milk1_pdxe0j.png", name: "MilkShake1" },
      { id: 2, img: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730243/hotdrink1_lt5k69.png", name: "HotDrink1" },
      { id: 3, img: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730236/gall_jui1_g8pmbk.png", name: "Sandwich2" },
      { id: 4, img: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730237/gall_tab_omefbi.png", name: "Juices" },
      { id: 5, img: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730244/hotdrink3_t2fbem.png", name: "HotDrink3" },
      { id: 6, img: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730243/hotdrink2_wrsc67.png", name: "HotDrink2" }
    ],
    Juices: [
      { id: 1, img: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730237/gall_tab_omefbi.png", name: "Juices1" },
      { id: 2, img: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730236/gall_jui1_g8pmbk.png", name: "Juices2" },
      { id: 3, img: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730236/gall_jui2_h4nyuy.png", name: "Juices3" }
    ],
    MilkShake: [
      { id: 1, img: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730263/milk1_pdxe0j.png", name: "MilkShake1" },
      { id: 2, img: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730264/milk2_ske0dy.png", name: "MilkShake2" }
    ],
    "Hot Drink": [
      { id: 1, img: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730243/hotdrink1_lt5k69.png", name: "HotDrink1" },
      { id: 2, img: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730243/hotdrink2_wrsc67.png", name: "HotDrink2" },
      { id: 3, img: "https://res.cloudinary.com/dw1eguafc/image/upload/v1756730244/hotdrink3_t2fbem.png", name: "HotDrink3" }
    ]
  };

  const [activeTab, setActiveTab] = useState("View All");

  return (
    <section className="section kf-gallery">
      <div className="max-w-7xl mx-auto px-6">
        {/* Tabs */}
        <div className="kf-filter kf-filter-gal flex flex-wrap gap-4 mb-6">
          {Object.keys(menuItems).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-semibold  rounded ${
                activeTab === tab
                  ? "border-b-4 border-yellow-600 text-yellow-600"
                  : "text-gray-600 hover:text-yellow-600"
              } transition`}
            >
              {t(tab)}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {menuItems[activeTab].map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-lg shadow hover:scale-105 transform transition"
            >
              <Image
                src={item.img}
                alt={t(item.name)}
                width={600}
                height={600}
                className="object-cover w-full h-48 sm:h-56 md:h-64"
              />
              {/* <p className="text-center mt-2">{t(item.name)}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
