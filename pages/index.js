import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="container">
        <section className="hero">
          <h2>Welcome to Student Study Tracker</h2>

          <p>
            Organize your study tasks, track your progress, and stay
            motivated throughout your courses.
          </p>

          <Link href="/tasks" className="primary-button">
            Start Tracking
          </Link>
        </section>

        <section className="feature-grid">
          <div className="feature-card">
            <h3>Manage Tasks</h3>
            <p>
              Add study tasks and keep track of what you need to complete.
            </p>
          </div>

          <div className="feature-card">
            <h3>Track Completion</h3>
            <p>
              Mark tasks as completed when you finish your study work.
            </p>
          </div>

          <div className="feature-card">
            <h3>View Progress</h3>
            <p>
              See your progress and receive feedback based on your
              completed tasks.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}