import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const MAX_ITEMS_COUNT = 150;
const ITEMS_PER_PAGE = 20;
export const MAX_PAGE_NUMBER = Math.floor(MAX_ITEMS_COUNT / ITEMS_PER_PAGE);

type PokemonListItem = { name: string; url: string };
type PokemonListState = {
  data: Array<PokemonListItem>;
  status: "idle" | "loading" | "success" | "failed";
  error: string;
  currentPage: number;
};

const initialState: PokemonListState = {
  data: [],
  status: "idle",
  error: "",
  currentPage: 0,
};

const pokemonListSlice = createSlice({
  name: "pokemonList",
  initialState,
  reducers: {
    goToPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchPokemon.fulfilled,
        (state, action: PayloadAction<Array<PokemonListItem>>) => {
          state.status = "success";
          state.data = action.payload;
        }
      )
      .addCase(fetchPokemon.rejected, (state, action: { payload: string }) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const fetchPokemon = createAsyncThunk<
  Array<PokemonListItem>,
  number,
  { rejectValue: string }
>("pokemonList/fetchPokemon", async (page: number, thunkApi) => {
  try {
    const limit =
      page < MAX_PAGE_NUMBER
        ? ITEMS_PER_PAGE
        : MAX_ITEMS_COUNT % ITEMS_PER_PAGE;

    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${
        page * ITEMS_PER_PAGE
      }`
    );
    const results = response.data.results;
    return results as Array<PokemonListItem>;
  } catch (e) {
    // TODO: Handle Axios errors
    throw thunkApi.rejectWithValue("Error");
  }
});

export const { goToPage } = pokemonListSlice.actions;

export default pokemonListSlice.reducer;
