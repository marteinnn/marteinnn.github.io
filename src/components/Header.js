import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderNotice = styled.div`
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 5px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  overflow: hidden;
  white-space: nowrap;
  height: 30px;
  font-size: 3px;
  font-weight: bold;
`;

const HeaderNoticeContent = styled.div`
  animation: moveRight 40s linear infinite;
  
  @keyframes moveRight {
    100% { transform: translateX(-100%); }
  }
`;

const HeaderContainer = styled.header`
  background-color: var(--background-color);
  padding: 10px 20px;
  text-align: center;
  margin-top: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 0;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--primary-color);
  font-weight: 700;
  font-size: 16px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoImg = styled.img`
  height: 80px;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 1.5rem;
  }

  ul li a {
    text-decoration: none;
    color: var(--text-light);
    font-size: 18px;
    font-weight: bold;
    transition: all 0.3s ease;
    position: relative;
    margin-left: 30px;

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: var(--secondary-color);
      transition: width 0.3s ease;
    }

    &:hover {
      color: var(--secondary-color);

      &:after {
        width: 100%;
      }
    }
  }
`;

const Header = () => {
  return (
    <>
      <HeaderNotice>
        <HeaderNoticeContent>
          <p>
            •&nbsp;&nbsp;WELCOME TO MY WEBSITE. THIS IS A PERSONAL PROJECT FOR FUN&nbsp;&nbsp;•&nbsp;&nbsp;WELCOME TO MY WEBSITE. THIS IS A PERSONAL PROJECT FOR FUN&nbsp;&nbsp;•&nbsp;&nbsp;WELCOME TO MY WEBSITE. THIS IS A PERSONAL PROJECT FOR FUN&nbsp;&nbsp;•&nbsp;&nbsp;WELCOME TO MY WEBSITE. THIS IS A PERSONAL PROJECT FOR FUN&nbsp;&nbsp;•&nbsp;&nbsp;WELCOME TO MY WEBSITE. THIS IS A PERSONAL PROJECT FOR FUN&nbsp;&nbsp;
            •&nbsp;&nbsp;WELCOME TO MY WEBSITE. THIS IS A PERSONAL PROJECT FOR FUN&nbsp;&nbsp;•&nbsp;&nbsp;WELCOME TO MY WEBSITE. THIS IS A PERSONAL PROJECT FOR FUN&nbsp;&nbsp;•&nbsp;&nbsp;WELCOME TO MY WEBSITE. THIS IS A PERSONAL PROJECT FOR FUN&nbsp;&nbsp;
          </p>
        </HeaderNoticeContent>
      </HeaderNotice>
      <HeaderContainer>
        <HeaderWrapper>
          <Logo to="/">
            <LogoImg src="/logo-final.png" alt="Logo" />
          </Logo>
          <Nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Nav>
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header; 