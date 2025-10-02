import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice";
import genresSlice from "./slices/genresSlice";
import movieDetailsSlice from "./slices/movieDetailsSlice";
import { useDispatch, useSelector} from "react-redux";



export const store = configureStore({
    reducer: {
        moviesStore: moviesSlice.reducer,
        genresStore: genresSlice.reducer,
        movieDetailsStore: movieDetailsSlice.reducer,
    },
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
