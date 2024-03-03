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
</section>;

import { ReactNode } from "react";

type tabButtonProps = {
  children: ReactNode,
};

const TabButton: React.FC<tabButtonProps> = (props) => {
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
};

export default TabButton;
