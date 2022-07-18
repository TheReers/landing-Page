import React from 'react';
import FirstMan from '../assets/images/man-1.svg';
import AsianWoman from '../assets/images/asian-woman.svg';
import SecondMan from '../assets/images/man-2.svg';
import CenteredWoman from '../assets/images/center-woman.svg';
import WomanWithGlasses from '../assets/images/woman-with-glasses.svg';

const TalentSphere = () => (
  <div className="talent:mb-7 bg-network-pattern bg-contain bg-no-repeat relative mt-[47px] max-w-[527px] w-full aspect-[1/1]">
    <img
      className="w-[14.42%] absolute top-[12.33%] left-[22.20%]"
      src={FirstMan}
      alt="Talent Icon"
    />
    <img
      className="w-[14.42%] absolute top-[18.23%] right-[9.68%]"
      src={AsianWoman}
      alt="Talent Icon"
    />
    <img
      className="w-[14.42%] absolute top-[40.42%] left-[41.18%]"
      src={CenteredWoman}
      alt="Talent Icon"
    />
    <img
      className="w-[14.42%] absolute bottom-[23.34%] left-[13.85%]"
      src={SecondMan}
      alt="Talent Icon"
    />
    <img
      className="w-[14.42%] absolute bottom-[15.18%] right-[12.14%]"
      src={WomanWithGlasses}
      alt="Talent Icon"
    />
  </div>
);

export default TalentSphere;
