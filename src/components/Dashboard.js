import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import avi from "../images/Vector.png";
import bar from "../images/bar.svg";
import welcome from "../images/welcome.svg";
import { v4 as uuidv4 } from "uuid";

const Dashboard = ({ user, isLoading }) => {
  const [expense1, setExpense1] = useState(0);
  const [expense2, setExpense2] = useState(0);
  const [expense3, setExpense3] = useState(0);
  const [target, setTarget] = useState(0);
  const [monthlyTarget, setMonthlyTarget] = useState(0);
  const [date, setDate] = useState("");
  const [daily, setDaily] = useState([]);
  const [dailyAmount, setDailyAmount] = useState([]);
  const [total, setTotal] = useState(0);

  console.log(user);

  const expenseHander = (e) => {
    e.preventDefault();
    let arr = [Number(expense1), Number(expense2), Number(expense3)];
    let sum = arr.reduce(function (a, b) {
      return a + b;
    }, 0);
    setDailyAmount([...dailyAmount, sum]);
    setTotal(sum);
    setDaily([...daily, date]);

    setMonthlyTarget(target);
  };

  return (
    <>
      {isLoading && (
        <DashboardContainer>
          <div className="row">
            <div className="logo">
              <img src={logo} alt="fundall logo" />
            </div>
            <div className="userContainer">
              <div className="userImage">
                <img src={avi} alt={user.firstname} />
              </div>
              <div className="username">
                <h3>{`${user.firstname} ${user.lastname}`}</h3>
                <p>{user.email}</p>
              </div>
            </div>
            <div className="expense">
              <p>Target Monthly Expenses</p>
              <h3>₦{monthlyTarget}</h3>
              <div className="progressBar">
                <img src={bar} alt="progress bar" />
              </div>
            </div>
            <div className="daily-expense">
              <div className="summary">Daily Expenses Summary</div>
              <div className="summary-content">
                <div className="date">
                  <h3>Date</h3>
                  {daily.map((dates) => (
                    <div key={uuidv4()} className="date-content">
                      {dates}
                    </div>
                  ))}
                </div>
                <div className="amounts">
                  <h3>Amount</h3>
                  {dailyAmount.map((amounts) => (
                    <div key={uuidv4()} className="date-content">
                      {" "}
                      <span> ₦{amounts} </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="row2">
            <div className="welcome-container">
              <div className="welcome-content">
                <span className="welcome">Welcome back,</span>{" "}
                <span className="name">{user.firstname}</span>
                <p>Now, let’s get your expenses for this month</p>
              </div>
              <div className="vector-img">
                <img src={welcome} alt="welome back" />
              </div>
            </div>

            <div className="input-container">
              <form onSubmit={expenseHander}>
                <div className="input1">
                  <label htmlFor="expense">Target Monthly Expenses</label>
                  <input
                    type="number"
                    placeholder="Target Monthly Expenses"
                    name="expense"
                    onChange={(e) => setTarget(e.target.value)}
                  />

                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    placeholder="Date"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="input2">
                  <div className="sub-header">
                    <h4>Today’s Expenses</h4>
                  </div>
                  <div className="expense-input">
                    <div className="today">
                      <div>
                        <input type="text" placeholder="Pizza" />
                        <input
                          type="number"
                          placeholder="10,000"
                          onChange={(e) => setExpense1(e.target.value)}
                        />
                      </div>
                      <div>
                        <input type="text" placeholder="Textbook" />
                        <input
                          type="number"
                          placeholder="10,000"
                          onChange={(e) => setExpense2(e.target.value)}
                        />
                      </div>
                      <div>
                        <input type="text" placeholder="Tuition fee" />
                        <input
                          type="number"
                          placeholder="20,000"
                          onChange={(e) => setExpense3(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="total">
                    <div>Total Actual Expenses: ₦</div>
                    <input
                      type="number"
                      placeholder="Total"
                      value={total}
                      disabled
                    />
                  </div>
                </div>
                <div className="save">
                  <button type="submit">Save Today's Expenses</button>
                </div>
              </form>
            </div>
          </div>
        </DashboardContainer>
      )}
    </>
  );
};

const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 5rem;
  .row {
    .logo {
      display: flex;
      justify-content: space-between;

      padding: 0 0 1rem 0;
    }
    .userContainer {
      display: flex;
      align-items: center;
      .userImage {
        background: #c4c4c4;
        padding: 1rem 1.5rem;
        border-radius: 1rem;
      }
      padding: 1.5rem 0;
      .username {
        margin: 0 0 0 1rem;
      }
    }
    .expense {
      padding: 1rem 0;
      img {
        width: 100%;
      }
    }
    .daily-expense {
      box-shadow: 0px 0px 6px rgba(77, 232, 151, 0.19);
      padding: 1rem;
      .summary-content {
        display: flex;
        justify-content: space-between;
        padding: 2rem 0 0 0;
        line-height: 3;
        font-weight: 600;
        span {
          color: #4de897;
        }
      }
    }
  }
  .row2 {
    background: #f2f3f7;

    padding: 1.5rem;
    border-radius: 0.375rem;
    .welcome-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #ffffff;
      padding: 1rem;
      border-radius: 0.375rem;
      position: relative;
      .welcome-content {
        span {
          font-weight: 800;
        }
        .welcome {
          color: #4de897;
        }
        .name {
          text-transform: capitalize;
        }
      }
      .vector-img {
        position: absolute;
        right: 0;
        bottom: 0;
        img {
          height: 6rem;
        }
      }
    }
    .input-container {
      padding: 1rem 0.8rem 0 0.8rem;
      form {
        label {
          display: block;
          margin: 1rem 0 0.4rem 0;
        }
        .input1 {
          input[type="number"],
          input[type="date"] {
            width: 50%;
            padding: 0.7rem 1rem;
            border: 1px solid #cad0c9;
            box-sizing: border-box;
            border-radius: 0.25rem;
          }
        }
        .input2 {
          padding: 2rem 0 0 0;
          .sub-header {
            padding: 0 0 0.4rem 0;
          }
          .expense-input {
            input[type="text"] {
              padding: 0.7rem 0rem 0.7rem 1rem;
              border: 1px solid #cad0c9;
              box-sizing: border-box;
              margin: 0.6rem 0rem 0.6rem 0;
              width: 68%;
              &:focus {
                outline: none;
              }
            }
            input[type="number"] {
              padding: 0.7rem 0rem 0.7rem 1rem;
              border: 1px solid #cad0c9;
              box-sizing: border-box;
              margin-left: 0.7rem;
              width: 30%;
              &:focus {
                outline: none;
              }
            }
          }
          .total {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 1rem 0 0 0;
            input[type="number"] {
              padding: 0.7rem 0 0.7rem 1rem;
              margin-left: 0.3rem;

              font-weight: 600;
              background: #ffffff;
              border: 1px solid #4de897;
              &:focus {
                outline: none;
              }
            }
          }
        }
        .save {
          text-align: center;
          padding: 1rem 0 0 0;
          button {
            padding: 0.6rem 1rem;
            cursor: pointer;
            background: #4de897;
            border: none;
            border-radius: 0.9rem;
            &:focus {
              outline: none;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    .row2 {
      .input-container {
        padding: 1rem 0.8rem 0 0;
        form {
          .input1 {
            input[type="number"],
            input[type="date"] {
              width: 100%;
            }
          }
          .input2 {
            .expense-input {
              input[type="text"] {
                width: 100%;
              }
              input[type="number"] {
                width: 100%;
                margin-left: 0;
              }
            }
            .total {
              display: flex;
              flex-direction: column;
              column-gap: 0.6rem;
            }
          }
        }
      }

      .welcome-container {
        .vector-img {
          display: none;
        }
      }
    }
  }

  @media screen and (min-width: 1025px) {
    .row2 {
      width: 40rem;
    }
  }
`;
export default Dashboard;
