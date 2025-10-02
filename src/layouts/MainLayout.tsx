import {Outlet} from "react-router-dom";

import {Header} from "../components/Header/Header.tsx";

export const MainLayout=()=>{

    return(
        <>
            <Header/>
            <hr/>
            <Outlet/>
        </>
    )
}