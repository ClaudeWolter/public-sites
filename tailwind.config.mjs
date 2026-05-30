/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#003f8a', light: '#1a5aab', dark: '#002a5c' },
        accent:  { DEFAULT: '#ef3340', light: '#f55a66' },
        gold:    { DEFAULT: '#e8b84b' },
      },
    },
  },
};
