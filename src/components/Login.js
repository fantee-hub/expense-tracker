import React, { useState } from "react";
import illustration from "../images/illustration2.svg";
import logo from "../images/logo.svg";
import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";

import axios from "axios";

const Login = ({ setUsers }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    console.log(data);

    axios({
      method: "POST",
      url: "https://campaign.fundall.io/api/v1/login",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data,
    })
      .then((res) => {
        const token = res.data.success.user.access_token;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        setUsers(res.data.success.data);
        setIsLogged(true);
      })
      .catch((err) => {
        setError(err.response.data.error.message);
        setTimeout(function () {
          setError("");
        }, 5000);
      });
  };

  if (isLogged) {
    return <Navigate to="/dashboard" />;
  }
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
            <span>Welcome back!</span> We miss you.
          </div>
        </div>
      </div>
      <div className="row2">
        <div className="form-container">
          <div className="form-header">
            <h1>Holla</h1>
            <p>Sign in to the vibe!</p>
          </div>
          <form onSubmit={loginHandler}>
            {error && <div className="error">{error}</div>}
            <div className="input1">
              <label htmlFor="email">Email or Username</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email or Username"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input2">
              <label htmlFor="pword">Password</label>
              <input
                type="password"
                name="pword"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="loginBtn">
              <button type="submit" disabled={isLogged}>
                LOGIN
              </button>
            </div>
            <div className="form-text">
              Don't have an account?
              <Link to="/signup">
                <span> Register Here </span>
              </Link>
            </div>
            <div className="terms">
              By clicking on Login, you agree to our{" "}
              <span>Terms & Conditions and Privacy Policy</span>
            </div>
          </form>
        </div>
      </div>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
  .logo {
    padding: 0 0 1rem 0;
  }
  .home-image {
    padding: 3rem 0 0 0;
    .hero-image {
      text-align: center;
    }
    .home-content {
      padding: 1rem 0 0 0;
      font-weight: 800;
      font-size: 2rem;
      max-width: 25rem;
      margin: 0 auto;
      span {
        color: #4de897;
      }
      p {
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }
  .form-container {
    margin: 2rem 0 0 0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
    padding: 1.5rem 4rem;

    .form-header {
      padding: 1rem 0;
    }
    form {
      margin: 0 auto;
      label {
        display: block;
        margin: 0 0 0.6rem 0;
      }
      .error {
        background: red;
        width: 96%;
        padding: 0.6rem 0 0.6rem 1rem;
        color: white;
        border-radius: 0.25rem;
      }
      .input1 {
        padding: 1rem 0;
      }

      input[type="text"],
      input[type="password"] {
        padding: 0.7rem 1rem;
        border: 1px solid #cad0c9;
        box-sizing: border-box;
        border-radius: 0.25rem;
        width: 100%;
        &:focus {
          outline-color: #4de897;
        }
      }
      .loginBtn {
        margin: 1.3rem 0;
        button {
          width: 100%;
          padding: 1rem 0;
          cursor: pointer;
          display: block;
          border: none;
          background: #4de897;
          font-weight: 800;
          border-radius: 0.25rem;
        }
      }
      .form-text {
        text-align: center;
        span {
          color: #4de897;
          font-weight: 600;
        }
      }
      .terms {
        max-width: 20rem;
        margin: 0 auto;
        text-align: center;
        padding: 1rem 0;
        span {
          color: #4de897;
          font-weight: 600;
        }
      }
    }
  }
  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    .row1 {
      .home-image {
        display: none;
      }
    }
    .form-container {
      padding: 1rem;
    }
  }
  @media screen and (min-width: 765px) and (max-width: 900px) {
    .form-container {
      padding: 1.5rem 2rem;
    }
  }
`;
export default Login;
