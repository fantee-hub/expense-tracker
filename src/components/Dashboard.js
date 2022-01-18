import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import avi from "../images/Vector.png";
import bar from "../images/bar.svg";
import welcome from "../images/welcome.svg";

const Dashboard = ({ user }) => {
  return (
    <>
      {user ? (
        <DashboardContainer>
          <div className="row">
            <div className="logo">
              <img src={logo} alt="fundall logo" />
            </div>
            <div className="userContainer">
              <div className="userImage">
                <img src={avi} alt={user.users.firstname} />
              </div>
              <div className="username">
                <h3>{`${user.users.firstname} ${user.users.lastname}`}</h3>
                <p>{user.users.email}</p>
              </div>
            </div>
            <div className="expense">
              <p>Target Monthly Expenses</p>
              <h3>₦596,000</h3>
              <div className="progressBar">
                <img src={bar} alt="progress bar" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="welcome-container">
              <div className="welcome-content">
                <span>Welcome back,</span> {user.users.firstname}
                <p>Now, let’s get your expenses for this month</p>
              </div>
              <div className="vector-img">
                <img src={welcome} alt="welome back" />
              </div>
            </div>

            <div className="input-container">
              <form>
                <div className="input1">
                  <label htmlFor="expense">Target Monthly Expenses</label>
                  <input
                    type="number"
                    placeholder="Targer Monthly Expenses"
                    name="expense"
                  />
                </div>
                <div className="input2">
                  <label htmlFor="date">Date</label>
                  <input type="date" placeholder="Date" />
                </div>
                <div className="input3">
                  <div className="sub-header">
                    <h4>Today’s Expenses</h4>
                  </div>
                  <div className="today">
                    <input type="text" placeholder="Pizza" />
                    <input type="text" placeholder="Textbook" />
                    <input type="text" placeholder="Tuition fee" />
                  </div>
                </div>
                <div className="today">
                  <input type="number" placeholder="10,000" />
                  <input type="number" placeholder="10,000" />
                  <input type="number" placeholder="20,000" />
                </div>
              </form>
            </div>
          </div>
        </DashboardContainer>
      ) : (
        <h1>Not logged in</h1>
      )}
    </>
  );
};

const DashboardContainer = styled.div``;
export default Dashboard;
