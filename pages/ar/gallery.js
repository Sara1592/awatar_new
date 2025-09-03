import React from 'react'
import MenuTabs from '@/components/menuTab'
import GallBreadcrumbBanner from '@/components/gallBreadcrum'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { useTranslations } from "next-intl";

const Gallery = () => {
  const t = useTranslations("home");

  return (
    <div>
        <GallBreadcrumbBanner title={t("gallery")}/>
      <>

  {/* Section Gallery */}
  <section className="section kf-gallery py-16">
    <div className="container">
      <div className="kf-titles align-center">
        <div
          className="kf-subtitle  scroll-animate"
          data-animate="active"
        >
          {/* Gallery */}
          {t("gallery")}
        </div>
        <h3
          className="kf-title "
        >
          {/* Looks Our Some Item */}
          {t('looksOurItems')}
                  </h3>
         <MenuTabs/>
      </div>



    </div>
  </section>
  {/* Section CTA */}
  <section
    className="section kf-cta kf-parallax"
    style={{ backgroundImage: "url(https://res.cloudinary.com/dw1eguafc/image/upload/v1756730236/gall_bg_rla8yh.png)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
          <div className="kf-titles">
            <div
              className="kf-subtitle  scroll-animate"
              data-animate="active"
            >
              {/* Need a Table On Awatar Cafe */}
              {t('needTable')}
            </div>
            <h3
              className="kf-title  scroll-animate"
              data-animate="active"
            >
              {t('bookingSubtitle')}
              {/* Booking Table For Your &amp; Family Members */}
            </h3>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
          <Link
            href="reservation"
            className="kf-btn"
          >
            <span>
              {/* booking table */}
              {t('bookingButton')}
              </span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    </div>
  </section>
  {/* Section Brands */}
  <Footer/>

</>

    </div>
  )
}

export default Gallery

export async function getStaticProps() {
  return {
    props: {
      messages: (await import(`../../locales/ar.json`)).default,
    },
  };
}
