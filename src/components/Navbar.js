import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 0.5rem;
  }

  @media (max-width: 425px) {
    padding: 0.3rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
  }
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #727272;
    font-size: 24px;
    font-weight: bold;
    transition: color 0.3s ease;
    padding: 0.2rem 0.5rem;

    &:hover {
      color: #000000;
    }

    @media (max-width: 768px) {
      font-size: 18px;
      padding: 0.2rem 0.4rem;
    }

    @media (max-width: 425px) {
      font-size: 16px;
      padding: 0.3rem;
      display: block;
      width: 100%;
      text-align: center;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">Contact</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar; 