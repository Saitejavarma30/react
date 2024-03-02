import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./assets/react-core-concepts.png";

const App = () => {
  return (
    <div>
      <header>
        <img src={Image} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
};

export default App;
