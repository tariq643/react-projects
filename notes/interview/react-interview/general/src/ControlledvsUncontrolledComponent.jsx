import React, { useState, useRef } from "react";

function ControlledComponent() {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

// component manages its own state.you can access it using a ref but not directly ...
// not managed by react
function UncontrolledComponent() {
  const inputRef = useRef();
  const handleSubmit = () => {
    alert(inputRef.current.value);
  };
  return (
    <div>
      <button onClick={() => handleSubmit}></button>
    </div>
  );
}
