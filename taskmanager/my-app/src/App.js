

import { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Task from "./Pages/Task.js";

function App() {
 const navigate = useNavigate();
 const [tasks, setTasks] = useState([]);

 useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
   navigate("/login");
  }
 }, [navigate]);

 const handleDelete = (id) => {
  setTasks((tasks) => {
   return tasks.filter((t) => t.id !== id);
  });
 };

 return (
  <div>
   <h1>Task Dashboard</h1>

   <Task setTasks={setTasks} />

   <ul>
    {tasks.map((task) => {
     return (
      <li key={task.id}>
       {task.task}
       <button onClick={() => handleDelete(task.id)}>Delete</button>
      </li>
     );
    })}
   </ul>
  </div>
 );
}

export default App;