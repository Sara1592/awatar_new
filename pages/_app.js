import "@/styles/globals.css";
import "@/styles/styles.css";
import Head from "next/head";

import Header from "@/components/Header";
import FloatingContactButtons from "@/components/ContactButton";
import { Roboto, Oswald, Merienda } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';
import NoticePopup from "@/components/NoticePopup";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

const merienda = Merienda({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-merienda",
});

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.pathname.startsWith('/ar') ? 'ar' : 'en'}
      messages={pageProps.messages}
    >
      <Head>
        {/* Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className={`${roboto.variable} ${oswald.variable} ${merienda.variable}`}>
        <Header/>
        {/* <Navbar/> */}
        <Component {...pageProps} />
        <FloatingContactButtons/>
        <NoticePopup/>
      </div>
    </NextIntlClientProvider>
  );
}


export default App;


// import { NextIntlProvider } from 'next-intl';
// import '../styles/globals.css';

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <NextIntlProvider messages={pageProps.messages || {}} locale={pageProps.locale || 'en'}>
//       <Component {...pageProps} />
//     </NextIntlProvider>
//   );
// }