import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getPokemonDetailDataByName } from "./pokemonDataSlice";
import PokemonDisplay from "./PokemonDisplay";
import { capitalize } from "../../utils";
import Skeleton from "../../components/Skeleton";
import PokemonDetailSkeleton from "./PokemonDetailSkeleton";
import PokemonDisplaySkeleton from "./PokemonDisplaySkeleton";

const SinglePokemon = () => {
  const navigate = useNavigate();
  const { pokemonName } = useParams();

  const state = useAppSelector((state) => state);

  const pokemonDetailState = state?.pokemonDetail;
  const pokemonDetailData = state?.pokemonDetail?.data;
  const types = pokemonDetailData?.types;
  const stats = pokemonDetailData?.stats;
  const abilities = pokemonDetailData?.abilities;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemonDetailDataByName(pokemonName));
  }, [dispatch, pokemonName]);

  return (
    <div className="md:flex md:space-x-10">
      <div className="md:w-1/3 md:h-screen md:shadow-xl md:overflow-hidden">
        <Skeleton
          on={pokemonDetailState?.status === "loading"}
          skeleton={PokemonDisplaySkeleton}
        >
          <PokemonDisplay pokemonData={pokemonDetailData} />
        </Skeleton>
      </div>
      <div className="md:w-2/3 md:h-screen md:overflow-y-scroll">
        <Skeleton
          on={pokemonDetailState?.status === "loading"}
          skeleton={PokemonDetailSkeleton}
        >
          <div>
            <button
              className="border rounded-md p-3"
              onClick={() => navigate(-1)}
            >
              Go back
            </button>
            <div className="font-semibold mt-10 flex flex-col space-y-8">
              <div className="text-center">
                <div className="mb-4">Type</div>
                <div className="flex space-x-8 justify-center">
                  {types?.map((typeData) => {
                    const typeName = typeData?.type?.name;

                    return <span key={typeName}>{capitalize(typeName)}</span>;
                  })}
                </div>
              </div>
              <div className="flex justify-center flex-wrap">
                <div className="px-8">Number: {pokemonDetailData?.id}</div>
                <div className="px-8">
                  Name: {capitalize(pokemonDetailData?.name)}
                </div>
                <div className="px-8">Height: {pokemonDetailData?.height}</div>
                <div className="px-8">Weight: {pokemonDetailData?.weight}</div>
              </div>
              <div className="flex flex-wrap">
                <div className="md:w-1/2 flex-1 mb-8">
                  <span>Stats</span>
                  {stats?.map((statData) => {
                    return (
                      <div
                        key={statData?.stat?.name}
                        className="flex justify-between"
                      >
                        <div>
                          <span>{capitalize(statData?.stat?.name)}</span>
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
                <div className="md:w-1/2 flex-1 flex flex-col items-center text-center">
                  <span>Abilities</span>
                  <ul>
                    {abilities?.map((abilityData) => {
                      const abilityName = abilityData?.ability?.name;

                      return (
                        <li key={abilityName}>{capitalize(abilityName)}</li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Skeleton>
      </div>
    </div>
  );
};

export default SinglePokemon;
