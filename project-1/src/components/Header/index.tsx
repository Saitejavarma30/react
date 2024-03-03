import React from "react";
import Image from "../../assets/react-core-concepts.png";

type HeaderProps = {
  text: string;
};

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <img src={Image} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {props.text} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
