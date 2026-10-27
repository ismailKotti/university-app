import { useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((currentCount) => currentCount + 1);
  };

  return (
    <section className="counter-panel" aria-label="Compteur">
      <h2>Compteur : {count}</h2>
      <button className="secondary-button" onClick={handleClick}>
        Incrémenter
      </button>
    </section>
  );
};
export default Counter;