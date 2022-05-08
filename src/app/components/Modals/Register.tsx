import {ReactComponent as Close} from "../../assets/Close.svg";
import {useDispatch} from "react-redux";
import {closeModal, openModal} from "../../stores/ModalSlice";
import {useFormik} from "formik";
import * as yup from "yup";
import PartnerSignIn from "./PartnerSignIn";
import SignIn from "./SignIn";
import {API} from "../../services/API";
import {useState} from "react";
import {Loader} from "../Loader/Loader";
import Alert from "./Alert";

export default () => {
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            phone: "",
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            email: yup.string()
                .email("Введите ваш email"),
            phone: yup.string()
                .matches(/\+?\d+/, "Введите номер телефона"),
            password: yup.string()
                .required("Введите пароль")
                .min(8, "Пароль должен быть не меньше 8 символов")
        }),
        onSubmit: async data => {
            setLoading(true);
            const res = await API.register(data);
            if (!res.success) return openModal(<Alert message="Что-то пошло не так..." />);
            openModal(<Alert message="Регистрация успешна" />)
        }
    });
    return <>
        <div className="titleBar">
            <h1>Регистрация</h1>
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
                type="email"
                placeholder="Email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <span className="error">{formik.errors.email}</span>
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
            {isLoading ? <Loader /> : <button type="submit">Зарегистрироваться</button>}
        </form>
        <div className="choices">
            <a href="#" onClick={() => dispatch(openModal(<SignIn />))}>Я уже зарегистировался(-ась)</a>
        </div>
        <button className="alternative" onClick={() => dispatch(openModal(<PartnerSignIn />))}>Вход для партнёров</button>
    </>
}
