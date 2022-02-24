import styles from "./Container.module.scss";
import {Outlet} from "react-router-dom";
import RootHeader from "./RootHeader";
import RootFooter from "./RootFooter";

export default () => {
    return <>
        <RootHeader />
        <div className={styles.container}>
            <Outlet />
        </div>
        <RootFooter />
    </>
}