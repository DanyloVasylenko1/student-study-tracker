import { useEffect, useState } from "react";
import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { getTasks, saveTasks } from "../utils/taskStorage";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  // Load saved tasks when the page opens.
  useEffect(() => {
    const savedTasks = getTasks();

    if (savedTasks.length > 0) {
      setTasks(savedTasks);
    } else {
      const startingTasks = [
        {
          id: 1,
          name: "Review React components",
          completed: false,
        },
        {
          id: 2,
          name: "Practice JavaScript",
          completed: true,
        },
      ];

      setTasks(startingTasks);
      saveTasks(startingTasks);
    }
  }, []);

  // Add a new task.
  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  // Complete or uncomplete a task.
  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            completed: !task.completed,
          }
        : task
    );

    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };
//Delete a task.
const deleteTask = (taskId) => {
  const updatedTasks = tasks.filter((task) => task.id !== taskId);

  setTasks(updatedTasks);
  saveTasks(updatedTasks);
};
  return (
    <>
      <Header />

      <main className="container">
        <section className="page-heading">
          <h2>Study Tasks</h2>

          <p>
            Add your study tasks and mark them as completed when you
            finish.
          </p>
        </section>

        <TaskForm onAddTask={addTask} />

        <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </main>
    </>
  );
}