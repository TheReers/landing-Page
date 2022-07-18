import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PathsImg } from '../assets/images/paths.svg';
import WaitlistBtn from '../components/WaitlistBtn';

const PathWrapper = styled.div`
  @media (max-width: 767px) {
    display: block;
    text-align: -webkit-center;
  }
`;

const Paths = () => {
  const [showPathsImg, setShowPathsImg] = React.useState<boolean>(false);

  const updateDimensions = React.useCallback(() => {
    if (window.innerWidth < 1070) {
      setShowPathsImg(true);
    } else {
      setShowPathsImg(false);
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
    <PathWrapper className="flex text-white w-[77.7778%] mx-auto mt-[16.5rem] hero:mt-[70px]">
      <div>
        <div className="border-t-4 border-c-green border-solid max-w-[220px] paths:max-w-[113px] paths:border-t-2" />
        <h2 className="text-[70px] font-bold leading-[87px] mt-[36px] paths:mt-5 mb-8 paths:mb-0 max-w-[576px] paths:text-[36px] paths:leading-[45px] paths:max-w-[297px]">
          Reer’s Innovation Competency{' '}
          <span className="text-c-green">Paths</span>
        </h2>
        {showPathsImg && (
          <PathsImg
            style={{ width: '-webkit-fill-available', height: 'auto' }}
            className="my-7 max-w-[630px]"
          />
        )}
        <div className="max-w-[398px] text-[22px] paths:text-[12px] leading-9 paths:leading-5 font-normal mb-8">
          <p>
            Our learning platform will focus on enabling technology education in
            the following areas; <strong>Blockchain Technology</strong>,{' '}
            <strong>Artificial Intelligence</strong>, <strong>Big Data</strong>,
            and
            <strong> Software Engineering</strong>. Our goal is to nurture an
            ecosystem of seasoned professionals with the potential to use these
            technologies to solve diverse problems across different industries
          </p>
        </div>
        <WaitlistBtn btnContent="Join Waitlist" />
      </div>
      {!showPathsImg && <PathsImg className="mt-[150px] mr-[-47px]" />}
    </PathWrapper>
  );
};
export default Paths;
