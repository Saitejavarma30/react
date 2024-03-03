import { ReactNode } from "react";

type tabButtonProps = {
  children: ReactNode;
};

const TabButton: React.FC<tabButtonProps> = (props) => {
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
};

export default TabButton;
