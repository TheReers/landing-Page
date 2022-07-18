import React from 'react';

interface Props {
  text: string;
}

const FooterItemText = ({ text }: Props) => (
  <p className="font-medium text-[16px] leading-[26px] pb-1 cursor-pointer hover:text-c-green transition ease-in-out delay-100">
    {text}
  </p>
);

export default FooterItemText;
