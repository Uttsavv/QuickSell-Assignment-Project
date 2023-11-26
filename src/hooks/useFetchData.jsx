import { useEffect, useState } from "react";

const API_URI = "https://api.quicksell.co/v1/internal/frontend-assignment";

const useFetchData = () => {
  const [ticketsList, setTicketsList] = useState([]);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URI);
        const data = await response.json();
        setTicketsList(data.tickets);
        setUsersList(data.users);
      } catch (err) {
        console.log("Failed to fetch data", err);
        throw err;
      }
    };

    fetchData();
  }, []);

  return { ticketsList, usersList };
};

export default useFetchData;
