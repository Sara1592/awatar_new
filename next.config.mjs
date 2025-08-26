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
const nextConfig = {
  output: 'export',   // tells Next.js to generate static HTML (out/ folder)
  images: {
    unoptimized: true, // if you use <Image>, disable Image Optimization
  },

};

export default nextConfig;