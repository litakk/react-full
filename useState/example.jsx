import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount((prev) => prev + 1);
  };

  const Decrement = () => {
    setCount((prev) => (prev > 0 ? -1 : 0));
  };

  const Sbros = () => {
    setCount(0);
  };

  return (
    <div>
      <button onClick={Decrement}>-</button>
      {count}
      <button onClick={Increment}>+</button>
      <br />
      <button onClick={Sbros}>Сброс</button>
    </div>
  );
}

export default App;
