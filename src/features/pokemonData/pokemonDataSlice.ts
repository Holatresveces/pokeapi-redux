import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction, AsyncThunk } from "@reduxjs/toolkit";

export type PokemonData = {
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

type PokemonDetailState = {
  data: PokemonData;
  status: "idle" | "loading" | "success" | "failed";
  error: string;
};

const initialState: PokemonDetailState = {
  data: null,
  status: "idle",
  error: "",
};

const getPokemonDetailDataByName = createNamedAsyncThunk(
  "pokemonDetail/getPokemonDetailDataByName"
);
const getPokemonDisplayDataByName = createNamedAsyncThunk(
  "pokemonDisplay/getPokemonDisplayDataByName"
);

const pokemonDetailReducer = createNamedSlice(
  "pokemonDetail",
  getPokemonDetailDataByName
).reducer;

const pokemonDisplayReducer = createNamedSlice(
  "pokemonDisplay",
  getPokemonDisplayDataByName
).reducer;

function createNamedSlice(
  sliceName: string,
  thunk: AsyncThunk<PokemonData, string, { rejectValue: string }>
) {
  return createSlice({
    name: sliceName,
    initialState: { ...initialState },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(thunk.pending, (state) => {
          state.status = "loading";
        })
        .addCase(
          thunk.fulfilled,
          (state, action: PayloadAction<PokemonData>) => {
            state.data = action.payload;
            state.status = "success";
            state.error = "";
          }
        )
        .addCase(thunk.rejected, (state, action: { payload: string }) => {
          state.status = "failed";
          state.error = action.payload;
        });
    },
  });
}

function createNamedAsyncThunk(thunkName: string) {
  return createAsyncThunk<PokemonData, string, { rejectValue: string }>(
    thunkName,
    async (pokemonName: string, thunkApi) => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
        );
        const data = response.data;
        return data as PokemonData;
      } catch (e) {
        // TODO: Handle Axios errors
        throw thunkApi.rejectWithValue("Error");
      }
    }
  );
}

export {
  pokemonDetailReducer,
  pokemonDisplayReducer,
  getPokemonDetailDataByName,
  getPokemonDisplayDataByName,
};
