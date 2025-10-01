// src/redux/slices/moviesSlice.ts
import { createAsyncThunk, createSlice,type PayloadAction } from "@reduxjs/toolkit";
import { apiGet } from "../../services/api.service";
import type { IMovieModel } from "../../models/IMovieModel";
import type { Paginated } from "../../models/IPaginated";

type Args = { page?: number; query?: string; genreId?: number | null };

type MoviesSliceState = {
    movies: IMovieModel[];
    page: number;
    totalPages: number;
};

const initState: MoviesSliceState = {
    movies: [],
    page: 1,
    totalPages: 1,
};

export const loadMovies = createAsyncThunk(
    "movies/loadMovies",
    async ({ page = 1, query = "", genreId = null }: Args) => {
        const isSearch = query.trim().length > 0;

        const res = await apiGet<Paginated<IMovieModel>>(
            isSearch ? "/search/movie" : "/discover/movie",
            {
                page,
                query: isSearch ? query : undefined,
                with_genres: !isSearch && genreId ? genreId : undefined,
                include_adult: false,
            }
        );

        return { data: res, page };
    }
);

export const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState: initState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            loadMovies.fulfilled,
            (state, action: PayloadAction<{ data: Paginated<IMovieModel>; page: number }>) => {
                state.movies = action.payload.data.results;
                state.page = action.payload.page;
                state.totalPages = action.payload.data.total_pages ?? 1;
            }
        );
    },
});

export const { setPage } = moviesSlice.actions;
export const moviesActions = { ...moviesSlice.actions, loadMovies };
export default moviesSlice;
