import { useContext } from "react";
import "./GroupsDisplayer.css";
import { TicketsContext } from "../../store/tickets-store";
import Group from "./Group";

const GroupsDisplayer = () => {
  const { selectedGrouping, GROUPING_LABELS } = useContext(TicketsContext);
  const currGroupLabels =
    GROUPING_LABELS[selectedGrouping ? selectedGrouping : "Status"];

  return (
    <div className="groups-displayer">
      {currGroupLabels.map((groupLabel) => {
        return <Group key={groupLabel} label={groupLabel} />;
      })}
    </div>
  );
};

export default GroupsDisplayer;
