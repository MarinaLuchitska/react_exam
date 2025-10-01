import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { loadMovies } from "../../redux/slices/moviesSlice";
import css from "./pagination.module.css";

type Props = { totalPages?: number };

export const PaginationComponent = ({ totalPages }: Props) => {
    const [sp, setSp] = useSearchParams({ page: "1" });
    const page = Math.max(1, Number(sp.get("page") || "1"));

    const dispatch = useAppDispatch();
    const selectedGenreId = useAppSelector(s => s.genresStore.selectedGenreId);

    const go = (next: number) => {
        if (totalPages && (next < 1 || next > totalPages)) return;
        setSp({ page: String(next) });
        window.scrollTo({ top: 0, behavior: "smooth" });
        dispatch(loadMovies({ page: next, genreId: selectedGenreId ?? undefined }));
    };

    return (
        <nav className={css.bar} aria-label="Pagination">
            <div className={css.shell}>
                <button
                    className={css.iconBtn}
                    onClick={() => go(page - 1)}
                    disabled={page <= 1}
                    aria-label="Previous page"
                >
                    ‹
                </button>

                <span className={css.label}>
          Page {page}{totalPages ? ` / ${totalPages}` : ""}
        </span>

                <button
                    className={css.iconBtn}
                    onClick={() => go(page + 1)}
                    disabled={!!totalPages && page >= totalPages}
                    aria-label="Next page"
                >
                    ›
                </button>
            </div>
        </nav>
    );
};
