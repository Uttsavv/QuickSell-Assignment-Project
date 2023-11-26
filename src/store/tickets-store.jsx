import { createContext } from "react";
import useFetchData from "../hooks/useFetchData";
import useLocalStorageOptions from "../hooks/useLocalStorageOptions";

export const TicketsContext = createContext({
  ticketsList: [],
  usersList: [],
  selectedGrouping: "",
  setSelectedGrouping: () => {},
  selectedOrdering: "",
  setSelectedOrdering: () => {},
  GROUPING_LABELS: {},
});

const TicketsProvider = ({ children }) => {
  const { ticketsList, usersList } = useFetchData();
  const {
    groupingOption,
    setGroupingOption,
    orderingOption,
    setOrderingOption,
  } = useLocalStorageOptions();

  const USER_LABELS = getUserNames(usersList);

  const GROUPING_LABELS = {
    Status: STATUS_LABELS,
    Priority: PRIORITY_LABELS,
    Users: USER_LABELS,
  };

  const contextValue = {
    ticketsList,
    usersList,
    selectedGrouping: groupingOption,
    setSelectedGrouping: setGroupingOption,
    selectedOrdering: orderingOption,
    setSelectedOrdering: setOrderingOption,
    GROUPING_LABELS,
  };

  return (
    <TicketsContext.Provider value={contextValue}>
      {children}
    </TicketsContext.Provider>
  );
};

const getUserNames = (usersList) => {
  return usersList.map((user) => user.name);
};

const STATUS_LABELS = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
const PRIORITY_LABELS = ["No priority", "Urgent", "High", "Medium", "Low"];

export default TicketsProvider;
