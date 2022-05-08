import styles from "./RecyclingPoints.module.scss";
import { MapContainer, TileLayer } from 'react-leaflet'
import {ReactComponent as Search} from "../../assets/Search.svg";
import RecyclingPoint from "../../assets/RecyclingPoint.png";

export default () => <>
    <MapContainer className={styles.map} center={[55.796127, 49.106414]} zoom={19}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
    <div className={styles.bar}>
        <input type="text" placeholder="Поиск"/>
        <Search className="search" />
        <select name="shops">
            <option value="test" disabled selected>Выбрано 0 магазинов</option>
            <option value="test">Выбрать все</option>
            <option value="test">H&M</option>
            <option value="test">P&B</option>
            <option value="test">Adidas</option>
            <option value="test">Nike</option>
            <option value="test">Reebok</option>
        </select>
        <select name="materials">
            <option value="test" disabled selected>Материалы</option>
        </select>
    </div>
    <div className={styles.container}>
        <div className={styles.collections}>
            <div>
                <img src={RecyclingPoint} alt="Recycling point" />
                <b>ул.Кремлёвская, 88</b>
                <span>Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...</span>
            </div>
            <div>
                <img src={RecyclingPoint} alt="Recycling point" />
                <b>ул.Кремлёвская, 88</b>
                <span>Стекло, бумага, металл, старая одежда, батареи</span>
            </div>
            <div>
                <img src={RecyclingPoint} alt="Recycling point" />
                <b>ул.Кремлёвская, 88</b>
                <span>Пластик, стекло, бумага, металл</span>
            </div>
            <div>
                <img src={RecyclingPoint} alt="Recycling point" />
                <b>ул.Кремлёвская, 88</b>
                <span>Стекло, бумага, металл, старая одежда, батареи</span>
            </div>
            <div>
                <img src={RecyclingPoint} alt="Recycling point" />
                <b>ул.Кремлёвская, 88</b>
                <span>Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...</span>
            </div>
            <div>
                <img src={RecyclingPoint} alt="Recycling point" />
                <b>ул.Кремлёвская, 88</b>
                <span>Стекло, бумага, металл, старая одежда, батареи</span>
            </div>
            <div>
                <img src={RecyclingPoint} alt="Recycling point" />
                <b>ул.Кремлёвская, 88</b>
                <span>Пластик, стекло, бумага, металл</span>
            </div>
            <div>
                <img src={RecyclingPoint} alt="Recycling point" />
                <b>ул.Кремлёвская, 88</b>
                <span>Стекло, бумага, металл, старая одежда, батареи</span>
            </div>
        </div>
    </div>
</>
