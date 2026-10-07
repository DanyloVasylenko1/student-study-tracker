import { useState } from "react";

export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  const [showCompleted, setShowCompleted] = useState(true);

  const displayedTasks = showCompleted
    ? tasks
    : tasks.filter((task) => !task.completed);

  return (
    <section className="task-list-section">
      <div className="section-header">
        <h2>Your Study Tasks</h2>

        <button
          className="secondary-button"
          onClick={() => setShowCompleted(!showCompleted)}
        >
          {showCompleted ? "Hide Completed" : "Show Completed"}
        </button>
      </div>

      {displayedTasks.length === 0 ? (
        <p className="empty-message">
          No tasks to display. Add a study task above.
        </p>
      ) : (
        <div className="task-list">
          {displayedTasks.map((task) => (
            <div
              key={task.id}
              className={`task-item ${
                task.completed ? "completed" : ""
              }`}
            >
              <div>
                <h3>{task.name}</h3>

                <p>
                  {task.completed ? "Completed" : "Not completed"}
                </p>
              </div>

              <div className="task-buttons">
                <button
                  className="complete-button"
                  onClick={() => onToggleTask(task.id)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>

                <button
                  className="delete-button"
                  onClick={() => onDeleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}