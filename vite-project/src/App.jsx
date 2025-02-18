import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount((prev) => prev + 1);
  };

  const Decrement = () => {
    setCount((prev) => (prev > 0 ? prev -1 : 0));
  };

  const SetCounter = () => {
    setCount(0);
  };

  return (
    <>
      <div>
        <button onClick={Decrement}>-</button>
        {count}
        <button onClick={Increment}>+</button>
        <br />
        <button onClick={SetCounter}>Сбросить</button>
      </div>
    </>
  );
}

export default App;
