import Slider from "../../components/slider/Slider";
import styles from "./Main.module.scss";
import {ReactComponent as RecyclingMap} from "../../assets/RecyclingMap.svg";
import {ReactComponent as EcologyMarket} from "../../assets/EcologyMarket.svg";
import {ReactComponent as ArrowRight} from "../../assets/ArrowRight.svg";

export default () => <>
    <Slider />
    <div className={styles.blocks}>
        <div className={styles.block}>
            <RecyclingMap className={styles.cover} />
            <h1>Пункты сбора</h1>
            <p>Посмотри, где в твоем городе можно сдать вторсырье на переработку</p>
            <button><ArrowRight /></button>
        </div>
        <div className={styles.block}>
            <EcologyMarket className={styles.cover} />
            <h1>ЭкоМаркет</h1>
            <p>Используй заработанные экокоины для покупки товаров из переработанных материалов</p>
            <button><ArrowRight /></button>
        </div>
    </div>
</>
