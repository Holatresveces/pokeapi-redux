import "./App.css";
import PokemonList from "./features/pokemonList/PokemonList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonDetail from "./features/pokemonDetail/PokemonDetail";

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
