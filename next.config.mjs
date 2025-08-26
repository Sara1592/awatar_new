// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   i18n: {
//     locales: ["en", "ar"],   // languages
//     defaultLocale: "en",     // default
//     localeDetection: true,   // detect browser language
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
// import { i18n } from './next-i18next.config.mjs';
const nextConfig = {
  output: 'export', 
    //  i18n,
  images: {
    unoptimized: true, // if you use <Image>, disable Image Optimization
  },

};

export default nextConfig;

