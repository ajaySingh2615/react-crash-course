import "./App.css";
import AddTodo from "./components/AddTodo.jsx";
import Todos from "./components/Todos.jsx";

function App() {
  return (
    <>
      <h1>Redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
