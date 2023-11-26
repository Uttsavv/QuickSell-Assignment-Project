const groupTicketsByStatus = (ticketsList, reqStatus) => {
  return ticketsList.filter((ticket) => ticket.status === reqStatus);
};

const groupTicketsByPriority = (ticketsList, reqPriority) => {
  return ticketsList.filter(
    (ticket) => PRIORITY_MAP[ticket.priority] === reqPriority
  );
};

const groupTicketsByUsers = (ticketsList, usersList, reqUser) => {
  const reqUserObj = usersList.find((user) => user.name === reqUser);
  if (!reqUserObj) return [];
  const reqUserId = reqUserObj.id;
  return ticketsList.filter((ticket) => ticket.userId === reqUserId);
};

const groupTickets = (groupBy, ticketsList, usersList, currentGroup) => {
  if (groupBy === "status")
    return groupTicketsByStatus(ticketsList, currentGroup);
  else if (groupBy === "priority")
    return groupTicketsByPriority(ticketsList, currentGroup);
  return groupTicketsByUsers(ticketsList, usersList, currentGroup);
};

const orderTicketsByAscending = (tickets) => {
  return tickets.sort((t1, t2) =>
    t1.title.toLowerCase() <= t2.title.toLowerCase() ? -1 : 1
  );
};
const orderTicketsByPriority = (tickets) => {
  return tickets.sort((t1, t2) => t1.priority > t2.priority);
};

const orderGroupTickets = (orderBy, tickets) => {
  if (orderBy === "ascending") return orderTicketsByAscending(tickets);
  return orderTicketsByPriority(tickets);
};

export const filterTickets = (
  groupBy = "status",
  orderBy = "priority",
  ticketsList,
  usersList,
  currentGroup
) => {
  groupBy = groupBy ? groupBy.toLowerCase() : "status";
  orderBy = orderBy ? orderBy.toLowerCase() : "priority";

  let currGroupTickets = groupTickets(
    groupBy,
    ticketsList,
    usersList,
    currentGroup
  );

  if (currGroupTickets.length === 0) return [];
  let finalTickets = orderGroupTickets(orderBy, currGroupTickets);
  return finalTickets.length ? finalTickets : [];
};

const PRIORITY_MAP = {
  4: "Urgent",
  3: "High",
  2: "Medium",
  1: "Low",
  0: "No priority",
};
