import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  // darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    // fontFamily: {
    //   // light: ['Manrope-Light'],
    //   light: ["sf-pro-display-light"],
    //   regular: ["sf-pro-display-regular"],
    //   medium: ["sf-pro-display-medium"],
    //   semiBold: ["sf-pro-display-semibold"],
    //   // bold: ['Manrope-Bold'],
    //   // extraBold: ['Manrope-ExtraBold'],
    // },
    extend: {
      colors: {
        green: {
          50: '#FBFFF8',
          100: '#C2E29F',
          300: '#95CC57',
          500: '#67B60E'
        },
        greyscale: {
          50: '#F9F9FB',
          100: '#F4F4F6',
          200: '#EAEBEF',
          300: '#CBCDD6',
          400: '#B2B8C2',
          500: '#818A9C',
          600: '#5F6878',
          700: '#333D4C',
          800: '#0E1B2E',
          900: '#000C1F'
        },
        warning: {
          50: '#FFF9EA',
          100: '#FFECC8',
          300: '#FFD057',
          500: '#F3BF06'
        },
        orange: {
          50: '#FFF9EA',
          100: '#FFECC8',
          200: '#FED7AA',
          300: '#FFD057',
          400: '#FB923C',
          500: '#F3BF06',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
          950: '#431407'
        },
        info: {
          50: '#F0F6FF',
          100: '#CDE2FF',
          300: '#3391E5',
          500: '#0076DE'
        },
        critic: {
          50: '#FFECEC',
          100: '#FFCFCF',
          300: '#FF9090',
          500: '#FF5757',
          600: '#FF2200'
        },
        'dark-teal': '#1B6962',
        'light-lavender': '#E4EAFA'
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(45.42deg, #35AF07 -0.18%, #ACCD0F 92.29%)'
      },
      boxShadow: {
        'shadow-10': '0 1px 2px 0 #0000000F',
        'shadow-20': '0 1px 2px 0 #030C2B0F, 0 2px 4px 0 #161C270A',
        'shadow-30': '0 1px 2px 0 #030C2B0F, 0 4px 8px 0 #161C270A',
        'shadow-50': '0 16px 32px -20px #00000014',
        'shadow-60': '0 0 2px 0 #0000001A, 0 8px 14px 0 #0000001A'
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      }
    }
  }
}
