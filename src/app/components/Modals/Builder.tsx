import styles from "./Builder.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Store";
import {closeModal} from "../../stores/ModalSlice";

export default () => {
    const modal = useSelector((state: RootState) => state.modal.value);
    const dispatch = useDispatch();

    return (
        <div className={modal ? styles.overlay : styles.overlayHidden} onClick={() => dispatch(closeModal())}>
            <div className={modal ? styles.modal : styles.modalHidden} onClick={e => e.stopPropagation()}>
                {modal}
            </div>
        </div>
    )
}