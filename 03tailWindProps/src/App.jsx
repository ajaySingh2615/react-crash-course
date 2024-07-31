import "./App.css";
import { Card } from "./components/Card.jsx";

function App() {
  // let myObj = {
  //   username: "Thakur",
  //   age: 24,
  // };
  //
  // let newArray = [1, 2, 3, 4, 5];

  return (
    <>
      <Card username="rose" btnText="click me" />
      <Card username="eleven" btnText="visit me" />
      <Card />
    </>
  );
}

export default App;
