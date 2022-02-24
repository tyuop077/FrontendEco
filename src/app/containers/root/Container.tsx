import styles from "./Container.module.scss";
import {Outlet} from "react-router-dom";
import RootHeader from "./RootHeader";

export default () => {
    /*return <>
        <RootHeader/>
        <div className="mainnn">
            <div className="container">
                <Outlet />
            </div>
        </div>
    </>*/
    return <Outlet />
}