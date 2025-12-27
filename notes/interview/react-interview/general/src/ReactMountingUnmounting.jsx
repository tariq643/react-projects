import React, { useState, useEffect } from "react";

// simulating mounting
const ComponentDidMount = () => {
  useEffect(() => {
    console.log("Component mounted");
  }, []);
};

// simulating did update
const ComponentDidUpdate = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Component updated, count ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}> Increment</button>
    </div>
  );
};

// simulating did unmount
const ComponentDidUnmount = () => {
  useEffect(() => {
    console.log(`Component unmounted`);

    return () => console.log(`Component unmounted`);
  }, []);

  return <div>Component will unmount</div>;
};
