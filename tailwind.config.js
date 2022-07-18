module.exports = {
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      sm: { max: '435px' },
      // => @media (min-width: 435px) { ... }

      hero: { max: '767px' },
      // => @media (min-width: 767px) { ... }

      paths: { max: '810px' },
      // => @media (min-width: 810px) { ... }

      md: { max: '863px' },
      // => @media (min-width: 863px) { ... }

      lg: { max: '1042px' },
      // => @media (min-width: 1024px) { ... }
      
      talent: { max: '1070px' },
      // => @media (min-width: 1070px) { ... }

      laptop: '1042px',
      // => @media (min-width: 1024px) { ... }

      track: { max: '1226px' },
      // => @media (min-width: 1226px) { ... }

      xl: { max: '1280px' },
      // => @media (min-width: 1280px) { ... }

      xxl: { min: '1440px' },
      // => @media (min-width: 1440px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      'custom': '1.72151px',
      'customBtn': '1.55985px',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../assets/images/hero-bg-without-ellipse.svg')",
        'footer-pattern': "url('../assets/images/hero-bg-without-ellipse-2.svg')",
        'ellipse-pattern': "url('../assets/images/ellipse-bg.svg')",
        'network-pattern': "url('../assets/images/network-sphere.svg')",
      },
      width: {
        '25': '6.5rem',
        '128': '29rem',
      },
    },
    colors: {
      'dark': '#011129',
      'blue': '#1fb6ff',
      'c-blue': '#044CB8',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'c-green': '#20F2FF',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    variants: {
      fill: ['hover', 'focus'],
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('flowbite/plugin')],
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
};
