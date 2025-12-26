import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        setData(response.data.punchline);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{data}</h2>
    </div>
  );
}
