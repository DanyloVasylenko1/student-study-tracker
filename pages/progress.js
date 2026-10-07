import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProgressCard from "../components/ProgressCard";
import { getTasks } from "../utils/taskStorage";

export default function Progress() {
  const [tasks, setTasks] = useState([]);

  // Load the same tasks that are saved from the Tasks page.
  useEffect(() => {
    setTasks(getTasks());
  }, []);

  return (
    <>
      <Header />

      <main className="container">
        <section className="page-heading">
          <h2>Progress</h2>

          <p>
            Check your study progress and see how many tasks you have
            completed.
          </p>
        </section>

        <ProgressCard tasks={tasks} />
      </main>
    </>
  );
}