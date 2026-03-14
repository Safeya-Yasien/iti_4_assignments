import "./App.css";
import ToDo from "./components/ToDo";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="h-dvh p-4 bg-stone-200">
      <UsersList />
      <ToDo />
    </div>
  );
}

export default App;
