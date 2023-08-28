import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);

  function deleteTask(taskToDelete) {
    setTasks(
      tasks.filter((task) => {
        return task !== taskToDelete;
      })
    );
  }
  return (
    <div className="App">
      <h2>My Tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
