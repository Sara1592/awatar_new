"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("home");
  return (
    <footer className=" py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
 
          <div>
            <h6 className="text-xl font-bold text-[#8E6E3B] mb-4">
              {/* Location */}
              {t("location")}
              </h6>
            <p>
              {/* Dubai - Al Muraqqabat – <br/> Deira – Bu Haleeba plaza */}
              {t("address")}
              </p>
             <div className="kf-h-social flex items-center gap-3">
          <Link href="https://www.facebook.com/awtarcafe.dubai" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" /></Link>
          <Link href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></Link>
          <Link href="https://www.instagram.com/awtarcafe.ae/" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></Link>
          <Link href="https://youtube.com" target="_blank" rel="noreferrer"><i className="fab fa-youtube" /></Link>
        </div>
          </div>
          

          {/* Column 2: Working Hours */}
          <div>
            <h6 className="text-xl font-bold text-[#8E6E3B] mb-4">
              {t("workingHours")}
              {/* Working Hours */}
              </h6>
            {/* <p>Every Day 
              <br/>
              08:00 am - 05:00 am</p> */}
                          <p>{t("hours").split("\n").map((line, idx) => <span key={idx}>{line}<br/></span>)}</p>

          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h6 className="text-xl font-bold text-[#8E6E3B] mb-4">Contact</h6>
            <p>
              {/* Email Address: */}
              {t("email")}:
               <br/>
               
               <Link href="mailto:info@awtarcafe.com" className="text-gold">info@awtarcafe.com</Link></p>
            <p>
              {/* Phone Number: */}
              {t("phone")}:
              <br/> <Link href="tel:+971544115335" className="text-gold">+971-544115335</Link>
          <br/> <Link href="tel:+97143422135" className="text-gold">+971-43422135</Link></p>
          </div>

        </div>

        {/* Optional footer bottom text */}
        <div className="mt-8 text-center text-sm text-white-500">
          &copy; {new Date().getFullYear()} 
          {/* Awtar Café.  */}
          {t("slide1Subtitle")}
          {/* All rights reserved. */}
           {t("copyright")}.
        </div>
      </div>
    </footer>
  );
}

