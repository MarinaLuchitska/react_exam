import css from "./header.module.css";
import {SearchForm} from "../searchMovie-component/searchMovie.tsx";
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
