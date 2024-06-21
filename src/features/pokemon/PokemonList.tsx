import { useEffect } from "react";
import { fetchPokemon } from "./pokemonSlice";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

const PokemonsList = () => {
  const pokemonListItems = useAppSelector(
    (state) => state.pokemon.pokemonListItems
  );

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

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
    </div>
  );
};

export default PokemonsList;
