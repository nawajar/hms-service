/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#86efac',
          secondary: '#a8a29e',
          accent: '#fef08a',
          neutral: '#e0f2fe',
          'base-100': '#ffffff',
          info: '#bbf7d0',
          success: '#bef264',
          warning: '#fcd34d',
          error: '#fca5a5'
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
