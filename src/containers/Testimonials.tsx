import React from 'react';
import TestimonialCard from '../components/TestimonialCard';
import { Wrapper } from './WhatIsReers';

const Testimonials = () => (
  <Wrapper className="text-white w-[77.7778%] mx-auto">
    <div className="border-t-4 border-c-green border-solid max-w-[220px] hero:max-w-[113px] hero:border-t-2" />
    <h2 className="text-[70px] hero:text-[36px] font-bold leading-[87px] hero:leading-[45px] mt-[36px] hero:mt-5 mb-9 max-w-[478px] hero:max-w-[240px]">
      Testimonials
    </h2>
    <div className="flex justify-between flex-wrap hero:flex-col hero:items-center hero:gap-10">
      <TestimonialCard
        author="Tyler Jones"
        description="Solana is a public blockchain platform. It is open-source and
      decentralized, with consensus achieved using proof of stake and proof of
      history. Starting with Solana explorer could be"
        avatar="https://picsum.photos/61/61"
        designation="CEO, BooshCap"
      />
      <TestimonialCard
        author="Tyler Jones"
        description="Solana is a public blockchain platform. It is open-source and
      decentralized, with consensus achieved using proof of stake and proof of
      history. Starting with Solana explorer could be"
        avatar="https://picsum.photos/61/61"
        designation="CEO, BooshCap"
      />
      <TestimonialCard
        author="Tyler Jones"
        description="Solana is a public blockchain platform. It is open-source and
      decentralized, with consensus achieved using proof of stake and proof of
      history. Starting with Solana explorer could be"
        avatar="https://picsum.photos/61/61"
        designation="CEO, BooshCap"
      />
    </div>
  </Wrapper>
);
export default Testimonials;
