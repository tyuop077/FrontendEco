import {ReactComponent as Close} from "../../assets/Close.svg";
import {useDispatch} from "react-redux";
import {closeModal} from "../../stores/ModalSlice";

export default ({title, message}: {title?: string, message: string}) => {
    const dispatch = useDispatch();
    return <>
        {title ?
            <div className="titleBar">
                <div />
                <Close onClick={() => dispatch(closeModal())} />
            </div>
        : null}
        <h3>{message}</h3>
        <button onClick={() => dispatch(closeModal())}>Закрыть</button>
    </>
}
