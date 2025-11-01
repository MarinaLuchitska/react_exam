import css from "./RatingStars.module.css";

type Props = {
    rating: number;
};

export const RatingStars = ({ rating }: Props) => {
    const filledStars = Math.round(rating); // скільки заповнених
    const stars = Array.from({ length: 10 }, (_, i) => i < filledStars);

    return (
        <div className={css.stars}>
            {stars.map((isFilled, i) => (
                <span key={i} className={isFilled ? css.filled : css.empty}>★</span>
            ))}
        </div>
    );
};
