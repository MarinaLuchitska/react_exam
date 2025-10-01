import {Outlet} from "react-router-dom";
import GenreFilter from "../components/GenreBadge/genreFilter.tsx";
import {Header} from "../components/Header/Header.tsx";

export const MainLayout=()=>{

    return(
        <>
            <Header/>
            <hr/>
            <GenreFilter/>
            <hr/>
            <Outlet/>
        </>
    )
}