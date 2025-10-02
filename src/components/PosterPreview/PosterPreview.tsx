import { getPosterUrl} from "../../services/poster.service.ts";
import "./poster-preview.css";

type PosterPreviewProps = {
    path?: string | null;
    title: string;
    size?: string;
    variant?: "card" | "details";
};

const PosterPreview = ({ path, title, size = "w500", variant = "card" }: PosterPreviewProps) => {
    const src = getPosterUrl(path, size);

    return (
        <img
            className={variant === "details" ? "poster-details" : "poster-card"}
            src={src}
            alt={title}
            loading="lazy"
            onError={(e) => (e.currentTarget.src = "/assets/no-poster.png")}
        />
    );
};

export default PosterPreview;
