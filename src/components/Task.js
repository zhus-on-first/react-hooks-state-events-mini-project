import React from "react";

function Task({ task, deleteTask }) {
  function handleDeleteClick() {
    return deleteTask(task);
  }
  return (
    <div className="task">
      <div className="label" value={task.category}>
        {task.category}
      </div>
      <div className="text" value={task.text}>
        {task.text}
      </div>
      <button className="delete" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
}

export default Task;
