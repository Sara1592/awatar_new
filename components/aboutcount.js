"use client";

import CountUp from "react-countup";
import { FaGem, FaUserTie, FaSmile, FaBookOpen } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function CounterSection() {
    const t = useTranslations('home');
    
const stats = [
  {
    icon: <FaGem className="text-4xl text-[#8E6E3B]" />,
    number: 256,
    // label: "Premium Clients",
    label: t("premiumClients"),
  },
  {
    icon: <FaUserTie className="text-4xl text-[#8E6E3B]" />,
    number: 10,
    // label: "Professional Team",
    label: t("professionalTeam"),
  },
  {
    icon: <FaSmile className="text-4xl text-[#8E6E3B]" />,
    number: 300,
    // label: "5 Star Reviews",
    label: t("reviews")
  },
  {
    icon: <FaBookOpen className="text-4xl text-[#8E6E3B]" />,
    number: 100,
    // label: "Menu Item",
    label: t("menuItems")
  },
];

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Left smoke */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-30 animate-floatSlow">
        {/* <Image
          src="/assets/images/smoke_bg.png"
          alt="smoke"
          fill
          className="object-contain"
        /> */}
      </div>

      {/* Right smoke */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-30 animate-floatSlow delay-2000">
        {/* <Image
          src="/assets/images/smoke-right.png"
          alt="smoke"
          fill
          className="object-contain"
        /> */}
      </div>

      {/* Stats grid */}
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center text-white">
        {stats.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="rounded-xl">{item.icon}</div>
            <h2 className="text-4xl font-bold text-yellow-600">
              <CountUp end={item.number} duration={3} />+
            </h2>
            <p className="text-lg">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
