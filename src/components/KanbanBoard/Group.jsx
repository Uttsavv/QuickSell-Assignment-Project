import { FaPlus } from "react-icons/fa6";
import { TbDots } from "react-icons/tb";
import "./Group.css";
import Card from "./Card";
import useGroupTickets from "../../hooks/useGroupTickets";
import LabelIcon from "./LabelIcon";

const Group = ({ label }) => {
  const { groupTickets } = useGroupTickets({ label });
  return (
    <div className="group-container default-text">
      <div className="group-header">
        <div className="group-info-container">
          <div className="label-container">
            <div>
              <LabelIcon label={label} />
            </div>
            <div>{label}</div>
          </div>
          <div className="ticket-count">
            {groupTickets ? groupTickets.length : 0}
          </div>
        </div>

        <div className="icons">
          <FaPlus className="icon" />
          <TbDots className="icon" />
        </div>
      </div>
      <div className="tickets-container">
        {groupTickets &&
          groupTickets.map((ticket) => (
            <Card key={ticket.id} ticketData={ticket} />
          ))}
      </div>
    </div>
  );
};

export default Group;
