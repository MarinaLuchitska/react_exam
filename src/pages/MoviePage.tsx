import {PaginationComponent} from "../components/Pagination/PaginationComponent.tsx";
import {MoviesList} from "../components/MoviesList/MovieList.tsx";
import GenreFilter from "../components/GenreBadge/GenreFilter.tsx";


export const MoviePage =()=>{

    return(
        <>
            <GenreFilter/>
        <MoviesList/>
        <PaginationComponent/>
        </>
    )

}