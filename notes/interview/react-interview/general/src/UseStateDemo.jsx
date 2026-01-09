import React, { useState } from "react";

export default function UseStateDemo() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <p>You have clicked {count} times.</p>
        <button onClick={() => setCount(count + 1)}>
          Click to increase count
        </button>
      </div>
    </>
  );
}
