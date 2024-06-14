/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      animation: {
        fadeIn500: 'fadeInButtons 500ms forwards',
        fadeIn1000: 'fadeInButtons 1000ms forwards',
        fadeIn1500: 'fadeInButtons 1500ms forwards',
        fadeInAll: 'fadeIn 500ms forwards',
      },
      keyframes: {
        fadeInButtons: {
          '0%': { opacity: '0' ,  transform: 'translateY(20px)'},
          '100%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

