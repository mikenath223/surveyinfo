import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
  sm: `(max-width: 576px)`,
  md: `(max-width: 768px)`,
  lg: `(max-width: 992px)`,
  xl: `(max-width: 1200px)`,
};

export const globalTheme = {
  colors: {
    headBg: '#2B13AF',
    dashboardBg: '#fff',
    asideBg: 'silver',
    grey: '#494949',
    subText: '#999CE0',
    amberYellow: '#F9B931',
    mainText: '#fff',
    bottomDropBg: '#EBEBED'
  },
  textSizes: {
    small: '12px',
    regular: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '30px'
  },
  fonts: {
    montserrat: 'Montserrat',
    sansSerif: 'sans-serif',
    helvetica: 'Helvetica Neue',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

const globalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }  

  body {
    margin: 0;
    min-height: 100vh;
    font-family: "Open Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default globalStyle;
