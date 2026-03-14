import "./Counter.css";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  return (
    <section className="counter-app">
      <h2 className="counter-heading">Counter</h2>
      <div className="counter-container">
        <button
          onClick={() => {
            count > 1 && setCount(count - 1);
          }}
          className="counter-button"
        >
          -
        </button>
        <div className="counter-number">{count}</div>
        <button onClick={() => setCount(count + 1)} className="counter-button">
          +
        </button>
      </div>
      <button onClick={() => setCount(1)} className="counter-reset">
        Reset
      </button>
    </section>
  );
}
