import { configureStore } from "@reduxjs/toolkit";
import pokemonListReducer from "../features/pokemonList/pokemonListSlice";
import {
  pokemonDetailReducer,
  pokemonDisplayReducer,
} from "../features/pokemonData/pokemonDataSlice";

export const store = configureStore({
  reducer: {
    pokemonList: pokemonListReducer,
    pokemonDetail: pokemonDetailReducer,
    pokemonDisplay: pokemonDisplayReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
