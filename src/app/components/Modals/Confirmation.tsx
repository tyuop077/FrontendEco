import {ReactComponent as Close} from "../../assets/Close.svg";
import {useDispatch} from "react-redux";
import {closeModal, openModal} from "../../stores/ModalSlice";
import Register from "./Register";

export default ({phone}: {phone: string}) => {
    const dispatch = useDispatch();
    return <>
        <div className="titleBar">
            <h1>Ввести код</h1>
            <Close onClick={() => dispatch(closeModal())} />
        </div>
        <p>Введите код отправленный вам на телефон <span>{phone}</span></p>
        <input placeholder="Код" />
        <button>Отправить</button>
        <div className="choices">
            <a href="#" onClick={() => dispatch(openModal(<Register />))}>Не получил(-а) код</a>
        </div>
        <button className="alternative">Вход для партнёров</button>
    </>
}
