
import {PaginationComponent} from "../components/pagination-component/pagination-component.tsx";
import {MoviesList} from "../components/MoviesList/movieList.tsx";


export const MoviePage =()=>{

    return(
        <>
        <MoviesList/>
        <PaginationComponent/>
        </>
    )

}