import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokemonListItems: [],
};

const pokemonsSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.pokemonListItems = action.payload;
    });
  },
});

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=15"
    );
    const results = response.data.results;
    return results;
  }
);

export default pokemonsSlice.reducer;
