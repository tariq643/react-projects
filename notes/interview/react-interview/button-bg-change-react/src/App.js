import React, { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("white");

  const generateRandomNumber = () => {
    let randomStr = "#";
    for (let index = 0; index < 6; index++) {
      const randomNum = Math.floor(Math.random() * 16);
      randomStr = randomStr + randomNum;
    }
    setBgColor(randomStr);
  };

  return (
    <div style={{ backgroundColor: bgColor }}>
      <button onClick={() => generateRandomNumber()}>
        Click to generate random color
      </button>
    </div>
  );
}

export default App;
