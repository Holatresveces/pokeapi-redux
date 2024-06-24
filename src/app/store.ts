import { configureStore } from "@reduxjs/toolkit";
import pokemonListSlice from "../features/pokemonList/pokemonListSlice";
import pokemonDetailSlice from "../features/pokemonDetail/pokemonDetailSlice";

export const store = configureStore({
  reducer: {
    pokemonList: pokemonListSlice,
    pokemonDetail: pokemonDetailSlice
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
