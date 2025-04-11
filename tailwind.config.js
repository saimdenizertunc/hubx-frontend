/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0381FF',
        'primary-light': 'rgba(3, 129, 255, 0.03)',
        dark: '#0B122A',
        'dark-alt': '#0B172A',
        gray: {
          100: '#FBFCFC',
          200: '#F5F5F7',
          300: '#F9F9F9',
          400: '#666666',
          500: 'rgba(0, 0, 0, 0.08)',
        },
      },
      fontFamily: {
        'source-sans': ['Source Sans 3', 'sans-serif'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
        'sf-pro': ['SF Pro Display', 'sans-serif'],
      },
      fontSize: {
        '5xl': [
          '56px',
          {
            lineHeight: '126.7%',
            letterSpacing: '-0.03em',
          },
        ],
        lg: [
          '20px',
          {
            lineHeight: '158.7%',
            letterSpacing: '-0.03em',
          },
        ],
        base: [
          '16px',
          {
            lineHeight: '19px',
            letterSpacing: '2px',
          },
        ],
      },
      spacing: {
        18: '4.5rem',
        26: '6.5rem',
        30: '7.5rem',
      },
      borderRadius: {
        '2xl': '24px',
        '3xl': '36px',
        '4xl': '50px',
      },
      boxShadow: {
        nav: '0px -15px 100px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};
