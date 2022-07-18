import React from 'react';

interface Props {
  text: string;
}

const NavItemText = ({ text }: Props) => (
  <p className="text-lg leading-[22px] cursor-pointer hover:text-c-green transition ease-in-out delay-100">
    {text}
  </p>
);

export default NavItemText;
