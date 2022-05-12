import {useDispatch} from "react-redux";
import {closeModal} from "../../stores/ModalSlice";
import {Utils} from "../../Utils";
import {QRCodeSVG} from 'qrcode.react';

export default () => {
    const dispatch = useDispatch();
    const code = Utils.randomString(8).toUpperCase();
    return <>
        <div className="titleBar">
            <h1>QR-код на покупку создан</h1>
        </div>
        <span>При оплате покажите его сотруднику на кассе</span>
        <div className="center">
            <QRCodeSVG value={code} size={384} includeMargin={true} />
        </div>
        <h1 className="center">{code}</h1>
        <span>Если не получается отсканировать QR-код, введите код<br />вручную или продиктуйте сотруднику на кассе</span>
        <button onClick={() => dispatch(closeModal())}>Закрыть</button>
    </>
}
