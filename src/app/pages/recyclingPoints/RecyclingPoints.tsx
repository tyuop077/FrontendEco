import styles from "./RecyclingPoints.module.scss";
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {ReactComponent as Search} from "../../assets/Search.svg";
import RecyclingPoint from "../../assets/RecyclingPoint.png";
import MarkerIcon from "../../assets/Marker.svg";
import {Icon} from "leaflet";

export default () => <>
    <MapContainer className={styles.map} center={[55.792052, 49.122253]} zoom={19}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[55.791306, 49.121525]} icon={new Icon({iconUrl: MarkerIcon})}>
            <Popup>
                <b>ул.Кремлёвская, 88</b>
                <p>Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...</p>
            </Popup>
        </Marker>
        <Marker position={[55.792129, 49.122045]} icon={new Icon({iconUrl: MarkerIcon})}>
            <Popup>
                <b>ул.Кремлёвская, 35</b>
                <p>Стекло, бумага, металл, старая одежда, батареи</p>
            </Popup>
        </Marker>
    </MapContainer>
    <div className={styles.bar}>
        <input type="text" placeholder="Поиск"/>
        <Search className="search" />
        <select name="shops" defaultValue="info">
            <option value="info" disabled>Выбрано 0 магазинов</option>
            <option value="all">Выбрать все</option>
            <option value="0">H&M</option>
            <option value="1">P&B</option>
            <option value="2">Adidas</option>
            <option value="3">Nike</option>
            <option value="4">Reebok</option>
        </select>
        <select name="materials" defaultValue="info">
            <option value="info" disabled>Материалы</option>
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
