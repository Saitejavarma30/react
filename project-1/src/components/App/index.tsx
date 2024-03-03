import React, { useState } from "react";
import "./App.css";
import CoreConcept from "../CoreConcept";
import { CORE_CONCEPTS } from "../../data";
import Image from "../../assets/react-core-concepts.png";
import Header from "../Header";
import TabButton from "../TabButton";
import ExampleSection from "../ExampleSection";

const App: React.FC = () => {
  const text = ["Fundamental", "Core", "Basic"];
  const [selectedButton, setSelectedButton] = useState<string>(
    "Please click some button"
  );

  const randomElement = (max: number): string => {
    return text[Math.floor(Math.random() * max)];
  };

  const handleClick = (selectButton: string) => {
    setSelectedButton(selectButton);
    console.log(selectedButton);
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
        <ExampleSection>
          <TabButton
            onSelect={() => {
              handleClick("components");
            }}
          >
            Components
          </TabButton>
          <TabButton
            onSelect={() => {
              handleClick("jsx");
            }}
          >
            JSX
          </TabButton>
          <TabButton
            onSelect={() => {
              handleClick("props");
            }}
          >
            Props
          </TabButton>
          <TabButton
            onSelect={() => {
              handleClick("state");
            }}
          >
            State
          </TabButton>
        </ExampleSection>
        <div id="tab-content">
          <h3>{selectedButton}</h3>
          {/* <p></p>
          <pre>
            <code></code>
          </pre> */}
        </div>
      </main>
    </>
  );
};

/*
onClick => onSelect (tabButton)
onSelect => handleClick (app)

oClick => handleClick
 */

export default App;

/*
<RewardsHeader/>
<RewardsTabs/>
<RewardsPills/>
<RewardsList/>
<RewardsDrawer/>
*/
