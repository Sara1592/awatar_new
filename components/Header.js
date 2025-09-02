
"use client";

import React, { useState , useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslations } from 'next-intl';


const Header = () => {
  const t = useTranslations('home');
 const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();
  const { pathname, asPath, push } = router;
  
   const handleChangeLanguage = (e) => {
    const newLocale = e.target.value;
    let newPath = asPath;

    if (newLocale === 'ar') {
      if (!pathname.startsWith('/ar')) {
        newPath = `/ar${asPath}`;
      }
    } else {
      if (pathname.startsWith('/ar')) {
        newPath = asPath.replace('/ar', '') || '/';
      }
    }

    push(newPath);
  };

return (
    <header className="w-full">
     
      <div className="kf-topline hidden md:flex justify-between items-center py-2 px-4">
        <div className="kf-h-group flex items-center gap-2">
          <i className="far fa-clock" />
          <span>{t('openHours')}</span>
        </div>
        <div className="kf-h-social flex items-center gap-3">
          <Link href="https://www.facebook.com/awtarcafe.dubai" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" /></Link>
          <Link href="https://www.instagram.com/awtarcafe.ae/" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></Link>
        </div>
        <div className="kf-h-group flex items-center gap-2">
          <i className="fas fa-map-marker-alt" />
          <span><Link href="https://maps.app.goo.gl/o4FdEsR6L57Qy8ebA" className="">{t('address')}</Link></span>
        </div>
      </div>
      <div className="kf-navbar flex justify-between items-center py-4 px-4 md:px-8">
        <div className="kf-logo">
          <Link href="/">
            <Image src="/assets/images/logo.png" alt="logo" width={200} height={150} />
          </Link>
        </div>

        <div className="hidden md:flex kf-main-menu">
          <ul className="flex gap-6">
            <li><Link href="/">
            {t('home')}
            </Link></li>
            <li><Link href="/menu">
            {t('menu')}
            </Link></li>
            <li><Link href="/gallery">
            {t('gallery')}
            </Link></li>
            <li><Link href="/about">
            {t('about')}
            </Link></li>
            <li><Link href="/contact">
            {t('contact')}
            </Link></li>
            <li>
  <Link
    href="#"
    className={`cursor-pointer ${!pathname.startsWith('/ar') ? 'font-bold underline' : ''}`}
    onClick={(e) => {
      e.preventDefault(); // prevent default link behavior
      if (pathname.startsWith('/ar')) {
        push(asPath.replace('/ar', '') || '/');
      }
    }}
  >
    En
  </Link>
</li>

<li>
  <Link
    href="#"
    className={`cursor-pointer ${pathname.startsWith('/ar') ? 'font-bold underline' : ''}`}
    onClick={(e) => {
      e.preventDefault(); // prevent default link behavior
      if (!pathname.startsWith('/ar')) {
        push(`/ar${asPath}`);
      }
    }}
  >
    Ar
  </Link>
</li>

            {/* <li>
               <select className="lang" onChange={handleChangeLanguage} value={pathname.startsWith('/ar') ? 'ar' : 'en' }>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>
            </li> */}
          </ul>
        </div>
        <div className="flex items-center gap-4">
           <Link href="/reservation" className="hidden md:inline-block kf-btn h-btn">
            <span>
              {t('bookTable')}
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
        </div>
      </div>
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
                {t('home')}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-utensils"></i>
                <Link href="/menu" onClick={() => setMobileMenu(false)}>
                {t('menu')}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-image"></i>
                <Link href="/gallery" onClick={() => setMobileMenu(false)}>
                {t('gallery')}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-info-circle"></i>
                <Link href="/about" onClick={() => setMobileMenu(false)}>
                {t('about')}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope"></i>
                <Link href="/contact" onClick={() => setMobileMenu(false)}>
                {t('contact')}
                </Link>
              </li>
              
  {/* <Link
    href="#"
    className={`cursor-pointer ${!pathname.startsWith('/ar') ? 'font-bold underline' : ''}`}
   
    onClick={(e) => {
      e.preventDefault(); // prevent default link behavior
      if (pathname.startsWith('/ar')) {
        push(asPath.replace('/ar', '') || '/');
      }
    }}
  >
    En
  </Link> */}

  <Link
    href="#"
    className={`cursor-pointer ${!pathname.startsWith('/ar') ? 'font-bold underline' : ''}`}
    onClick={(e) => {
      e.preventDefault();
      if (pathname.startsWith('/ar')) {
        setMobileMenu(false);           // close menu first
        push(asPath.replace('/ar', '') || '/');
      }
    }}
  >
    En
  </Link>



  {/* <Link
    href="#"
    className={`cursor-pointer ${pathname.startsWith('/ar') ? 'font-bold underline' : ''}`}
    onClick={(e) => {
      e.preventDefault(); // prevent default link behavior
      if (!pathname.startsWith('/ar')) {
        push(`/ar${asPath}`);
      }
    }}
  >
    Ar
  </Link> */}

  <Link
    href="#"
    className={`cursor-pointer ${pathname.startsWith('/ar') ? 'font-bold underline' : ''}`}
    onClick={(e) => {
      e.preventDefault();
      if (!pathname.startsWith('/ar')) {
        setMobileMenu(false);          
        push(`/ar${asPath}`);
      }
    }}
  >
    Ar
  </Link>

{/*              
             <select
  onChange={(e) => {
    handleChangeLanguage(e);   
    setMobileMenu(false);      
  }}
  value={pathname.startsWith('/ar') ? 'ar' : 'en'}
>
  <option value="en">English</option>
  <option value="ar">Arabic</option>
</select> */}
            </ul>
           

          <div className="text-center">
             <Link href="/reservation"  onClick={() => setMobileMenu(false)} className="kf-btn  mb-6">
            <span>
              {t('bookTable')}
              </span> 
          </Link> 
          </div>
            <div className="kf-h-social flex gap-4 mb-4">

              <Link href="https://www.facebook.com/awtarcafe.dubai" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" /></Link>
             
              <Link href="https://www.instagram.com/awtarcafe.ae/" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></Link>
             
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

