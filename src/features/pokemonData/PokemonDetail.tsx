import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getPokemonDetailDataByName } from "./pokemonDataSlice";
import PokemonDisplay from "./PokemonDisplay";

const SinglePokemon = () => {
  const { pokemonName } = useParams();
  const pokemonDetailData = useAppSelector(
    (state) => state?.pokemonDetail?.data
  );
  const types = pokemonDetailData?.types;
  const stats = pokemonDetailData?.stats;
  const abilities = pokemonDetailData?.abilities;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemonDetailDataByName(pokemonName));
  }, [dispatch, pokemonName]);

  if (!pokemonDetailData) return null;

  return (
    <div className="flex space-x-10">
      <div className="w-1/3 h-screen shadow-xl overflow-hidden">
        <PokemonDisplay pokemonData={pokemonDetailData} />
      </div>
      <div className="w-2/3 h-screen overflow-y-scroll">
        <button className="border rounded-md p-3">Go back</button>
        <div className="font-semibold mt-10 flex flex-col space-y-8">
          <div className="text-center">
            <div className="mb-4">Type</div>
            <div className="flex space-x-8 justify-center">
              {types?.map((typeData) => (
                <span key={typeData?.type?.name}>{typeData?.type?.name}</span>
              ))}
            </div>
          </div>
          <div className="flex space-x-16 justify-center">
            <span>Number: {pokemonDetailData?.id}</span>
            <span>Name: {pokemonDetailData?.name}</span>
            <span>Height: {pokemonDetailData?.height}</span>
            <span>Weight: {pokemonDetailData?.weight}</span>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <span>Stats</span>
              {stats?.map((statData) => {
                return (
                  <div
                    key={statData?.stat?.name}
                    className="flex justify-between"
                  >
                    <div>
                      <span>{statData?.stat?.name}</span>
                    </div>
                    <div className="flex items-center">
                      <span>{statData?.base_stat}</span>
                      <span className="inline-block w-40 h-5 bg-neutral-300 rounded-xl overflow-hidden">
                        <span
                          style={{ width: `${statData?.base_stat}%` }}
                          className="block h-full bg-red-600"
                        ></span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-1/2 text-center">
              <span>Abilities</span>
              <ul>
                {abilities?.map((abilityData) => (
                  <li key={abilityData?.ability?.name}>
                    {abilityData?.ability?.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePokemon;
