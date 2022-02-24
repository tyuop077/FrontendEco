import styles from "./RootHeader.module.scss";
import {Link, useLocation} from "react-router-dom";
import Logo from "../../assets/EcoRus.svg";

export default () => {
    // const navigate = useNavigate();
    const location = useLocation();
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={Logo} alt="EcoRus logo"/>
                </div>
                <ul className={styles.headLine}>
                    {
                        [
                            {value: "Главная", path: "/"},
                            {value: "Пункты сбора", path: "/points"},
                            {value: "ЭкоМаркет", path: "/market"},
                            {value: "О сервисе", path: "/about"},
                        ].map(a => <li key={a.path}>
                            <Link className={location.pathname === a.path ? "current" : undefined} to={a.path}>
                                {a.value}
                            </Link>
                        </li>)
                    }
                </ul>
            </div>
        </header>
    )
}