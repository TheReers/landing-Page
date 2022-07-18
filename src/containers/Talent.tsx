import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import TalentSphere from '../components/TalentSphere';
import WaitlistBtn from '../components/WaitlistBtn';

const TalentWrapper = styled.div`
  @media (max-width: 767px) {
    display: block;
    text-align: -webkit-center;
  }
`;

const Talent = () => {
  const [showTalentSphere, setShowTalentSphere] = useState<boolean>(false);

  const updateDimensions = useCallback(() => {
    if (window.innerWidth < 1070) {
      setShowTalentSphere(true);
    } else {
      setShowTalentSphere(false);
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [updateDimensions]);

  return (
    <TalentWrapper className="flex text-white w-[77.7778%] mx-auto mt-[16.5rem] hero:mt-[113px]">
      <div>
        <div className="border-t-4 border-c-green border-solid max-w-[220px] hero:max-w-[113px] hero:border-t-2" />
        <h2 className="text-[70px] hero:text-[36px] font-bold leading-[87px] hero:leading-[45px] mt-[36px] hero:mt-5 mb-8 hero:mb-4 max-w-[485px] hero:max-w-[242px]">
          Hire Our <span className="text-c-green">Talent</span>
        </h2>
        {showTalentSphere && <TalentSphere />}
        <div className="max-w-[398px] text-[22px] hero:text-[12px] leading-9 hero:leading-5 font-normal mb-8">
          <p>
            Are you a founder who is looking to solve problems with technology?
            Are you looking to hire problem-solvers to join your startup or
            enterprise company? Our robust tracks train developers to a
            <strong> world-class standard</strong>. We have talents from all
            over the world who are currently enrolled and can help you scale out
            your business.
          </p>
        </div>
        <WaitlistBtn btnContent="Contact Us" />
      </div>
      {!showTalentSphere && <TalentSphere />}
    </TalentWrapper>
  );
};
export default Talent;
