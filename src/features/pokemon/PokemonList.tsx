import { useState, useEffect } from "react";
import { MAX_PAGE_NUMBER, fetchPokemon } from "./pokemonListSlice";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

const PokemonsList = () => {
  const [page, setPage] = useState(0);
  const pokemonListState = useAppSelector((state) => state.pokemonList);
  const pokemonListItems = pokemonListState.data;

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemon(page));
  }, [dispatch, page]);

  return (
    <div className="pokemon-list">
      <ul>
        {pokemonListItems.map((pokemon) => {
          return (
            <li
              onDoubleClick={() => {
                navigate(`/pokemon/${pokemon.name}`);
              }}
              key={pokemon.name}
            >
              {pokemon.name}
            </li>
          );
        })}
      </ul>
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
  );
};

export default PokemonsList;
