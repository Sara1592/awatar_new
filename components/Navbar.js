"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslations } from 'next-intl';
import { HiMenu, HiX } from "react-icons/hi";



export default function Header() {
      const t = useTranslations('home');
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}   
     <div className="kf-topline hidden md:flex justify-between items-center py-2 px-4">
        <div className="kf-h-group flex items-center gap-2">
          <i className="far fa-clock" />
          <span>{t('openHours')}</span>
        </div>
        <div className="kf-h-social flex items-center gap-3">
          <Link href="https://www.facebook.com/awtarcafe.dubai" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" /></Link>
          {/* <Link href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></Link> */}
          <Link href="https://www.instagram.com/awtarcafe.ae/" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></Link>
          {/* <Link href="https://youtube.com" target="_blank" rel="noreferrer"><i className="fab fa-youtube" /></Link> */}
        </div>
        <div className="kf-h-group flex items-center gap-2">
          <i className="fas fa-map-marker-alt" />
          <span><Link href="https://maps.app.goo.gl/o4FdEsR6L57Qy8ebA" className="">{t('address')}</Link></span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-black shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/assets/images/logo.png" alt="Logo" width={150} height={50} />
            </Link>
          </div>

          {/* Menu - Desktop */}
          <ul className="hidden md:flex space-x-8 font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          {/* Book a Table */}
          <div className="hidden md:block">
            <Link href="/booking" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Book a Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden bg-white shadow-lg">
            <ul className="flex flex-col space-y-4 p-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li>
                <Link href="/booking" className="bg-red-600 text-white px-4 py-2 rounded w-full text-center">
                  Book a Table
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
