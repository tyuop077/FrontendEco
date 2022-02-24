import styles from "./RootHeader.module.scss";
import {Link} from "react-router-dom";
import Logo from "../../assets/EcoRus.svg";

export default () => {
    // const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={Logo} alt="EcoRus logo"/>
            <ul className={styles.header_contents}>
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
        </header>
    )
}