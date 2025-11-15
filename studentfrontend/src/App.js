import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import DisplayStudent from "./components/DisplayStudent";
import Student from "./components/Student";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Student />
      <DisplayStudent />
    </div>
  );
}

export default App;
