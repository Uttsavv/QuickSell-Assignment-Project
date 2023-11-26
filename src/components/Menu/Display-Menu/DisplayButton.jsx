import { GiSettingsKnobs } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

import "./DisplayButton.css";

const DisplayButton = ({ onClick, active }) => {
  return (
    <button
      className={`display-btn default-text ${active ? "btn-active" : ""}`}
      onClick={onClick}
    >
      <GiSettingsKnobs className="rotate" /> Display
      <IoIosArrowDown />
    </button>
  );
};

export default DisplayButton;
