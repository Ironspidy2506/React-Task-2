import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  };

  const subtractValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Count Value: {count} </h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={subtractValue}>Subtract Value</button>
    </>
  );
}

export default App;
