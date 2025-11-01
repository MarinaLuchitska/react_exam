import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store.tsx";
import { moviesActions } from "../../redux/slices/MoviesSlice.tsx";
import { genresActions } from "../../redux/slices/GenresSlice.tsx";
import { MovieListCard } from "../MoviesListCard/MovieListCards.tsx";
import css from "./MoviesList.module.css";

export const MoviesList = () => {
    const [sp] = useSearchParams({ page: "1" });
    const page = Number(sp.get("page") ?? "1");
    const query = sp.get("q") ?? "";

    const dispatch = useAppDispatch();

    const movies = useAppSelector(s => s.moviesStore.movies);
    const genres = useAppSelector(s => s.genresStore.genres);
    const selectedGenreId = useAppSelector(s => s.genresStore.selectedGenreId);

    useEffect(() => {
        dispatch(moviesActions.loadMovies({ page, query, genreId: selectedGenreId ?? undefined }));
    }, [dispatch, page, query, selectedGenreId]);

    useEffect(() => {
        if (!genres.length) dispatch(genresActions.loadGenres());
    }, [dispatch, genres.length]);

    return (
        <div className={css.container}>
            {movies.map(m => (<MovieListCard key={m.id} movie={m} />
            ))}
        </div>
    );
};