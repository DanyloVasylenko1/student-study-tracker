import { useState } from "react";

export default function ProgressCard({ tasks }) {
  // Local state controls whether the progress details are visible.
  const [showDetails, setShowDetails] = useState(true);

  const completedTasks = tasks.filter((task) => task.completed).length;

  const totalTasks = tasks.length;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <section className="progress-card">
      <h2>Study Progress</h2>

      <div className="progress-number">{progress}%</div>

      {showDetails && (
        <p>
          You have completed {completedTasks} out of {totalTasks} tasks.
        </p>
      )}

      {progress === 100 && totalTasks > 0 ? (
        <p className="success-message">
           Excellent! You completed all your tasks!
        </p>
      ) : progress >= 50 ? (
        <p className="success-message">
           Great progress! Keep going.
        </p>
      ) : (
        <p className="warning-message">
           Keep studying and complete more tasks.
        </p>
      )}

      <button
        className="secondary-button"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </section>
  );
}