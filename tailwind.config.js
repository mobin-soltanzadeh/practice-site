/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        ping2: {
          '80%, 100%': { transform: 'scale(1.7)', opacity: 0},
        },
        commingUp: {
          '0%': { transform: 'translateY(150px)', opacity: 0},
          '100%': { transform: 'translateY(0px)', opacity: 1},
        }
      },
      animation: {
        ping2: 'ping2 2s ease-in-out infinite',
        commingUp: 'commingUp 1.5s ease-in-out',
      }
    },
  },
  plugins: [],
}