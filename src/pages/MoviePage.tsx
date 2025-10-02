
import {PaginationComponent} from "../components/pagination-component/pagination-component.tsx";
import {MoviesList} from "../components/MoviesList/movieList.tsx";
import GenreFilter from "../components/GenreBadge/genreFilter.tsx";


export const MoviePage =()=>{

    return(
        <>
            <GenreFilter/>
        <MoviesList/>
        <PaginationComponent/>
        </>
    )

}