/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'max-w-full',
    'max-h-[60vh]',
    'object-contain',
    'flex',
    'justify-center',
    'h-full',
    'items-center'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
