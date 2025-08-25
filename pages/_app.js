
import "@/styles/globals.css";
import "@/styles/styles.css";
import Head from "next/head";
import Header from "@/components/Header";
import FloatingContactButtons from "@/components/ContactButton";


export default function App({ Component, pageProps }) {
  return (
    <>
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
      <Header/>
      <Component {...pageProps} />
      <FloatingContactButtons/>
    </>
  );
}
