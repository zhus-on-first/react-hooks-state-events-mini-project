import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask, selectedCategory }) {
  const categoryFilteredTask =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => {
          return task.category === selectedCategory;
        });

  return (
    <div className="tasks">
      {categoryFilteredTask.map((task, index) => {
        return <Task key={index} task={task} deleteTask={deleteTask} />;
      })}
    </div>
  );
}

export default TaskList;
