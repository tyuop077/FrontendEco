import {ReactComponent as Close} from "../../assets/Close.svg";
import {useDispatch} from "react-redux";
import {closeModal, openModal} from "../../stores/ModalSlice";
import LoginViaPhone from "./LoginViaPhone";
import Register from "./Register";
import {useFormik} from "formik";
import * as yup from "yup";
import PartnerSignIn from "./PartnerSignIn";
import {useState} from "react";
import {Loader} from "../Loader/Loader";
import {API} from "../../services/API";

export default () => {
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const formik = useFormik({
        initialValues: {
            phone: "",
            password: ""
        },
        validationSchema: yup.object({
            phone: yup.string()
                .required("Введите номер телефона")
                .matches(/\+?\d+/, "Введите номер телефона"),
            password: yup.string()
                .required("Введите пароль")
                .min(8, "Пароль должен быть не меньше 8 символов")
        }),
        onSubmit: async ({phone, password}) => {
            setLoading(true);
            const res = await API.login(phone, password);
            setLoading(false);
            if (res.success) {
                dispatch(closeModal())
            } else {
                setError(res.data.message ?? "Что-то пошло не так...");
            }
        }
    });
    return <>
        <div className="titleBar">
            <h1>Вход</h1>
            <Close onClick={() => dispatch(closeModal())} />
        </div>
        <form onSubmit={formik.handleSubmit}>
            <input
                type="tel"
                placeholder="Телефон"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
                <span className="error">{formik.errors.phone}</span>
            ) : null}
            <input
                type="password"
                placeholder="Пароль"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <span className="error">{formik.errors.password}</span>
            ) : null}
            {isLoading ? <Loader /> : <button type="submit">Войти</button>}
            {error ? <span className="error">{error}</span> : null}
        </form>
        <div className="choices">
            <a href="#" onClick={() => dispatch(openModal(<LoginViaPhone />))}>Войти с помощью смс</a>
            <a href="#" onClick={() => dispatch(openModal(<Register />))}>Регистрация</a>
        </div>
        <button className="alternative" onClick={() => dispatch(openModal(<PartnerSignIn />))}>Вход для партнёров</button>
    </>
}
