import { useContext, useEffect, useState } from "react";
import { TicketsContext } from "..//store/tickets-store";
import { filterTickets } from "../utils/filterTickets";

const useGroupTickets = ({ label }) => {
  const { selectedGrouping, selectedOrdering, ticketsList, usersList } =
    useContext(TicketsContext);
  const [groupTickets, setGroupTickets] = useState([]);

  useEffect(() => {
    const fetchGroupTickets = () => {
      const filteredGroupTickets = filterTickets(
        selectedGrouping,
        selectedOrdering,
        ticketsList,
        usersList,
        label
      );
      setGroupTickets(filteredGroupTickets);
    };

    fetchGroupTickets();
  }, [selectedGrouping, selectedOrdering, ticketsList, usersList, label]);

  return { groupTickets };
};

export default useGroupTickets;
