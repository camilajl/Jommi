import { backdropClasses } from '@mui/material';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx,html}',
    './node_modules/tw-elements/js/**/*.js',
  ],
  theme: {
    extend: {
      backgroundOpacity: {
        '20': '0.20',
      },
      backgroundImage: {},
      colors: {
        primary: '#4D4D4D',
        black: '#000000',
        tertiary: '#F1DB4B',
        'tertiary-plus': '#FFFB00',
        white: '#FFFFFF',
        jommi_blue: '#29CAE5',
        jommi_red: '#EB591B',
        jommi_green: '#9EF1B1',
        soft_grey: '#B3B3B3',
        secondary_grey: '#838383',
        tertiary_grey: '#D7D7D7',
        blackish_grey: '#1A1A1A',
        jommi_purple: '#9747FF',
        jommi_purple_plus: '#742BD3',
        'purple-custom': '#231127',
        tertiaryGrey: '#505050',
        backgroundGrey: '#1E1E1E',
        tableTitleColor: '#F9F9F9',
        attachbg: '#f0efed',
      },
      fontFamily: {
        primaryFont: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('tw-elements/plugin.cjs')],
};
export default config;
