import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {MoviePage} from "../pages/MoviePage.tsx";
import {MovieInfoPage} from "../pages/MovieDetailsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />, children: [
            { path: "/", element: <MoviePage /> },
            { path: "movie/:id", element: <MovieInfoPage /> },
        ],
    },
]);


