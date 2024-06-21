import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "./pokemonSlice";
import { useNavigate } from "react-router-dom";

const PokemonsList = () => {
  const pokemonListItems = useSelector(
    (state) => state.pokemon.pokemonListItems
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

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
