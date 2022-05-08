import styles from "./Loader.module.scss";

export const Loader = () => (
    <div className={styles.loader}>
        <svg className={styles.loaderCircular} viewBox="25 25 50 50">
            <circle className={styles.loaderPath} cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
    </div>
)