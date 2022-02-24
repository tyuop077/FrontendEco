import styles from "./RootHeader.module.scss";
import {Link} from "react-router-dom";

export default () => {
    // const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <img id="logo" src="../../assets/EcoRus.svg" alt="EcoRus logo">
                <ul className="header_contents">
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/points">Пункты сбора</Link>
                    </li>
                    <li>
                        <Link to="/market">ЭкоМаркет</Link>
                    </li>
                    <li>
                        <Link to="/about">О сервисе</Link>
                    </li>
                </ul>
            </img>
        </header>
    )
}