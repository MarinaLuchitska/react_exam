import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { loadGenres, setSelectedGenreId } from "../../redux/slices/GenresSlice.tsx";
import { loadMovies } from "../../redux/slices/MoviesSlice.tsx";
import css from "./GenresFilter.module.css";

const GenresFilter = () => {
    const dispatch = useAppDispatch();
    const setSearchParams = useSearchParams()[1];

    const genres = useAppSelector(s => s.genresStore.genres);
    const selected = useAppSelector(s => s.genresStore.selectedGenreId);

    useEffect(() => {
        if (!genres?.length) {
            dispatch(loadGenres());
        }
    }, [dispatch, genres?.length]);

    const handleClick = (id: number | null) => {
        dispatch(setSelectedGenreId(id));
        setSearchParams(prev => {
            const q = new URLSearchParams(prev);
            q.set("page", "1");
            return q;
        });
        dispatch(loadMovies({ page: 1, genreId: id ?? undefined }));
    };

    return (
        <div className={css.bar}>
            <div className={css.track}>
                <button
                    type="button"
                    onClick={() => handleClick(null)}
                    className={`${css.pill} ${selected === null ? css.active : ""}`}
                >
                    <span className={css.dot} />
                    All
                </button>

                {genres?.map(g => (
                    <button
                        key={g.id}
                        type="button"
                        onClick={() => handleClick(g.id)}
                        className={`${css.pill} ${selected === g.id ? css.active : ""}`}
                    >
                        <span className={css.dot} />
                        {g.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default GenresFilter;
