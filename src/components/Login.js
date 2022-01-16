import React from "react";
import illustration from "../images/illustration2.svg";
import logo from "../images/logo.svg";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginContainer>
      <div className="row1">
        <div className="logo">
          <img src={logo} alt="fundall logo" />
        </div>
        <div className="home-image">
          <div className="hero-image">
            <img src={illustration} alt="illustration" />
          </div>

          <div className="home-content">
            <span>Welcome back!</span>We miss you.
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

const LoginContainer = styled.div``;
export default Login;
