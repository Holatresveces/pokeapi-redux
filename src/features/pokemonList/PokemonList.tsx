import { useState, useEffect } from "react";
import { MAX_PAGE_NUMBER, fetchPokemon } from "./pokemonListSlice";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import PokemonDisplay from "../pokemonData/PokemonDisplay";
import { getPokemonDisplayDataByName } from "../pokemonData/pokemonDataSlice";

const PokemonsList = () => {
  const [page, setPage] = useState(0);
  const pokemonListState = useAppSelector((state) => state?.pokemonList);
  const pokemonDisplayState = useAppSelector((state) => state?.pokemonDisplay);

  const pokemonListItems = pokemonListState?.data;
  const pokemonDisplayData = pokemonDisplayState?.data;

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemon(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (pokemonDisplayData) return;
    dispatch(getPokemonDisplayDataByName("pikachu"));
  }, [dispatch, pokemonDisplayData]);

  return (
    <div>
      <div>
        {pokemonDisplayState?.status === "loading" ? (
          "Loading"
        ) : (
          <PokemonDisplay pokemonData={pokemonDisplayData} />
        )}
      </div>
      <div>
        {pokemonListState?.status === "loading" ? (
          "Loading"
        ) : (
          <ul>
            {pokemonListItems.map((pokemon) => {
              return (
                <li
                  onClick={() => {
                    dispatch(getPokemonDisplayDataByName(pokemon?.name));
                  }}
                  onDoubleClick={() => {
                    navigate(`/pokemon/${pokemon?.name}`);
                  }}
                  key={pokemon?.name}
                >
                  {pokemon?.name}
                </li>
              );
            })}
          </ul>
        )}
        <div>
          <button disabled={page < 1} onClick={() => setPage(page - 1)}>
            Previous
          </button>
          <button
            disabled={page >= MAX_PAGE_NUMBER}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonsList;
