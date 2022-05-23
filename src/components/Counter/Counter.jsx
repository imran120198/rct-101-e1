import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  // NOTE: do not delete `data-cy` key value pair

  const [count,SetCount] = useState(1)
  const handleincrement = (value) => {
    SetCount(count + value)
  }

  const handleDecrement = (value) => {
    SetCount(count - value)
  }

  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" className="one" onClick={() => handleincrement(1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" className="one" onClick={() => handleDecrement(1)}>-</button>
    </div>
  );
};

export default Counter;
