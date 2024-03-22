/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#202024',
        'secondary-color': '#121214',
        'text-primary-color': '#EEEEEE'
      }
    },
  },
  plugins: [],
};
