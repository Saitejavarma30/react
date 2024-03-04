import React, { useState } from "react";
import "./App.css";
import CoreConcept from "../CoreConcept";
import { CORE_CONCEPTS, EXAMPLES, ExamplesTitleType } from "../../data";
import Image from "../../assets/react-core-concepts.png";
import Header from "../Header";
import TabButton from "../TabButton";
import ExampleSection from "../ExampleSection";
import TabContent from "../TabContent";

const App: React.FC = () => {
  const text = ["Fundamental", "Core", "Basic"];
  const [selectedButton, setSelectedButton] = useState<string>("components");

  const randomElement = (max: number): string => {
    return text[Math.floor(Math.random() * max)];
  };

  const handleClick = (selectButton: ExamplesTitleType) => {
    setSelectedButton(selectButton);
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
            selected={"components" === selectedButton}
          >
            Components
          </TabButton>
          <TabButton
            onSelect={() => {
              handleClick("jsx");
            }}
            selected={"jsx" === selectedButton}
          >
            JSX
          </TabButton>
          <TabButton
            onSelect={() => {
              handleClick("props");
            }}
            selected={"props" === selectedButton}
          >
            Props
          </TabButton>
          <TabButton
            onSelect={() => {
              handleClick("state");
            }}
            selected={"state" === selectedButton}
          >
            State
          </TabButton>
        </ExampleSection>
        {selectedButton && (
          <TabContent
            {...EXAMPLES[selectedButton as ExamplesTitleType]}
          ></TabContent>
        )}
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
