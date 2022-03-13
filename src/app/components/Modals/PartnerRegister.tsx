import {ReactComponent as Close} from "../../assets/Close.svg";
import {useDispatch} from "react-redux";
import {closeModal, openModal} from "../../stores/ModalSlice";
import PartnerSignIn from "./PartnerSignIn";

export default () => {
    const dispatch = useDispatch();
    return <>
        <div className="titleBar">
            <h1>Вход</h1>
            <Close onClick={() => dispatch(closeModal())} />
        </div>
        <input type="text" placeholder="Наименование организации" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Пароль" />
        <button>Получить код</button>
        <div className="choices">
            <a href="#" onClick={() => dispatch(openModal(<PartnerSignIn />))}>Я уже зарегистировался(-ась)</a>
        </div>
        <button className="alternative" onClick={() => dispatch(openModal(<PartnerSignIn />))}>Вход для партнёров</button>
    </>
}
