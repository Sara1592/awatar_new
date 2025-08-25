// // components/MenuSection.js
// "use client";

// export default function MenuSection() {
//   const menuItems = [
//     {
//       name: "Chicken",
//       price: "$4.9",
//       desc: "Sed ut perspiciatis unde",
//       img: "/images/chicken.jpg",
//     },
//     {
//       name: "Salad Bowl",
//       price: "$199",
//       desc: "Sed ut perspiciatis unde",
//       img: "/images/salad.jpg",
//     },
//     {
//       name: "Smoothie",
//       price: "$55.9",
//       desc: "Sed ut perspiciatis unde",
//       img: "/images/smoothie.jpg",
//     },
//     {
//       name: "Gin Trifles",
//       price: "$37.5",
//       desc: "Sed ut perspiciatis unde",
//       img: "/images/gin.jpg",
//     },
//     {
//       name: "Quesadillas",
//       price: "$4.9",
//       desc: "Sed ut perspiciatis unde",
//       img: "/images/quesadillas.jpg",
//     },
//     {
//       name: "Sea Fish",
//       price: "$79.0",
//       desc: "Sed ut perspiciatis unde",
//       img: "/images/fish.jpg",
//     },
//     {
//       name: "Okonomiyaki",
//       price: "$99.9",
//       desc: "Sed ut perspiciatis unde",
//       img: "/images/okonomiyaki.jpg",
//     },
//     {
//       name: "Benedict",
//       price: "$68.5",
//       desc: "Sed ut perspiciatis unde",
//       img: "/images/benedict.jpg",
//     },
//   ];

//   return (
//     <section className="bg-black text-white py-16">
//       <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
//         {/* Left column */}
//         <div className="space-y-6">
//           {menuItems.slice(0, 4).map((item, i) => (
//             <div
//               key={i}
//               className="flex items-start border-b border-gray-700 pb-4"
//             >
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-16 h-16 rounded-md object-cover mr-4"
//               />
//               <div className="flex-1">
//                 <div className="flex justify-between items-center">
//                   <h3 className="font-semibold text-lg">{item.name}</h3>
//                   <span className="text-gold font-semibold">{item.price}</span>
//                 </div>
//                 <p className="text-gray-400 text-sm">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right column */}
//         <div className="space-y-6">
//           {menuItems.slice(4).map((item, i) => (
//             <div
//               key={i}
//               className="flex items-start border-b border-gray-700 pb-4"
//             >
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-16 h-16 rounded-md object-cover mr-4"
//               />
//               <div className="flex-1">
//                 <div className="flex justify-between items-center">
//                   <h3 className="font-semibold text-lg">{item.name}</h3>
//                   <span className="text-gold font-semibold">{item.price}</span>
//                 </div>
//                 <p className="text-gray-400 text-sm">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

