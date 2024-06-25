import { useEffect } from "react";
import { MAX_PAGE_NUMBER, fetchPokemon } from "./pokemonListSlice";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import PokemonDisplay from "../pokemonData/PokemonDisplay";
import { getPokemonDisplayDataByName } from "../pokemonData/pokemonDataSlice";
import pokeball from "../../assets/pokeball.png";
import { capitalize } from "../../utils";
import { goToPage } from "./pokemonListSlice";
import Skeleton from "../../components/Skeleton";
import PokemonListSkeleton from "./PokemonListSkeleton";
import PokemonDisplaySkeleton from "../pokemonData/PokemonDisplaySkeleton";

const PokemonList = () => {
  const state = useAppSelector((state) => state);
  const pokemonListState = state?.pokemonList;
  const pokemonDisplayState = state?.pokemonDisplay;

  const currentPage = pokemonListState?.currentPage;
  const pokemonListItems = pokemonListState?.data;
  const pokemonDisplayData = pokemonDisplayState?.data;

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemon(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (pokemonDisplayData) return;
    dispatch(getPokemonDisplayDataByName("pikachu"));
  }, [dispatch, pokemonDisplayData]);

  const isPrevButtonDisabled = currentPage < 1;
  const isNextButtonDisabled = currentPage >= MAX_PAGE_NUMBER;

  return (
    <div className="flex space-x-10">
      <div className="w-1/3 h-screen shadow-xl overflow-hidden">
        <Skeleton
          on={pokemonDisplayState?.status === "loading"}
          skeleton={PokemonDisplaySkeleton}
        >
          <PokemonDisplay pokemonData={pokemonDisplayData} />
        </Skeleton>
      </div>
      <div className="w-2/3 h-screen overflow-y-scroll">
        <Skeleton
          on={pokemonListState?.status === "loading"}
          skeleton={PokemonListSkeleton}
        >
          <ol className="flex flex-col space-y-1 text-sm">
            {pokemonListItems.map((pokemon) => {
              return (
                <li
                  className="px-4 py-2 rounded-lg shadow flex items-center justify-between cursor-pointer"
                  onClick={() => {
                    dispatch(getPokemonDisplayDataByName(pokemon?.name));
                  }}
                  onDoubleClick={() => {
                    navigate(`/pokemon/${pokemon?.name}`);
                  }}
                  key={pokemon?.name}
                >
                  <span>{capitalize(pokemon?.name)}</span>
                  <img className="w-4" src={pokeball} alt="Pokéball" />
                </li>
              );
            })}
          </ol>
          <div className="flex justify-center space-x-10 py-5">
            {!isPrevButtonDisabled && (
              <button
                className="border rounded-md p-3"
                disabled={currentPage < 1}
                onClick={() => dispatch(goToPage(currentPage - 1))}
              >
                Previous
              </button>
            )}
            {!isNextButtonDisabled && (
              <button
                className="border rounded-md p-3"
                disabled={currentPage >= MAX_PAGE_NUMBER}
                onClick={() => dispatch(goToPage(currentPage + 1))}
              >
                Next
              </button>
            )}
          </div>
        </Skeleton>
      </div>
    </div>
  );
};

export default PokemonList;
