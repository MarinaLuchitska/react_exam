import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_TMDB_API_BASE,
    headers: {
        Authorization: `Bearer  ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
});

export async function apiGet<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const { data } = await api.get<T>(endpoint, { params });
    return data;
}
