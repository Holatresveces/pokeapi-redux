import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getPokemonDataByName } from "./pokemonDetailSlice";
import PokemonDisplay from "./PokemonDisplay";

const SinglePokemon = () => {
  const { pokemonName } = useParams();
  const pokemonDetail = useAppSelector((state) => state.pokemonDetail.data);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemonDataByName(pokemonName));
  }, [dispatch, pokemonName]);

  if (!pokemonDetail) return null;

  return (
    <div>
      <PokemonDisplay pokemonData={pokemonDetail} />
      <div>
        <div>
          <span>Type</span>
          <div>
            {pokemonDetail.types.map((typeData) => (
              <span key={typeData.type.name}>{typeData.type.name}</span>
            ))}
          </div>
        </div>
        <div>
          {pokemonDetail.stats.map((statData) => (
            <div key={statData.stat.name}>
              <span>{statData.stat.name}</span>
              <span>{statData.base_stat}</span>
            </div>
          ))}
        </div>
        <div>
          Abilities
          <ul>
            {pokemonDetail.abilities.map((abilityData) => (
              <li key={abilityData.ability.name}>{abilityData.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SinglePokemon;
