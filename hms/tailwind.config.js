/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import form from '@tailwindcss/forms'
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Serif Lao']
      }
    }
  },
  plugins: [daisyui, form],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#86efac',
          secondary: '#a8a29e',
          accent: '#fef08a',
          neutral: '#e0f2fe',
          'base-100': '#ffffff',

          'base-200': '#deddd8',

          'base-300': '#bebdb8',
          'base-content': '#161615',
          info: '#bbf7d0',
          success: '#bef264',
          warning: '#fcd34d',
          error: '#fca5a5'
        },
        screens: {
          tablet: '640px',
          // => @media (min-width: 640px) { ... }

          laptop: '1024px',
          // => @media (min-width: 1024px) { ... }

          desktop: '1280px'
          // => @media (min-width: 1280px) { ... }
        }
      }
    ],
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root' // The element that receives theme color CSS variables
  }
}
