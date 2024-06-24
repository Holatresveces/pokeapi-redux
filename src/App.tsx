import "./App.css";
import PokemonList from "./features/pokemon/PokemonList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonDetail from "./features/pokemon/PokemonDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:pokemonName" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
