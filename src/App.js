import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Globalstyles from "./styles/Globalstyles";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://campaign.fundall.io/api/v1/base/profile")
      .then((res) => {
        setUser(res.data.success.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, [user]);

  const setUsers = (users) => {
    setUser({
      users: users,
    });
  };

  return (
    <div className="App">
      <Globalstyles />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login setUsers={setUsers} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard user={user} setUser={setUser} isLoading={isLoading} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
