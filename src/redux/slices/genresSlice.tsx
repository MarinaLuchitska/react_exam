// src/redux/slices/genresSlice.ts
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { apiGet } from "../../services/api.service";
import type { IGenreModel } from "../../models/IGenreModel";

type GenresSliceState = {
    genres: IGenreModel[];
    selectedGenreId: number | null; // null = All
};

const initState: GenresSliceState = {
    genres: [],
    selectedGenreId: null,
};

// thunk для завантаження жанрів
export const loadGenres = createAsyncThunk(
    "genres/loadGenres",
    async () => {
        const data = await apiGet<{ genres: IGenreModel[] }>("/genre/movie/list");
        return data.genres;
    }
);

export const genresSlice = createSlice({
    name: "genres",
    initialState: initState,
    reducers: {
        setSelectedGenreId(state, action: PayloadAction<number | null>) {
            state.selectedGenreId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
        });
    },
});

// дії
export const genresActions = { ...genresSlice.actions, loadGenres };
export const { setSelectedGenreId } = genresSlice.actions;

// дефолт — slice (як у moviesSlice)
export default genresSlice;
