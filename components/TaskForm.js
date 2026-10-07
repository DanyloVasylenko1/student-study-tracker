import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  // State stores the task entered by the user.
  const [taskName, setTaskName] = useState("");

  // Handles the form submission.
  const handleSubmit = (event) => {
    event.preventDefault();

    if (taskName.trim() === "") {
      return;
    }

    onAddTask(taskName);

    // Clear the input after adding the task.
    setTaskName("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a study task"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}