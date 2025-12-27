import React from "react";

function App() {
  const items = ["a1", "b2", "c3"];
  return (
    <div>
      <ul>
        {items.map((item, index) => {
          <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
