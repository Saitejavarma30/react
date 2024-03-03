import React from "react";
import "./App.css";
import CoreConcept from "../CoreConcept";
import { CORE_CONCEPTS } from "../../data";
import Image from "../../assets/react-core-concepts.png";
import Header from "../Header";

const App: React.FC = () => {
  const text = ["Fundamental", "Core", "Basic"];

  const randomElement = (max: number): string => {
    return text[Math.floor(Math.random() * max)];
  };

  return (
    <>
      <Header text={randomElement(3)} />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((core) => {
              return <CoreConcept {...core} />;
            })}
          </ul>
        </section>
      </main>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </>
  );
};

export default App;
