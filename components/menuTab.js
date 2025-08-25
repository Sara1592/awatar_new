// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// // Sample menu data
// const menuItems = {
//   "View All": [
//     { id: 1, img: "/assets/images/milk1.png", name: "MilkShake" },
//     { id: 2, img: "/assets/images/hotdrink1.jpg", name: "Hot Drink 1" },
//     { id: 3, img: "/assets/images/gall_jui1.png", name: "Sandwich 2" },
//     { id: 4, img: "/assets/images/gall_tab.png", name: "Juices" },
//     { id: 5, img: "/assets/images/hotdrink3.png", name: "Hot Drink 1" },
//     { id: 6, img: "/assets/images/hotdrink2.jpg", name: "Sandwich 2" },
//   ],

//   "Juices": [
//     { id: 1, img: "/assets/images/gall_tab.png", name: "Juices 1" },
//     { id: 2, img: "/assets/images/gall_jui1.png", name: "Juices 2" },
//      { id: 3, img: "/assets/images/gall_jui2.png", name: "Juices 3" },
//   ],

//    "MilkShake": [
//     { id: 1, img: "/assets/images/milk1.png", name: "Milkshake" },
//     { id: 2, img: "/assets/images/milk2.png", name: "Milkshake" },
    
//   ],
//   "Hot Drink": [
//     { id: 1, img: "/assets/images/hotdrink1.jpg", name: "Hot Drink" },
//     { id: 2, img: "/assets/images/hotdrink2.jpg", name:  "Hot Drink" },
//      { id: 3, img: "/assets/images/hotdrink3.png", name:  "Hot Drink" },
//   ],
// };

// export default function MenuTabs() {
//   const [activeTab, setActiveTab] = useState("View All");

//   return (
//     <section className="section kf-gallery">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Tabs */}
//         <div className="kf-filter kf-filter-gal">
//           {Object.keys(menuItems).map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={` font-semibold ${
//                 activeTab === tab
//                   ? "border-b-4 border-yellow-600 text-yellow-600"
//                   : "text-gray-600 hover:text-yellow-600"
//               } transition`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Tab content */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
//                 className="object-cover w-full h-64"
//               />
//               {/* <h3 className="text-center mt-2 font-medium">{item.name}</h3> */}
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

// Sample menu data
const menuItems = {
  "View All": [
    { id: 1, img: "/assets/images/milk1.png", name: "MilkShake" },
    { id: 2, img: "/assets/images/hotdrink1.jpg", name: "Hot Drink 1" },
    { id: 3, img: "/assets/images/gall_jui1.png", name: "Sandwich 2" },
    { id: 4, img: "/assets/images/gall_tab.png", name: "Juices" },
    { id: 5, img: "/assets/images/hotdrink3.png", name: "Hot Drink 1" },
    { id: 6, img: "/assets/images/hotdrink2.jpg", name: "Sandwich 2" },
  ],
  Juices: [
    { id: 1, img: "/assets/images/gall_tab.png", name: "Juices 1" },
    { id: 2, img: "/assets/images/gall_jui1.png", name: "Juices 2" },
    { id: 3, img: "/assets/images/gall_jui2.png", name: "Juices 3" },
  ],
  MilkShake: [
    { id: 1, img: "/assets/images/milk1.png", name: "Milkshake" },
    { id: 2, img: "/assets/images/milk2.png", name: "Milkshake" },
  ],
  "Hot Drink": [
    { id: 1, img: "/assets/images/hotdrink1.jpg", name: "Hot Drink" },
    { id: 2, img: "/assets/images/hotdrink2.jpg", name: "Hot Drink" },
    { id: 3, img: "/assets/images/hotdrink3.png", name: "Hot Drink" },
  ],
};

export default function MenuTabs() {
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
              className={`font-semibold px-4 py-2 rounded ${
                activeTab === tab
                  ? "border-b-4 border-yellow-600 text-yellow-600"
                  : "text-gray-600 hover:text-yellow-600"
              } transition`}
            >
              {tab}
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
                alt={item.name}
                width={600}
                height={600}
                className="object-cover w-full h-48 sm:h-56 md:h-64"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
