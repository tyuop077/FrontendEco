import {ReactComponent as Close} from "../../assets/Close.svg";
import {useDispatch} from "react-redux";
import {closeModal, openModal} from "../../stores/ModalSlice";
import SignIn from "./SignIn";
import Confirmation from "./Confirmation";
import {useState} from "react";
import PartnerSignIn from "./PartnerSignIn";

export default () => {
    const dispatch = useDispatch();
    const [phone, setPhone] = useState("");
    return <>
        <div className="titleBar">
            <h1>Вход или регистрация</h1>
            <Close onClick={() => dispatch(closeModal())} />
        </div>
        <input type="tel" placeholder="Телефон" onChange={e => setPhone(e.currentTarget.value)} />
        <button onClick={() => dispatch(openModal(<Confirmation phone={phone} />))}>Получить код</button>
        <div className="choices">
            <a href="#" onClick={() => dispatch(openModal(<SignIn />))}>Я уже зарегистировался(-ась)</a>
        </div>
        <button className="alternative" onClick={() => dispatch(openModal(<PartnerSignIn />))}>Вход для партнёров</button>
    </>
}
