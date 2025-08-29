/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",    // html in root folder
    "../*.html"    // html in parent folder 
  ],
  theme: {
    extend: {
      // Added keyframes for the fade-in-out animation
      keyframes: {
        fadeInOut: {
          '0%': { opacity: '0.3' },   // Start faded out
          '50%': { opacity: '1' },     // Fade in to full opacity
          '100%': { opacity: '0.3' }, // Fade back out
        }
      },
      // Added the animation utility to use the keyframes
      animation: {
        'fade-in-out': 'fadeInOut 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}