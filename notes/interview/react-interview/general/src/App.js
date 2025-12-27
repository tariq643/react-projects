function App() {
  const items = ["a1", "b2", "c3"];

  return (
    <div className="App">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default App;
