import { useNavigate } from "react-router-dom";
import type { IMovieModel } from "../../models/IMovieModel.ts";
import { RatingStars } from "../StarsRating/starsRating.tsx";
import css from "./movie-list-card.module.css";
import PosterPreview from "../PosterPreview/PosterPreview.tsx";

type Props = {
    movie: IMovieModel;
};

export const MovieListCard = ({ movie }: Props) => {
    const navigate = useNavigate();

    const year = movie.release_date?.slice(0, 4) ?? "—";

    return (
        <div
            className={css.card}
            onClick={() => navigate(`/movie/${movie.id}`)}
            title="Відкрити деталі"
        >
            <PosterPreview path={movie.poster_path} title={movie.title} size="w342" />
            <div className={css.info}>
                <h4 className={css.title}>{movie.title}</h4>
                <p className={css.year}>{year}</p>
                <div className={css.rating}>
                    <RatingStars rating={movie.vote_average} />
                </div>
            </div>
        </div>
    );
};
