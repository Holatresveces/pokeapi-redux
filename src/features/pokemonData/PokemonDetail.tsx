import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getPokemonDetailDataByName } from "./pokemonDataSlice";
import PokemonDisplay from "./PokemonDisplay";

const SinglePokemon = () => {
  const { pokemonName } = useParams();
  const pokemonDetailData = useAppSelector((state) => state?.pokemonDetail?.data);
  const types = pokemonDetailData?.types;
  const stats = pokemonDetailData?.stats;
  const abilities = pokemonDetailData?.abilities;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemonDetailDataByName(pokemonName));
  }, [dispatch, pokemonName]);

  if (!pokemonDetailData) return null;

  return (
    <div>
      <PokemonDisplay pokemonData={pokemonDetailData} />
      <div>
        <div>
          <span>Type</span>
          <div>
            {types?.map((typeData) => (
              <span key={typeData?.type?.name}>{typeData?.type?.name}</span>
            ))}
          </div>
        </div>
        <div>
          {stats?.map((statData) => (
            <div key={statData?.stat?.name}>
              <span>{statData?.stat?.name}</span>
              <span>{statData?.base_stat}</span>
            </div>
          ))}
        </div>
        <div>
          Abilities
          <ul>
            {abilities.map((abilityData) => (
              <li key={abilityData?.ability?.name}>{abilityData?.ability?.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SinglePokemon;
