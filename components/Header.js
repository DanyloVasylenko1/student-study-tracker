import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Student Study Tracker</h1>

        <nav className="navigation">
          <Link href="/">Home</Link>
          <Link href="/tasks">Tasks</Link>
          <Link href="/progress">Progress</Link>
        </nav>
      </div>
    </header>
  );
}