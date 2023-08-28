import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

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
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default App;
