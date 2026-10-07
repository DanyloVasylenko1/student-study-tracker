import { useState } from "react";

export default function Counter({ title }) {
  const [count, setCount] = useState(0);
  const [isStudying, setIsStudying] = useState(false);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
    setIsStudying(false);
  };

  return (
    <section className="card">
      <h1>{title}</h1>
      <p className="counter-number">{count}</p>

      {isStudying ? (
        <p className="success">Study session is currently active!</p>
      ) : (
        <p className="muted">No study session is active.</p>
      )}

      <div className="button-row">
        <button className="button" onClick={increment}>
          Start Session
        </button>

        <button className="button secondary" onClick={decrement}>
          Remove Session
        </button>

        <button className="button danger" onClick={reset}>
          Reset
        </button>
      </div>

      <button
        className="link-button"
        onClick={() => setIsStudying(!isStudying)}
      >
        {isStudying ? "Stop Studying" : "Begin Studying"}
      </button>
    </section>
  );
}
