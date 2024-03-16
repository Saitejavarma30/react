import { ExampleType } from "../../data";
import { TabConents } from "./styles";

const TabContent: React.FC<ExampleType> = ({ title, description, code }) => {
  return (
    <TabConents id="tab-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <pre>
        <code>{code}</code>
      </pre>
    </TabConents>
  );
};

export default TabContent;
