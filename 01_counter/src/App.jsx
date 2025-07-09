import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    if (count >= 10) {
      setCount(10);
      return;
    }
    setCount(count + 1);
  };

  const remValue = () => {
    if (count <= 0) {
      setCount(0);
      return;
    }
    setCount(count - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <p>Counter Value: {count}</p>
      <button onClick={addValue}>Add Value</button>
      <button onClick={remValue}>Remove Value</button>
    </>
  );
}

function NameForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>
    </div>
  );
}

export default App;
export { NameForm };
