import React from 'react';
import styled from 'styled-components';

interface MobileNavProps {
  open: boolean;
}

const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 113px;
  background: #044cb8;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  width: 100vw;
  color: #ffffff;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 5;

  p {
    font-size: 18px;
    line-height: 22px;
    width: 83.333333%;
    margin: 0 auto;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s linear;
    cursor: pointer;
    border-bottom: 1px solid #ffffff;
    padding-bottom: 12px;
    margin-bottom: 45px;
    &:after {
      content: '';
      position: absolute;
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
      transition: all 0.3s linear;
      color: #ffffff;
      border: solid white;
      border-width: 0 1px 1px 0;
      display: inline-block;
      padding: 5px;
      margin: 6px;
      left: 87%;
      width: 0;
      height: 0;
    }

    &:hover {
      color: #20f2ff;
      border-color: #20f2ff;
    }
    &:hover:after {
      border-color: #20f2ff;
    }
  }

  div {
    &:last-child {
      height: 88px;
      background-color: #0561eb;
      display: flex;
      width: 100%;
      margin: 0 auto;
      align-items: center;
      justify-content: center;
      gap: 27px;
    }
    h3 {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      cursor: pointer;
    }
    h2 {
      width: 147px;
      height: 46px;
      background: #20f2ff;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      padding: 12px 24px;
      color: #000538;
      cursor: pointer;
      text-align: center;
    }
  }
`;

const MobileNav = ({ open }: MobileNavProps) => (
  <StyledMenu open={open}>
    <div>
      <p>Our Tracks</p>
      <p>About</p>
      <p>Hire Talent</p>
      <p>Community</p>
    </div>
    <div>
      <h3>Sign In</h3>
      <h2>Get Started</h2>
    </div>
  </StyledMenu>
);

export default MobileNav;
