import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button className="border" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="border" onClick={() => setCount(count - 1)}>-</button>
      <button className="border" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default Counter;