/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    daisyui: {
      themes: ["black"],
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

