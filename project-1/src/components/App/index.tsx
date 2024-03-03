import React from "react";
import "./App.css";
import CoreConcept from "../CoreConcept";
import { CORE_CONCEPTS } from "../../data";
import Image from "../../assets/react-core-concepts.png";
import Header from "../Header";
import TabButton from "../TabButton";

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3></h3>
            <p></p>
            <pre>
              <code></code>
            </pre>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;

/*
<RewardsHeader/>
<RewardsTabs/>
<RewardsPills/>
<RewardsList/>
<RewardsDrawer/>
*/
