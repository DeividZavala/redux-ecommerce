import React from "react";
import Router from "./Router";
import "./App.css";
import NavBar from "./components/common/NavBar";
import CartList from "./components/common/CartList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <CartList />
      <Router />
    </div>
  );
}

export default App;
