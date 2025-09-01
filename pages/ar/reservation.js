import React from 'react'
import BookBreadcrumbBanner from '@/components/BookBreadcrum'
import ReservationForm from '@/components/reservationform'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useTranslations } from "next-intl";
const BookAnTable = () => {
   const t = useTranslations("home");
  return (
    <div>
      <BookBreadcrumbBanner  title={t('reservationText')} />
      <ReservationForm/>
      <section className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

          <div className="overflow-hidden">
            <Image
              src="/assets/images/grid1.png"
              alt="item"
              width={640}
              height={350}
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="overflow-hidden">
            <Image
              src="/assets/images/grid2.png"
              alt="item"
              width={640}
              height={350}
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="overflow-hidden">
            <Image
              src="/assets/images/grid3.png"
              alt="item"
              width={640}
              height={350}
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="overflow-hidden">
            <Image
              src="/assets/images/grid4.png"
              alt="item"
              width={640}
              height={350}
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="overflow-hidden">
            <Image
              src="/assets/images/grid5.png"
              alt="item"
              width={640}
              height={350}
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="overflow-hidden">
            <Image
              src="/assets/images/grid6.png"
              alt="item"
              width={640}
              height={350}
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default BookAnTable

export async function getStaticProps() {
  return {
    props: {
      messages: (await import(`../../locales/ar.json`)).default,
    },
  };
}
