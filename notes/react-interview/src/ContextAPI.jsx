import React, { useContext } from "react";

const MyContext = React.createContext();

export default function App() {
  return (
    <MyContext.Provider value={{ name: "John" }}>
      <ChildCompoent />
    </MyContext.Provider>
  );
}

function ChildCompoent() {
  const context = useContext(MyContext);
  return <div>{context.name}</div>;
}
