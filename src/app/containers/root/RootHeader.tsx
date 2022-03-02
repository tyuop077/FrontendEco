import styles from "./RootHeader.module.scss";
import {Link, useLocation} from "react-router-dom";
import Logo from "../../assets/EcoRus.svg";
import {ReactComponent as MapPoint} from "../../assets/MapPoint.svg";
import {ReactComponent as EcoCoins} from "../../assets/EcoCoins.svg";
import Avatar from "../../assets/Avatar.png";

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
                <ul className={styles.dynamic}>
                    <li>
                        <MapPoint />
                        Казань
                    </li>
                    <li>
                        <EcoCoins />
                        <b>1000</b>
                    </li>
                    <li>
                        <img src={Avatar} alt="Profile avatar" />
                        Алексей
                    </li>
                </ul>
            </div>
        </header>
    )
}
