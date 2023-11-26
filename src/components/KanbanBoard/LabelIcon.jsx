import { lazy, Suspense } from "react";
import "./LabelIcon.css";

//Lazy Loading all the Icons
const NoPriorityIcon = lazy(() =>
  import("../../components/ui/icons/noPriority.jsx")
);
const UrgentIcon = lazy(() => import("../../components/ui/icons/urgent.jsx"));
const HighIcon = lazy(() => import("../../components/ui/icons/high.jsx"));
const MediumIcon = lazy(() => import("../../components/ui/icons/medium.jsx"));
const LowIcon = lazy(() => import("../../components/ui/icons/low.jsx"));
const BacklogIcon = lazy(() => import("../../components/ui/icons/backlog.jsx"));
const TodoIcon = lazy(() => import("../../components/ui/icons/todo.jsx"));
const InProgressIcon = lazy(() =>
  import("../../components/ui/icons/inProgress.jsx")
);
const DoneIcon = lazy(() => import("../../components/ui/icons/done.jsx"));
const CancelledIcon = lazy(() =>
  import("../../components/ui/icons/cancelled.jsx")
);
const UserIcon = lazy(() => import("../../components/ui/icons/user.jsx"));

const jsxMap = {
  "No priority": NoPriorityIcon,
  Urgent: UrgentIcon,
  High: HighIcon,
  Medium: MediumIcon,
  Low: LowIcon,
  Backlog: BacklogIcon,
  Todo: TodoIcon,
  "In progress": InProgressIcon,
  Done: DoneIcon,
  Cancelled: CancelledIcon,
  User: UserIcon,
};

const LabelIcon = ({ label }) => {
  const ICON = jsxMap[label] || jsxMap["User"];

  return (
    <Suspense fallback={<div className="loading-icon"></div>}>
      <div className="icon-container">
        <ICON />
      </div>
    </Suspense>
  );
};

export default LabelIcon;
