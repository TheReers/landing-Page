import React from 'react';
import styled from 'styled-components';
import WaitlistBtn from '../components/WaitlistBtn';

export const Wrapper = styled.div`
  @media (max-width: 767px) {
    text-align: -webkit-center;
  }
`;

const WhatIsReers = () => (
  <Wrapper className="text-white w-[77.7778%] mx-auto mt-[16.5rem] hero:mt-[113px]">
    <div className="border-t-4 hero:border-t-2 border-c-green border-solid max-w-[220px] hero:max-w-[113px]" />
    <h2 className="text-[70px] hero:text-[36px] font-bold leading-[87px] hero:leading-[45px] mt-[36px] hero:mt-5 mb-8 hero:mb-4 max-w-[478px] hero:max-w-[246px]">
      What is <span className="text-c-green">Reers?</span>
    </h2>
    <p className="text-[21px] hero:text-[12px] leading-[35.64px] hero:leading-5 font-normal">
      Reers is an online learning environment for individuals seeking to gain
      technical skills in Artificial Intelligence, Blockchain Development, Big
      Data and Software Engineering. We believe that people have various means
      of learning, so we have provided an article-based and video-based approach
      to following our curriculum. In addition, we let you work on real-world
      and expert-vetted projects so you can put your knowledge to practice while
      at it. <br /> <br /> For Startup Founders, Entrepreneurs, and Enterprise
      companies looking to hire vetted professionals and build out their teams,
      you can connect to the talent market through our platforms and move your
      business forward. <br /> <br />
    </p>
    <WaitlistBtn btnContent="Join Waitlist" />
  </Wrapper>
);
export default WhatIsReers;
