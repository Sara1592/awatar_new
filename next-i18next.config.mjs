// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   i18n: {
//     locales: ['en', 'ar'], // English & Arabic
//     defaultLocale: 'en',
//   },
//   reactStrictMode: true,
// };

// export default nextConfig;

// /** @type {import('next-i18next').UserConfig} */
// const path = require('path');
// module.exports = {
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en', 'ar'],
//   },
//   react: { useSuspense: false },
// };

// next-i18next.config.mjs
export const i18n = {
  defaultLocale: 'en',   // default language
  locales: ['en', 'ar'], // supported languages
};

export const react = { useSuspense: false };
