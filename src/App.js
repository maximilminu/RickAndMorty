import { Route, Routes } from "react-router";
import CharCounter from "./Components/CharCounter";
import EpisodeCounter from "./Components/EpisodeCounter";
import Footer from "./Components/Footer";
import Grid from "./Components/Grid";
import NavBar from "./Components/NavBar";


function App() {


  return (
    <div>
      <NavBar />

    <Routes>

      <Route path="/" element={<Grid />} />
      <Route path="/charcounter" element={<CharCounter />} />
      <Route path="/episodes" element={<EpisodeCounter />} />

    </Routes>

    <Footer />
    </div>
  );
}

export default App;
