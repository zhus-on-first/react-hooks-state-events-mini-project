import React, { useState } from "react";

function NewTaskForm({
  categories,
  selectedCategory,
  setSelectedCategory,
  onTaskFormSubmit,
}) {
  const [newTaskText, setNewTaskText] = useState("Code");
  const [newTaskCategory, setNewTaskCategory] = useState("");

  function handleNewTaskSubmit(event) {
    event.preventDefault();
    const newTask = { text: newTaskText, category: newTaskCategory };
    onTaskFormSubmit(newTask);
    setNewTaskText("");
    setNewTaskCategory("");
  }

  return (
    <form className="new-task-form" onSubmit={handleNewTaskSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={newTaskText}
          onChange={(event) => {
            return setNewTaskText(event.target.value);
          }}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={newTaskCategory}
          onChange={(event) => {
            return setNewTaskCategory(event.target.value);
          }}
        >
          {categories.map((category) => {
            return category !== "All" ? (
              <option key={category} value={category}>
                {category}
              </option>
            ) : null;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
