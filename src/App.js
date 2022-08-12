// import './App.css';
import { Route, Routes } from "react-router";
import CharCounter from "./Components/CharCounter";
import Grid from "./Components/Grid";
import NavBar from "./Components/NavBar";


function App() {


  return (
    <div>
      <NavBar />

    <Routes>

      <Route path="/" element={<Grid />} />
      <Route path="/charcounter" element={<CharCounter />} />

    </Routes>


    </div>
  );
}

export default App;
