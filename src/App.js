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

  useEffect(() => {
    axios
      .get("https://campaign.fundall.io/api/v1/base/profile")
      .then((res) =>
        setUser({
          users: res.data.success.data,
        })
      )
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <div className="App">
      <Globalstyles />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
