import React from 'react';

import { ReactComponent as Arrow } from '../assets/icons/arrow.svg';

interface BtnProps {
  btnContent: string;
  fontSize?: string;
  lineHeight?: string;
}

const defaultProps = { fontSize: '30px', lineHeight: '37px' };

const WaitlistBtn = ({ btnContent, fontSize, lineHeight }: BtnProps) => (
  <div className="text-[30px] leading-[37px] flex flex-row  w-[19rem] paths:w-[136px] cursor-pointer border-c-blue hover:border-c-green transition ease-in-out delay-100">
    <p
      style={{ borderColor: 'inherit' }}
      className={`py-5 paths:py-[14px] text-[${fontSize}] leading-[${lineHeight}] paths:text-[14px] paths:leading-[17px] px-[1.6rem] paths:px-[12px] border-customBtn border-solid font-medium`}
    >
      {btnContent}
    </p>
    <Arrow
      style={{ borderColor: 'inherit' }}
      className="bg-[#01183b] paths:w-[30px] border-t-customBtn border-r-customBtn border-b-customBtn border-solid align-middle items-center h-auto"
    />
  </div>
);

WaitlistBtn.defaultProps = defaultProps;

export default WaitlistBtn;
