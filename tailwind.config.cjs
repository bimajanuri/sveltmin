const tailwindColors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554'
        },
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        },
        red: tailwindColors.red,
        green: tailwindColors.green,
        yellow: tailwindColors.yellow
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      fontSize: {
        'title-2xl': ['34px', '40px'],
        'title-xl': ['24px', '30px'],
        'title-lg': ['22px', '28px'],
        'title-md': ['20px', '26px'],
        'title-sm': ['18px', '24px'],
        'title-xs': ['16px', '22px']
      },
      boxShadow: {
        'theme-xs': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        'theme-sm': '0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
        'theme-md': '0px 2px 6px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
        'theme-lg': '0px 4px 12px 0px rgba(16, 24, 40, 0.10), 0px 1px 4px 0px rgba(16, 24, 40, 0.06)',
        'theme-xl': '0px 8px 16px 0px rgba(16, 24, 40, 0.10), 0px 2px 4px 0px rgba(16, 24, 40, 0.06)',
        'theme-2xl': '0px 12px 24px 0px rgba(16, 24, 40, 0.10), 0px 2px 4px 0px rgba(16, 24, 40, 0.06)',
        'theme-3xl': '0px 16px 32px 0px rgba(16, 24, 40, 0.10), 0px 2px 4px 0px rgba(16, 24, 40, 0.06)'
      },
      zIndex: {
        999999: '999999',
        99999: '99999',
        9999: '9999',
        999: '999',
        100: '100',
        50: '50',
        10: '10',
        5: '5'
      },
      screens: {
        '2xsm': '375px',
        'xsm': '425px',
        '3xl': '1920px'
      }
    }
  },
  plugins: [
    // Menghapus plugin flowbite karena menyebabkan konflik styling
  ]
};