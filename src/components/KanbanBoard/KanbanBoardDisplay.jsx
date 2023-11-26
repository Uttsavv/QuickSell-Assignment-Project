import "./KanbanBoardDisplay.css";
import GroupsDisplayer from "./GroupsDisplayer";

const KanbanBoardDisplay = () => {
  return (
    <div className="board gray-background">
      <GroupsDisplayer />
    </div>
  );
};

export default KanbanBoardDisplay;
