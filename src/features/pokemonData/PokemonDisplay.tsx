import logo from "../../assets/logo.png";
import type { PokemonData } from "./pokemonDataSlice";

type PokemonDisplayProps = {
  pokemonData: PokemonData;
};

function PokemonDisplay({ pokemonData }: PokemonDisplayProps) {
  const pokemonName = pokemonData?.name;
  const imageUrl =
    pokemonData?.sprites?.versions?.["generation-iv"]?.["diamond-pearl"]
      ?.front_default;

  return (
    <div className="h-full flex flex-col items-center">
      <img className="py-20" src={logo} alt="PokéAPI Logo" />
      <img className="w-60 my-20" src={imageUrl} alt={pokemonName} />
    </div>
  );
}

export default PokemonDisplay;
