import React from "react";
import Home from "./components/Home";
import Globalstyles from "./styles/Globalstyles";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Globalstyles />
      <Nav />
      <Home />
    </div>
  );
}

export default App;
