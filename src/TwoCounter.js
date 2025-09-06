// Make a counter application with react that has two buttons, one to increment the count and another to decrement the count. Display the current count value in the center.

import React, { useState } from "react";

let count = 0;

const TwoCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter Application</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default TwoCounter;
