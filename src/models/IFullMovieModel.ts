import type {IGenreModel} from "./IGenreModel.ts";

export interface IFullMovieModel {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    backdrop_path?: string | null;
    release_date: string;
    vote_average: number;
    genres:IGenreModel[]
}