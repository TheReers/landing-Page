import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ReersLogo } from '../assets/logo/logo.svg';
import { ReactComponent as Twitter } from '../assets/icons/twitter.svg';
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../assets/icons/facebook.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg';
import { ReactComponent as YouTube } from '../assets/icons/youtube.svg';
import FooterItemText from '../components/FooterItemText';
import FooterHeaderText from '../components/FooterHeaderText';
import FooterIcons from '../components/FooterIcons';

const StyledLogo = styled.div`
  transition: all 0.1s ease-in-out;
  &:hover {
    svg path {
      fill: #20f2ff;
      stroke: #20f2ff;
    }
  }
`;
const FooterWraper = styled.div`
  a {
    transition: all 0.1s ease-in-out;
    &:hover {
      svg path {
        fill: #20f2ff;
        stroke: #20f2ff;
      }
    }
  }
`;

const Footer = () => (
  <FooterWraper className="text-white w-[77.7778%] mx-auto mt-[16.5rem] hero:mt-[113px] pb-[98px]">
    <div className="flex gap-[100px] flex-wrap">
      <div>
        <p className="font-medium text-[22px] leading-9 mb-4">Powered by</p>
        <StyledLogo>
          <ReersLogo className="cursor-pointer mb-6" />
        </StyledLogo>
        <div className="flex gap-[14.7px] ">
          <FooterIcons link="https://twitter.com">
            <Twitter />
          </FooterIcons>
          <FooterIcons link="https://instagram.com">
            <Instagram />
          </FooterIcons>
          <FooterIcons link="https://facebook.com">
            <Facebook />
          </FooterIcons>
          <FooterIcons link="https://linkedin.com">
            <LinkedIn />
          </FooterIcons>
          <FooterIcons link="https://youtube.com">
            <YouTube />
          </FooterIcons>
        </div>
      </div>
      <div>
        <FooterHeaderText heading="Tracks" />
        <FooterItemText text="Blockchain Technology" />
        <FooterItemText text="Artificial Intelligence" />
        <FooterItemText text="Big Data" />
        <FooterItemText text="Software Engineering" />
      </div>
      <div>
        <FooterHeaderText heading="Articles" />
        <FooterItemText text="Data Science" />
        <FooterItemText text="Artificial Intelligence" />
        <FooterItemText text="Machine Learning" />
        <FooterItemText text="Python" />
        <FooterItemText text="UI/UX" />
        <FooterItemText text="Cloud Computing" />
      </div>
      <div>
        <div className="font-bold text-[22px] leading-9 mb-[52px] sm:mb-0" />
        <FooterItemText text="About Us" />
        <FooterItemText text="Hire Our Talent" />
        <FooterItemText text="Contact Us" />
      </div>
    </div>
    <p className="font-medium text-[16px] leading-[26px] mt-[32px]">
      © {new Date().getFullYear()} Reers. All rights reserved.
    </p>
  </FooterWraper>
);
export default Footer;
