import { useState } from "react";
import DisplayButton from "./Display-Menu/DisplayButton";
import DropdownMenu from "./Display-Menu/DropdownMenu";

import "./MenuBar.css";

const MenuBar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownVisible((currMode) => !currMode);
  };

  return (
    <div className="bar white-background">
      <DisplayButton onClick={toggleDropdown} active={isDropdownVisible} />
      {isDropdownVisible && <DropdownMenu />}
    </div>
  );
};

export default MenuBar;
