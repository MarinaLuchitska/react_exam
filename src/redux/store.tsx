import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/MoviesSlice.tsx";
import genresSlice from "./slices/GenresSlice.tsx";
import movieDetailsSlice from "./slices/MovieDetailsSlice.tsx";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
    reducer: {
        moviesStore: moviesSlice.reducer,
        genresStore: genresSlice.reducer,
        movieDetailsStore: movieDetailsSlice.reducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
