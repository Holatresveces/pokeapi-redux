import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const MAX_ITEMS_COUNT = 150;
const ITEMS_PER_PAGE = 20;
export const MAX_PAGE_NUMBER = Math.floor(MAX_ITEMS_COUNT / ITEMS_PER_PAGE);

type PokemonListItem = { name: string; url: string };
type PokemonListState = {
  data: Array<PokemonListItem>;
};

const initialState: PokemonListState = {
  data: []
};

const pokemonsSlice = createSlice({
  name: "pokemonList",
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
  "pokemonList/fetchPokemon",
  async (page: number) => {
    const limit = page < MAX_PAGE_NUMBER ? ITEMS_PER_PAGE : MAX_ITEMS_COUNT % ITEMS_PER_PAGE;

    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${
        page * ITEMS_PER_PAGE
      }`
    );
    const results = response.data.results;
    return results as Array<PokemonListItem>;
  }
);

export default pokemonsSlice.reducer;
