import { useState, useMemo } from "react";
import css from "./poster-preview.module.css";

type PosterSize = "w92" | "w154" | "w185" | "w342" | "w500" | "w780" | "original";

type Props = {
    path?: string | null;
    title: string;
    size?: PosterSize;
    className?: string;
};

export default function PosterPreview({ path, title, size = "w342", className }: Props) {
    const [failed, setFailed] = useState(false);


    const base = (import.meta as any).env?.VITE_TMDB_IMG_BASE ?? "https://image.tmdb.org/t/p/";

    const src = useMemo(() => {
        if (!path || failed) return "/no-poster.jpg";
        const clean = path.startsWith("/") ? path : `/${path}`;
        return `${base}${size}${clean}`;
    }, [path, failed, base, size]);

    return (
        <img
            src={src}
            alt={title || "Poster"}
            className={`${css.poster} ${className ?? ""}`}
            onError={() => setFailed(true)}
            loading="lazy"
            decoding="async"
        />
    );
}
