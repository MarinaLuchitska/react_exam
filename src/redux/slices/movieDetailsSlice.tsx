import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { apiGet} from "../../services/api.service.tsx";
import type { IFullMovieModel} from "../../models/IFullMovieModel.ts";

type DetailsSliceState = { movie: IFullMovieModel | null };
const initState: DetailsSliceState = { movie: null };

export const loadMovieById = createAsyncThunk("loadMovieById",
    async (id: number, thunkAPI) => {
        const movie = await apiGet<IFullMovieModel>(`/movie/${id}`);
        return thunkAPI.fulfillWithValue(movie);
    }
);

export const movieDetailsSlice = createSlice({
    name: "movieDetailsSlice",
    initialState: initState,
    reducers: {},
    extraReducers: (b) =>
        b.addCase(loadMovieById.fulfilled, (state, action: PayloadAction<IFullMovieModel>) => {
            state.movie = action.payload;
        }),
});

export const movieDetailsActions = { ...movieDetailsSlice.actions, loadMovieById };
export default movieDetailsSlice;
