import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Hero from './containers/Hero';
import Navbar from './containers/Navbar';
import OurTrack from './containers/OurTrack';
import Paths from './containers/Paths';
import WhatIsReers from './containers/WhatIsReers';
import Comparison from './containers/Comparison';
import Talent from './containers/Talent';
import Testimonials from './containers/Testimonials';
import Footer from './containers/Footer';
import { ReactComponent as Ellipse } from './assets/icons/ellipse-47.svg';
import { ReactComponent as Ellipse2 } from './assets/icons/ellipse-25.svg';
import MobileNav from './components/MobileNav';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: #011129;
    color: #FFFFFF;
    font-family: "Gilroy";
    text-rendering: optimizeLegibility;
  }
  `;

const App = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const updateDimensions = React.useCallback(() => {
    if (window.innerWidth > 863 && open) setOpen(false);
  }, [open]);

  React.useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [updateDimensions]);

  return (
    <div className="xxl:bg-cover h-max bg-dark bg-blend-color-dodge">
      <GlobalStyles />
      <div className="h-full bg-transparent max-w-[1440px] m-auto">
        <div className="bg-hero-pattern pb-[14.5rem]">
          <Navbar open={open} setOpen={setOpen} />
          <MobileNav open={open} />
          <Ellipse className="absolute top-[350px] hero:top-[115px] left-[14.6%] hero:left-[6.77%]" />
          <Ellipse2 className="absolute top-[240px] hero:top-[65px] right-[16.97%] hero:right-[13.77%]" />
          <Ellipse className="absolute top-[600px] hero:top-[255px] right-[35.35%] hero:right-[42%]" />
          <Hero />
        </div>
        <OurTrack />
        <Paths />
        <WhatIsReers />
        <Comparison />
        <div className="bg-footer-pattern">
          <Talent />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
