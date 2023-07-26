/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        secondary: '#211e3b',
      },
      screens: {
        xsrev: { max: '320px' },
        smrev: { max: '600px' },
        mdrev: { max: '768px' },
        lgrev: { max: '1024px' },
      },
      fontFamily: {
        monoton: ['Monoton', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        bungeeShade: ['Bungee Shade', 'cursive'],
        greatVibes: ['Great Vibes', 'cursive'],
        berkshireSwash: ['Berkshire Swash', 'cursive'],
      },
    },
  },
  plugins: [],
};
