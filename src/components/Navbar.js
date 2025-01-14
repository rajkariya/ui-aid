import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: transparent;
  font-family: 'Poppins', sans-serif;

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    display: flex;
    align-items: center;
  }

  .menu {
    display: flex;
    gap: 2rem;
  }

  .menu a {
    text-decoration: none;
    font-size: 1rem;
    color: #666;
    transition: color 0.3s;

    &:hover {
      color: #5e60ce;
    }
  }

  .login-btn {
    padding: 0.5rem 1rem;
    border: 2px solid #5e60ce;
    border-radius: 20px;
    background: transparent;
    color: #5e60ce;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: #5e60ce;
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .menu {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="logo">
        uiAid
      </div>
      <div className="menu">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#research">Research</a>
      </div>
      <button className="login-btn">Login</button>
    </NavbarContainer>
  );
};

export default Navbar;
