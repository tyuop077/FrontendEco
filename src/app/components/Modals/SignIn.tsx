import {ReactComponent as Close} from "../../assets/Close.svg";
import {useDispatch} from "react-redux";
import {closeModal, openModal} from "../../stores/ModalSlice";
import Register from "./Register";

export default () => {
    const dispatch = useDispatch();
    return <>
        <div className="titleBar">
            <h1>Вход</h1>
            <Close onClick={() => dispatch(closeModal())} />
        </div>
        <input type="tel" placeholder="Телефон" />
        <input type="password" placeholder="Пароль" />
        <button>Войти</button>
        <div className="choices">
            <a href="#" onClick={() => dispatch(openModal(<Register />))}>Войти с помощью смс</a>
            <a href="#" onClick={() => dispatch(openModal(<Register />))}>Регистрация</a>
        </div>
        <button className="alternative">Вход для партнёров</button>
    </>
}
