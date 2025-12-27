import React from "react";

export default function Parent() {
  const handleData = (data) => {
    console.log(data);
  };
  return <Child onSendData={handleData} />;
}

function Child({ onSendData }) {
  return <button onClick={() => onSendData("Hello Parent!")}>Send Data</button>;
}
