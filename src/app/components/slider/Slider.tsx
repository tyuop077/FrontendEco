import styles from "./Slider.module.scss";
import Recycling from "../../assets/recyclingFlat.png";

export default () => <>
    <div className={styles.slider}>
        <div className="content">
            <img src={Recycling} alt="Recycling" />
            <h2>Сделаем мир чище</h2>
            <span>Сдай макулатуру или старую одежду и получи скидку<br/>на покупку товаров из переработанных материалов</span>
            <button>Условия сервиса</button>
        </div>
    </div>
</>
