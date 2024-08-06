import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard.jsx";
import Topbar from "./components/Topbar.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <Topbar />
          <div className="flex-grow p-4 md:p-6 bg-gray-900 text-white">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
