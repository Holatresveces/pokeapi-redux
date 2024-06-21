import "./App.css";
import PokemonList from "./features/pokemon/PokemonList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePokemon from "./features/pokemon/SinglePokemon";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:pokemonName" element={<SinglePokemon />} />
      </Routes>
    </Router>
  );
}

export default App;
