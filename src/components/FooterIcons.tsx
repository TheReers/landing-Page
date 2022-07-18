import React from 'react';

interface Props {
  children: React.ReactNode;
  link: string;
}

const FooterIcons = ({ children, link }: Props) => (
  <a rel="nofollow noreferrer" target="_blank" href={link}>
    {children}
  </a>
);

export default FooterIcons;
