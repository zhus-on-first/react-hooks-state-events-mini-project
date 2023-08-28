import React from "react";

function Task({ task }) {
  return (
    <div className="task">
      <div className="label" value={task.category}>
        {task.category}
      </div>
      <div className="text" value={task.text}>
        {task.text}
      </div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
