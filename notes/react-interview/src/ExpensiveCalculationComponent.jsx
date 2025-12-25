import React, { useState, useMemo } from "react";

function ExpensiveCalculationComponent() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  const expensiveCalculation = (num) => {
    console.log("Calculating ....");
    return num * 2;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(number), [number]);

  return <></>;
}

export default ExpensiveCalculationComponent;
