import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { movieDetailsActions } from "../../redux/slices/movieDetailsSlice";
import { RatingStars } from "../StarsRating/starsRating";
import PosterPreview from "../PosterPreview/PosterPreview";
import css from "./movie-info.module.css";

export const MovieInfo = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const movie = useAppSelector((s) => s.movieDetailsStore.movie);

    useEffect(() => {
        if (id) dispatch(movieDetailsActions.loadMovieById(Number(id)));
    }, [id, dispatch]);

    if (!movie) {
        return (
            <div className={css.container}>
                <button onClick={() => navigate(-1)} className={css.back}>
                    Назад
                </button>

                <div className={css.loading}>Завантаження…</div>
            </div>
        );
    }

    const year = movie.release_date?.slice(0, 4) ?? "—";

    return (
        <div className={css.container}>
            <button onClick={() => navigate(-1)} className={css.back}>
                Назад
            </button>

            <div className={css.grid}>
                <div>
                    <PosterPreview
                        path={movie.poster_path}
                        title={movie.title}
                        size="w500"
                        variant="details"
                    />
                </div>

                <div>
                    <h1 className={css.title}>
                        {movie.title} <small>({year})</small>
                    </h1>

                    <div className={css.block}>
                        <b>Рейтинг:</b> <RatingStars rating={movie.vote_average} />
                    </div>

                    <div className={css.block}>
                        <b>Жанри:</b> {movie.genres?.map((g) => g.name).join(", ") || "—"}
                    </div>

                    <p className={css.overview}>{movie.overview || "Опис відсутній."}</p>
                </div>
            </div>
        </div>
    );
};
