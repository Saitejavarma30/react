import { ReactNode } from "react";

type TabButtonProps = {
  children: ReactNode;
  onSelect: () => void;
  selected: boolean;
};

const TabButton: React.FC<TabButtonProps> = ({
  children,
  onSelect,
  selected,
}) => {
  return (
    <li>
      <button className={selected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
