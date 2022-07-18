import React from 'react';
import { ReactComponent as Goggles } from '../assets/images/goggles.svg';
import { Wrapper } from './WhatIsReers';

const Comparison = () => {
  const [showGoggles, setShowGoggles] = React.useState<boolean>(false);

  const updateDimensions = React.useCallback(() => {
    if (window.innerWidth < 1070) {
      setShowGoggles(true);
    } else {
      setShowGoggles(false);
    }
  }, []);

  React.useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [updateDimensions]);

  return (
    <Wrapper className="flex text-white w-[77.7778%] mx-auto mt-[16.5rem] hero:mt-[113px]">
      <div>
        <div className="border-t-4 border-c-green border-solid max-w-[220px] hero:max-w-[113px] hero:border-t-2" />
        <h2 className="text-[70px] hero:text-[36px] font-bold leading-[87px] hero:leading-[45px] mt-[36px] hero:mt-5 mb-8 hero:mb-4 max-w-[582px] hero:max-w-[291px]">
          Videos <span className="text-c-green">VS</span> Articles
        </h2>
        {showGoggles && (
          <Goggles
            style={{ width: '-webkit-fill-available', height: 'auto' }}
            className="my-7 max-w-[calc(100%-20%)]"
          />
        )}
        <div className="max-w-[398px] text-[22px] hero:text-[12px] leading-9 hero:leading-5 font-normal mb-8">
          <p>
            From our research, we believe that people learn through different
            means. For example, some prefer videos, while some prefer to read.
            To provide for individuals who love any of these learning styles, we
            designed our platform to have both video courses and well-written
            articles. <br />
            <br /> You can watch our curated videos or read and build with our
            text-based articles; the choice is yours!
            <br />
            <br />
          </p>
        </div>
      </div>
      {!showGoggles && <Goggles className="mt-[137.5px]" />}
    </Wrapper>
  );
};
export default Comparison;
