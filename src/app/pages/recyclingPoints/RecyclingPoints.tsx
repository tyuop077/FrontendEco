import styles from "./RecyclingPoints.module.scss";
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {ReactComponent as Search} from "../../assets/Search.svg";
import {ReactComponent as ArrowLeft} from "../../assets/ArrowLeft.svg";
import RecyclingPoint from "../../assets/RecyclingPoint.png";
import MarkerIcon from "../../assets/Marker.svg";
import {Icon} from "leaflet";
import {useState} from "react";

export default () => {
    const [isShowcasing, setShowcase] = useState(false);
    return <>
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
            {isShowcasing ? <div className={styles.showcase}>
                <div className={styles.back} onClick={() => setShowcase(false)}>
                    <ArrowLeft />
                    Вернуться назад
                </div>
                <div className="card">
                    <img src={RecyclingPoint} alt="Recycling point" />
                    <div className="info">
                        <b>ул.Кремлёвская, 88</b>
                        <p>+7 (917) 888 88 88</p>
                        <div className="time">
                            <span>Пн - Пт</span>
                            <span>08:00 - 20:00</span>
                        </div>
                        <div className="time">
                            <span>Сб - Вс</span>
                            <span>10:00 - 18:00</span>
                        </div>
                        <div className="tags">
                            <b>H&M</b>
                            <span>Пластик: от 5 кг</span>
                            <span>Стекло: от 2 кг</span>
                            <span>Бумага: от 10 кг</span>
                            <span>Батареи: от 2 кг</span>
                        </div>
                        <div className="tags">
                            <b>Adidas</b>
                            <span>Пластик: от 5 кг</span>
                            <span>Стекло: от 2 кг</span>
                            <span>Бумага: от 10 кг</span>
                        </div>
                </div>
                </div>
            </div> : (
                <div className={styles.collections} onClick={() => setShowcase(true)}>
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
            )}
        </div>
    </>
}