
// export const tmdbImageUrl = (path?: string | null, size: "w342"|"w500"|"original"="w342") =>
//     path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODJlN2Q1M2M3MTQ3OTFmZjczZmU4NzA3ODdmMDgxNSIsInN1YiI6IjU3ZWE0NjY0OTI1MTQxMTA4OTAwOGZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEEivZliSc_G_UGJbP8p1LRlPXWu3U9erTCsUnRWP_U`, // витягни токен з .env
    },
});

export async function apiGet<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const { data } = await api.get<T>(endpoint, { params });
    return data;
}



