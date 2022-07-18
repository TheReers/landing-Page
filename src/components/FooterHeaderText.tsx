import React from 'react';

interface Props {
  heading: string;
}

const FooterHeaderText = ({ heading }: Props) => (
  <h3 className="font-bold text-[22px] leading-9 mb-4">{heading}</h3>
);

export default FooterHeaderText;
