import MenuBar from "./components/Menu/MenuBar";
import KanbanBoardDisplay from "./components/KanbanBoard/KanbanBoardDisplay";
import TicketsProvider from "./store/tickets-store";

const App = () => {
  return (
    <TicketsProvider>
      <MenuBar />
      <KanbanBoardDisplay />
    </TicketsProvider>
  );
};

export default App;
