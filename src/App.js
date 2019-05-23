import React from "react";
import Router from "./Router";
import "./App.css";
import NavBar from "./components/common/NavBar";
import CartList from "./components/common/CartList";
import {useSpring, animated} from 'react-spring'

function App() {
  let styles = useSpring({number:1, from:{number:0}})
  return (
    <div className="App">
      <NavBar />
      <CartList />
      <Router />
    </div>
  );
}

export default App;
