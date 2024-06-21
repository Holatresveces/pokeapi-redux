import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SinglePokemon = (props) => {
  let { pokemonName } = useParams();

  const fetchSinglePokemon = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
    );
    console.log("response", response);
  };

  useEffect(() => {
    fetchSinglePokemon();
  }, []);

  return <div>This is a single pokemon component</div>;
};

export default SinglePokemon;
