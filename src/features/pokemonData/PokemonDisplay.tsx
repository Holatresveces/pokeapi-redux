import logo from "../../assets/logo.png";
import type { PokemonData } from "./pokemonDataSlice";

type PokemonDisplayProps = {
  pokemonData: PokemonData;
};

function PokemonDisplay({ pokemonData }: PokemonDisplayProps) {
  const pokemonName = pokemonData?.name;
  const imageUrl = pokemonData?.sprites?.versions?.["generation-iv"]?.["diamond-pearl"]?.front_default;

  return (
    <div>
      <img src={logo} alt="PokéAPI Logo" />
      <img src={imageUrl} alt={pokemonName} />
    </div>
  );
}

export default PokemonDisplay;
