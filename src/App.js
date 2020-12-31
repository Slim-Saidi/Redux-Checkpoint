import "./App.css";
import React, { useState } from "react";
import TaskList from "./Components/TaskList";
import AddTask from "./Components/AddTask";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [change, setChange] = useState("All");

  return (
    <div className="App">
      <AddTask />
      <select onChange={(e) => setChange(e.target.value)}>
        <option>All</option>
        <option>Unfinished</option>
        <option>Done</option>
      </select>
      <TaskList change={change} />
    </div>
  );
}

export default App;
