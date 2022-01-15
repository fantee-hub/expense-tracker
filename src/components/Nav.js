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
        <button className="login">LOGIN</button>
        <button className="signup">SIGN UP</button>
      </div>
    </NavBar>
  );
};

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;

  .nav-links {
    button {
      padding: 0.5rem 0.7rem;
      margin-right: 0.7rem;
      border: none;
      cursor: pointer;
      color: #000000;
    }
    .login {
      background: #ffffff;
    }
    .signup {
      background: #4ce895;
      border-radius: 0.6rem;
    }
  }
`;

export default Nav;
