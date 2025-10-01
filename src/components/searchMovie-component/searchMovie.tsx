import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import css from "./SearchMovie.module.css";

export const SearchForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const [value, setValue] = useState(params.get("q") ?? "");

    useEffect(() => setValue(params.get("q") ?? ""), [location.search]);

    const updateURL = (q: string) => {
        const next = new URLSearchParams(location.search);
        q.trim() ? next.set("q", q.trim()) : next.delete("q");
        next.set("page", "1");
        navigate({ pathname: location.pathname, search: next.toString() });
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setValue(val);
        updateURL(val);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateURL(value);
    };

    return (
        <form onSubmit={onSubmit} className={css.shell} role="search">
            <input
                className={css.input}
                value={value}
                onChange={onChange}
                placeholder="Search…"
                aria-label="Search movies"
            />
            <button type="submit" className={css.button} aria-label="Search">
                <svg viewBox="0 0 24 24" className={css.icon} aria-hidden="true">
                    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="currentColor" strokeWidth="2" />
                </svg>
            </button>
        </form>
    );
};
