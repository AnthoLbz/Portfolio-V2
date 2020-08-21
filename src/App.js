import React from "react";
import "./App.css";
import Navigationbar from "./components/Navbar.jsx";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Router />
    </div>
  );
}

export default App;
