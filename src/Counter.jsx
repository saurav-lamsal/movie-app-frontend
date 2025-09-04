// State Management

import { useState } from "react";

//State --> handle data within component
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>click to increase</button>
    </div>
  );
};

export default Counter;



// Summary:
// React --> js library, reusable component, used for building UI
// JSX --> Write HTML within JavaScript
// components --> Reusable blocks
// props --> passing data to components
// state--> Handle component data dynamically
