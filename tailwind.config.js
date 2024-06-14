/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      animation: {
        fadeIn500: 'fadeInButtons 500ms forwards',
        fadeIn1000: 'fadeInButtons 1000ms forwards',
        fadeIn1500: 'fadeInButtons 1500ms forwards',
        fadeInAll: 'fadeIn 100ms forwards',
        instagramBorder: 'instagramBorder 1000ms infinite'
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
        instagramBorder:{
          '0%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          },
          '100%': {
            backgroundPosition: '0% 50%'
          }
        }
      },
    },
  },
  plugins: [],
}

