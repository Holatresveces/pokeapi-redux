import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type PokemonDetailState = {
  data: PokemonDetail;
};

type PokemonDetail = {
  name: string;
  number: number;
  height: number;
  weight: number;
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }>;
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }>;
  sprites: {
    versions: {
      "generation-iv": {
        "diamond-pearl": {
          front_default: string;
        };
      };
    };
  };
};

const initialState: PokemonDetailState = {
  data: null,
};

const pokemonsSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonDataByName.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const getPokemonDataByName = createAsyncThunk(
  "pokemon/getPokemonDataByName",
  async (name: string) => {
    console.log("inside getPokemonDataByName");
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}/`
    );
    const data = response.data;
    return data as PokemonDetail;
  }
);

export default pokemonsSlice.reducer;
