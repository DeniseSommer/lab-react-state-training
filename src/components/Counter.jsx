import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-3 border border-primary w-25 text-center">
      <button
        className="btn btn-primary m-2"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      {count}
      <button
        className="btn btn-primary m-2"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
