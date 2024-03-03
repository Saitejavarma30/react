import { ReactNode } from "react";

type TabButtonProps = {
  children: ReactNode;
  onSelect: () => void;
};

const TabButton: React.FC<TabButtonProps> = ({ children, onSelect }) => {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};

export default TabButton;
