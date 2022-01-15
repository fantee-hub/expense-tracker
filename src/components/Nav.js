import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";

const Nav = () => {
  return (
    <NavBar>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-links">
        <button className="login">Login</button>
        <button className="signup">Sign up</button>
      </div>
    </NavBar>
  );
};

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;

  .nav-links{
      button{
          padding:.7rem 1rem;
      }
  }
`;


export default Nav;
