import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ReersLogo } from '../assets/logo/logo.svg';
import NavItemText from '../components/NavItemText';

interface NavProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<any>>;
}

const LogoDiv = styled.div`
  &:hover {
    svg path {
      fill: #20f2ff;
      stroke: #20f2ff;
    }
  }
`;

const StyledBurger = styled.button<{ open: boolean }>`
  position: absolute;
  top: 4.6%;
  right: 8.2%;
  display: none;
  flex-direction: column;
  justify-content: ${({ open }) => (open ? 'space-around' : 'space-between')};
  width: 2rem;
  height: ${({ open }) => (open ? '2rem' : '1.5rem')};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (max-width: 863px) {
    display: flex;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.167rem;
    background: ${({ open }) => (open ? '#20F2FF' : '#FFFFFF')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Navbar = ({ open, setOpen }: NavProps) => (
  <div className="text-white pt-12 flex items-center max-h-11 h-full w-full justify-around md:justify-between md:w-10/12 md:mx-auto">
    <LogoDiv style={{ zIndex: '10' }}>
      <ReersLogo className="cursor-pointer z-10" />
    </LogoDiv>
    <div className="flex flex-row max-w-md w-full justify-between md:hidden">
      <NavItemText text="Our Track" />
      <NavItemText text="Articles" />
      <NavItemText text="Hire Talent" />
      <NavItemText text="Community" />
    </div>
    <div className="flex flex-row justify-between md:hidden">
      <p
        style={{ fontSize: '18px' }}
        className="border-c-blue hover:border-c-green border-b-custom border-solid pb-2 w-25 text-right self-end cursor-pointer mr-5 transition ease-in-out delay-100"
      >
        Sign In
      </p>
      <div className="border-c-blue hover:border-c-green border-1 border-solid px-6 py-2 transition ease-in-out delay-100">
        <p style={{ fontSize: '18px', cursor: 'pointer' }}>Get Started</p>
      </div>
    </div>
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  </div>
);

export default Navbar;
