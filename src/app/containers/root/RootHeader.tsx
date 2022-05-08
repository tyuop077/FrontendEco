import styles from "./RootHeader.module.scss";
import {Link, useLocation} from "react-router-dom";
import Logo from "../../assets/EcoRus.svg";
import {ReactComponent as MapPoint} from "../../assets/MapPoint.svg";
import {ReactComponent as EcoCoins} from "../../assets/EcoCoins.svg";
import {ReactComponent as Login} from "../../assets/Login.svg";
import Avatar from "../../assets/Avatar.png";
import {useDispatch, useSelector} from "react-redux";
import {openModal} from "../../stores/ModalSlice";
import SignIn from "../../components/Modals/SignIn";
import {CachedUser} from "../../types";
import {RootState} from "../../Store";

export default () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const cachedUser: CachedUser | undefined = useSelector((state: RootState) => state.cachedUser.value);
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
                    {cachedUser ? <>
                        <li>
                            <EcoCoins />
                            <b>{cachedUser.balance}</b>
                        </li>
                        <li>
                            <img src={cachedUser.avatarURL ?? Avatar} alt="Profile avatar" />
                            {cachedUser.displayName}
                        </li>
                    </> : (
                        <li onClick={() => dispatch(openModal(<SignIn />))}>
                            <Login />
                            Войти
                        </li>
                    )}
                </ul>
            </div>
        </header>
    )
}
