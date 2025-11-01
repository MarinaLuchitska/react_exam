import css from "./Header.module.css";
import {SearchForm} from "../SearchMovie/SearchMovie.tsx";
import {UserInfo} from "../UserInfo/UserInfo.tsx";

export const Header = () => {
    return (
        <header className={css.header}>
        <div className={css.logo}>Flix.id</div>
            <SearchForm/>
            <UserInfo/>
            </header>
    );
};
