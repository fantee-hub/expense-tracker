import React, { useState } from "react";
import logo from "../images/logo.svg";
import home from "../images/home.svg";
import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignup, setIsSignUp] = useState(false);
  const [error, setError] = useState("");

  const signUpHandler = (e) => {
    e.preventDefault();

    const data = {
      firstname: firstName,
      lastname: lastName,
      email,
      password,
      password_confirmation: confirmPassword,
    };

    console.log(data);

    axios({
      method: "POST",
      url: "https://campaign.fundall.io/api/v1/register",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data,
    })
      .then((res) => {
        console.log(res);
        setIsSignUp(true);
      })
      .catch((err) => {
        setError(err.response.data.error.message);
        setTimeout(function () {
          setError("");
        }, 5000);
      });
  };
  if (isSignup) {
    return <Navigate to="/login" />;
  }

  return (
    <SignupContainer>
      <div className="row1">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="fundall logo" />
          </div>
        </Link>
        <div className="home-image">
          <div className="hero-image">
            <img src={home} alt="illustration" />
          </div>

          <div className="home-content">
            <span>Welcome!</span> Let's get to know you.
            <p>
              Your first step toward a better financial lifestyle starts here.
            </p>
          </div>
        </div>
      </div>
      <div className="row2">
        <div className="form-container">
          <form onSubmit={signUpHandler}>
            {error && <div className="error">{error}</div>}
            <div className="input1">
              <span>
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  name="fname"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </span>
              <span>
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="lname"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </span>
            </div>
            <div className="input2">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input3">
              <label htmlFor="pword">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input4">
              <label htmlFor="cpword">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="signupBtn">
              <button type="submit">SIGN UP</button>
            </div>
            <div className="form-text">
              Already have an account?{" "}
              <Link to="/login">
                <span> Login Here </span>
              </Link>
            </div>
          </form>
        </div>
        <div className="terms">
          By clicking on Login, you agree to our{" "}
          <span>Terms & Conditions and Privacy Policy</span>
        </div>
      </div>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
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
    margin: 1rem 0 0 0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
    padding: 1.5rem 4rem;
    .error {
      background: red;
      width: 96%;
      padding: 0.6rem 0 0.6rem 1rem;
      color: white;
      border-radius: 0.25rem;
    }
    form {
      margin: 0 auto;
      label {
        display: block;
        margin: 0 0 0.6rem 0;
      }
      .input1 {
        display: flex;
        column-gap: 1rem;
        padding: 1rem 0;
      }
      .input3 {
        padding: 1rem 0;
      }
      input[type="text"],
      input[type="email"],
      input[type="password"] {
        padding: 0.7rem 1rem;
        border: 1px solid #cad0c9;
        box-sizing: border-box;
        border-radius: 0.25rem;
        &:focus {
          outline-color: #4de897;
        }
      }
      input[type="email"],
      input[type="password"] {
        width: 100%;
      }
      .signupBtn {
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
  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    column-gap: 1rem;
    padding: 1rem;
    .row1 {
      .home-image {
        display: none;
      }
    }
    .form-container {
      padding: 1rem;
      form {
        .input1 {
          display: flex;
          flex-direction: column;
          row-gap: 1rem;
          input[type="text"] {
            width: 100%;
          }
        }
      }
    }
  }
  @media screen and (min-width: 765px) and (max-width: 1024px) {
    .form-container {
      padding: 1rem 1.4rem;
    }
  }
`;
export default Signup;
