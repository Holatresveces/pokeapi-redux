import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type PokemonListItem = { name: string; url: string };
type PokemonListState = {
  data: Array<PokemonListItem>;
};

const initialState: PokemonListState = {
  data: [],
};

const pokemonsSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchPokemon.fulfilled,
      (state, action: PayloadAction<Array<PokemonListItem>>) => {
        state.data = action.payload;
      }
    );
  },
});

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=15"
    );
    const results = response.data.results;
    return results as Array<PokemonListItem>;
  }
);

export default pokemonsSlice.reducer;
