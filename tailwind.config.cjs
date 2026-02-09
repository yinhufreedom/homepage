const { nextui } = require('@nextui-org/react');

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: {
      //     50: '#E6F3FF',
      //     100: '#CCE7FF',
      //     200: '#99CEFF',
      //     300: '#66B5FF',
      //     400: '#339CFF',
      //     500: '#1E88E5',
      //     600: '#1976D2',
      //     700: '#1565C0',
      //     800: '#0D47A1',
      //     900: '#0A3880',
      //   },
      //   secondary: {
      //     50: '#E6F9FF',
      //     100: '#CCF3FF',
      //     200: '#99E7FF',
      //     300: '#66DBFF',
      //     400: '#33CFFF',
      //     500: '#26C6DA',
      //     600: '#00ACC1',
      //     700: '#0097A7',
      //     800: '#00838F',
      //     900: '#006064',
      //   },
      //   accent: {
      //     50: '#E8F5E8',
      //     100: '#C8E6C9',
      //     200: '#A5D6A7',
      //     300: '#81C784',
      //     400: '#66BB6A',
      //     500: '#4CAF50',
      //     600: '#43A047',
      //     700: '#388E3C',
      //     800: '#2E7D32',
      //     900: '#1B5E20',
      //   },
      //   background: {
      //     light: '#FFFFFF',
      //     DEFAULT: '#F5F7FA',
      //     dark: '#E6F3FF',
      //   },
      //   surface: {
      //     light: '#FFFFFF',
      //     DEFAULT: '#F9FAFB',
      //     dark: '#E5E7EB',
      //   },
      //   text: {
      //     light: '#F9FAFB',
      //     DEFAULT: '#374151',
      //     dark: '#111827',
      //     muted: '#6B7280',
      //   },
      //   border: {
      //     light: '#E5E7EB',
      //     DEFAULT: '#D1D5DB',
      //     dark: '#9CA3AF',
      //   },
      // },
      // boxShadow: {
      //   'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      //   DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      //   'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      //   'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      //   'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      // },
      // borderRadius: {
      //   'sm': '0.125rem',
      //   DEFAULT: '0.25rem',
      //   'md': '0.375rem',
      //   'lg': '0.5rem',
      //   'xl': '0.75rem',
      //   '2xl': '1rem',
      // },
      // spacing: {
      //   '18': '4.5rem',
      //   '72': '18rem',
      //   '84': '21rem',
      //   '96': '24rem',
      // },
      // transitionProperty: {
      //   'height': 'height',
      //   'spacing': 'margin, padding',
      // },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
