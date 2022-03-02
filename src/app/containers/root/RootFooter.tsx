import styles from "./RootFooter.module.scss";
import {ReactComponent as Email} from "../../assets/Email.svg";
import {ReactComponent as Phone} from "../../assets/Phone.svg";

export default () => (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.contacts}>
                <div>
                    <Email />
                    <span>info@ecorus.ru</span>
                </div>
                <div>
                    <Phone />
                    <span>+7 (800) 880-88-88</span>
                </div>
            </div>
        </div>
    </footer>
)
