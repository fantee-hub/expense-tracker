import React from "react";
import styled from "styled-components";
import home from "../images/home.svg";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <HomeContainer>
        <div className="image-container">
          <img src={home} alt="illustration" />
        </div>
        <div className="home-contents">
          <h1>Fundall Expense Tracker</h1>
          <h2>Mini Project Frontend</h2>
        </div>
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export default Home;
