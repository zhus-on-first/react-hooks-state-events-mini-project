import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return <Task key={index} task={task} deleteTask={deleteTask} />;
      })}
    </div>
  );
}

export default TaskList;
