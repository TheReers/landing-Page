import React from 'react';
import styled from 'styled-components';
import WaitlistBtn from '../components/WaitlistBtn';

const HeroWrapper = styled.div`
  @media (max-width: 767px) {
    text-align: -webkit-center;
  }
`;

const Hero = () => (
  <HeroWrapper className="text-white mt-48 hero:mt-14 w-[77.7778%] mx-auto">
    <h1 className="max-w-[38rem] hero:max-w-[18rem] font-bold mb-8 hero:mb-3 text-[80px] hero:text-[36px] leading-[99px] hero:leading-[45px]">
      The Perfect Way to <span className="text-c-green">Learn.</span>
    </h1>
    <p className="max-w-[38rem] hero:max-w-xs hero:text-[12px] mb-8 hero:mb-3 text-[22px] leading-9 hero:leading-5">
      Build in-demand skills to thrive in the emerging field of technology by
      working on hands-on project while learning
    </p>
    <div className="flex flex-row justify-between max-w-[36rem] paths:max-w-[284px] w-full">
      <WaitlistBtn btnContent="Join Waitlist" />
      <p
        style={{ lineHeight: '37px' }}
        className="border-c-blue hover:border-c-green border-b-4 paths:border-b-2 border-solid text-[30px] paths:text-[14px] paths:leading-[17px] leading-[37px] pb-5 paths:pb-1 w-60 paths:w-[107px] text-right self-end cursor-pointer mr-5 font-medium transition ease-in-out delay-100"
      >
        Read Articles
      </p>
    </div>
  </HeroWrapper>
);

export default Hero;
