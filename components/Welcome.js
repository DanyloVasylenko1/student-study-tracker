import { useState } from "react";

export default function Welcome({ title, message }) {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <section className="hero">
      <h1>{title}</h1>

      {showMessage && <p>{message}</p>}

      <button
        className="button"
        onClick={() => setShowMessage(!showMessage)}
      >
        {showMessage ? "Hide Welcome Message" : "Show Welcome Message"}
      </button>
    </section>
  );
}
