// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice";
import genresSlice from "./slices/genresSlice";
import movieDetailsSlice from "./slices/movieDetailsSlice";
import { useDispatch, useSelector} from "react-redux";
import configSlice from "./slices/configSlice.tsx";

export const store = configureStore({
    reducer: {
        moviesStore: moviesSlice.reducer,
        genresStore: genresSlice.reducer,
        movieDetailsStore: movieDetailsSlice.reducer,
        configStore: configSlice.reducer,
    },
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
