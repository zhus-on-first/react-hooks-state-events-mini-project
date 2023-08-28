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
  function onTaskFormSubmit(newTask) {
    return setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My Tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        deleteTask={deleteTask}
        selectedCategory={selectedCategory}
        tasks={tasks}
      />
    </div>
  );
}

export default App;
