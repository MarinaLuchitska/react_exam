import css from "./user-info.module.css";

export const UserInfo=()=> {
    return (
        <div className={css.wrap}>
            <div className={css.avatar}>LM</div>
            <span className={css.badge}>Premium</span>
        </div>
    );
}
