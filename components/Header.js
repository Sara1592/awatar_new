
"use client";

import React, { useState , useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
// import { useTranslation } from 'next-i18next';

const Header = () => {
  // const { t } = useTranslation('common'); 
  const { locale, locales, asPath } = useRouter();
  const [mobileMenu, setMobileMenu] = useState(false);

   const handleChangeLanguage = (e) => {
    const newLocale = e.target.value;
    push(asPath, asPath, { locale: newLocale });
  };


  return (
    <header className="kf-header">
      {/* Topline */}
      <div className="kf-topline hidden md:flex justify-between items-center py-2 px-4">
        <div className="kf-h-group flex items-center gap-2">
          <i className="far fa-clock" />
          <span>Open Hours: 08:00 am - 09:00 pm</span>
        </div>
        <div className="kf-h-social flex items-center gap-3">
          <Link href="https://www.facebook.com/awtarcafe.dubai" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" /></Link>
          <Link href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></Link>
          <Link href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></Link>
          <Link href="https://youtube.com" target="_blank" rel="noreferrer"><i className="fab fa-youtube" /></Link>
        </div>
        <div className="kf-h-group flex items-center gap-2">
          <i className="fas fa-map-marker-alt" />
          <span>Dubai - Al Muraqqabat – Deira – Bu Haleeba plaza</span>
        </div>
      </div>

      {/* Navbar */}
      <div className="kf-navbar flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="kf-logo">
          <Link href="/">
            <Image src="/assets/images/logo.png" alt="logo" width={200} height={150} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex kf-main-menu">
          <ul className="flex gap-6">
            <li><Link href="/">
            Home
            {/* {t('home')} */}
            </Link></li>
            <li><Link href="/menu">
            Menu
            {/* {t('menu')} */}
            </Link></li>
            <li><Link href="/gallery">
            Gallery
            {/* {t('gallery')} */}
            </Link></li>
            <li><Link href="/about">
            About us
            {/* {t('about')} */}
            </Link></li>
            <li><Link href="/contact">
            Contact
            {/* {t('contact')} */}
            </Link></li>

          </ul>
          
        </div>

     
        <div className="flex items-center gap-4">
            
           <Link href="/reservation" className="hidden md:inline-block kf-btn h-btn">
            <span>
              Book a table
              {/* {t('bookTable')} */}
              </span> 
          </Link> 

<div className="md:hidden ">

      <button
            className="text-2xl z-50 relative"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <i className={mobileMenu ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
</div>
          {/* Mobile Menu Button */}
        
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 pointer-events-none `}>
        <div
          className={`absolute inset-0 transform transition-transform duration-300 bg-black bg-opacity-90 ${
            mobileMenu ? "translate-x-0 pointer-events-auto" : "-translate-x-full"
          }`}
        >
          <div className="p-6 mt-20 flex flex-col ">
            <ul className="flex flex-col gap-4 text-lg mb-6">
              <li className="flex items-center gap-2">
                <i className="fas fa-home"></i>
                <Link href="/" onClick={() => setMobileMenu(false)}>
                Home
                {/* {t('home')} */}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-utensils"></i>
                <Link href="/menu" onClick={() => setMobileMenu(false)}>
                Menu
                {/* {t('menu')} */}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-image"></i>
                <Link href="/gallery" onClick={() => setMobileMenu(false)}>
                Gallery
                {/* {t('gallery')} */}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-info-circle"></i>
                <Link href="/about" onClick={() => setMobileMenu(false)}>
                About us
                {/* {t('about')} */}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope"></i>
                <Link href="/contact" onClick={() => setMobileMenu(false)}>
                Contact
                {/* {t('contact')} */}
                </Link>
              </li>
              
            </ul>
            {/* Mobile language switch */}
            {/* <select
              value={locale}
              onChange={handleChangeLanguage}
              className="border rounded px-2 py-1 mt-4"
            >
              {locales.map((loc) => (
                <option key={loc} value={loc}>
                  {loc.toUpperCase()}
                </option>
              ))}
            </select> */}

            {/* Social Links */}
            <div className="kf-h-social flex gap-4 mb-4">
              <Link href="https://www.facebook.com/awtarcafe.dubai" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" /></Link>
              <Link href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></Link>
              <Link href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></Link>
              <Link href="https://youtube.com" target="_blank" rel="noreferrer"><i className="fab fa-youtube" /></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
