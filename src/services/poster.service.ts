const BASE = import.meta.env.VITE_TMDB_IMG_BASE;

export function getPosterUrl(path?: string | null, size: string = "w500"): string {
    if (!path) {
        return "/assets/no-poster.png";
    }
    return `${BASE}${size}${path}`;
}
