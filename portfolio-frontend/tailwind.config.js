/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       colors: {
        background: '#0F172A',
        muted: '#1e293b',
        foreground: '#ffffff',
        'muted-foreground': '#94a3b8',
        primary: '#64ffda',
        accent: '#38bdf8',
      },
      scrollBehavior: {
        smooth: 'smooth'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

