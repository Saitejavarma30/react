import { ReactNode } from "react";

type ExampleSectionProps = {
  children: ReactNode;
};

const ExampleSection: React.FC<ExampleSectionProps> = ({ children }) => {
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>{children}</menu>
    </section>
  );
};

export default ExampleSection;
