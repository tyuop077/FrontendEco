import {ReactComponent as Close} from "../../assets/Close.svg";
import {useDispatch} from "react-redux";
import {closeModal} from "../../stores/ModalSlice";

export default ({message}: {message: string}) => {
    const dispatch = useDispatch();
    return <>
        <div className="titleBar">
            {/*<h1>Вход</h1>*/}
            <Close onClick={() => dispatch(closeModal())} />
        </div>
        <h2>{message}</h2>
        <button onClick={() => dispatch(closeModal())}>Закрыть</button>
    </>
}
