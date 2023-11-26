import { useContext } from "react";
import "./DropdownMenu.css";
import { TicketsContext } from "../../../store/tickets-store";
import OptionsCategory from "./OptionsCategory";

const groupingOptionsAvailable = ["Status", "Users", "Priority"];
const orderingOptionsAvailable = ["Priority", "Ascending"];

const DropdownMenu = () => {
  const {
    selectedGrouping,
    setSelectedGrouping,
    selectedOrdering,
    setSelectedOrdering,
  } = useContext(TicketsContext);

  return (
    <div className="dropdown-menu gray-background">
      <OptionsCategory
        label="Grouping"
        options={groupingOptionsAvailable}
        selectedValue={selectedGrouping}
        onSelect={setSelectedGrouping}
      />
      <OptionsCategory
        label="Ordering"
        options={orderingOptionsAvailable}
        selectedValue={selectedOrdering}
        onSelect={setSelectedOrdering}
      />
    </div>
  );
};

export default DropdownMenu;
