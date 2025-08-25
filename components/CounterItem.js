
// "use client";

// import React, { useEffect, useState } from "react";

// const CounterItem = ({ end, label }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 2000; // animation duration in ms
//     const increment = end / (duration / 50); // update every 50ms

//     const counter = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         start = end;
//         clearInterval(counter);
//       }
//       setCount(Math.floor(start));
//     }, 50);

//     return () => clearInterval(counter);
//   }, [end]);

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <h3 className="text-4xl md:text-5xl font-bold text-gold mb-2">
//         {count}+
//       </h3>
//       <p className="text-gray-300 font-medium">{label}</p>
//     </div>
//   );
// };

// export default function Counters() {
//   const counters = [
//     { end: 200, label: "Premium Clients" },
//     { end: 100, label: "Menu Items" },
//     { end: 600, label: "Google Reviews" },
//   ];

//   return (
//     <div className="container mx-auto py-16">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-7xlS">
//         {counters.map((item, index) => (
//           <CounterItem key={index} end={item.end} label={item.label} />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";

const CounterItem = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // animation duration in ms
    const increment = end / (duration / 50); // update every 50ms

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <div className="flex items-center justify-center text-center text-3xl md:text-4xl font-bold text-gold">
      <span>{count}+</span>
      <span className="ml-2 text-base md:text-lg font-medium text-gray-300">
        {label}
      </span>
    </div>
  );
};

export default function Counters() {
  const counters = [
    { end: 200, label: "Premium Clients" },
    { end: 100, label: "Menu Items" },
    { end: 600, label: "Google Reviews" },
  ];

  return (
    <div className=" mx-auto py-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        {counters.map((item, index) => (
          <CounterItem key={index} end={item.end} label={item.label} />
        ))}
      </div>
    </div>
  );
}
