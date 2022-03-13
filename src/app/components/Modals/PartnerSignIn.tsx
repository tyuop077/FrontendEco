import {ReactComponent as Close} from "../../assets/Close.svg";
import {useDispatch} from "react-redux";
import {closeModal, openModal} from "../../stores/ModalSlice";
import Register from "./Register";
import {useFormik} from "formik";
import * as yup from "yup";

export default () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            email: yup.string()
                .required("Введите почту"),
            password: yup.string()
                .required("Введите пароль")
                .min(8, "Пароль должен быть не меньше 8 символов")
        }),
        onSubmit: values => console.log(values)
    })
    return <>
        <div className="titleBar">
            <h1>Вход</h1>
            <Close onClick={() => dispatch(closeModal())} />
        </div>
        <form onSubmit={formik.handleSubmit}>
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
            <button type="submit">Войти</button>
        </form>
        <div className="choices">
            <a href="#" onClick={() => dispatch(openModal(<Register />))}>Войти с помощью смс</a>
            <a href="#" onClick={() => dispatch(openModal(<Register />))}>Регистрация</a>
        </div>
    </>
}
