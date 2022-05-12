import styles from "./Market.module.scss";
import {useEffect, useState} from "react";
import MarketFilter from "../../components/MarketFilter/MarketFilter";
import {ReactComponent as EcoCoins} from "../../assets/EcoCoins.svg";
import {APIMarketItem, CachedUser, MarketItem} from "../../types";
import {useSelector} from "react-redux";
import {RootState} from "../../Store";
import {useDispatch} from "react-redux";
import {openModal} from "../../stores/ModalSlice";
import SignIn from "../../components/Modals/SignIn";
import {API} from "../../services/API";
import {Utils} from "../../Utils";
import MarketPurchase from "../../components/Modals/MarketPurchase";

export default () => {
    const [filter, setFilter] = useState({
        sort: 0,
        sexes: [] as string[], // this should be "gender", but on API it's that
        item_categories: [] as string[],
        shop_ids: [] as string[]
    });
    const cachedUser: CachedUser | undefined = useSelector((state: RootState) => state.cachedUser.value);
    const [data, setData] = useState<APIMarketItem[]>([]);
    const [market, setMarket] = useState<MarketItem[]>([]);
    const dispatch = useDispatch();
    useEffect(() => {
        API.fetchMarket().then(m => setData(m))
    }, [])
    useEffect(() => {
        setMarket([...data].filter(i => (
            (filter.sexes.length === 0 || filter.sexes.includes(i.sexes[0]!)) &&
            (filter.item_categories.length === 0 || filter.item_categories.includes(i.type)) &&
            (filter.shop_ids.length === 0 || filter.shop_ids.includes(i.brand))
        )).sort((a, b) => (
            filter.sort === 0 ? b.popularity - a.popularity :
                filter.sort === 1 ? a.price - b.price :
                    b.createdAt - a.createdAt
        )).map(i => ({
            name: i.name,
            brand: i.brand,
            label: Utils.generateMarketLabel(i),
            price: i.price,
            image: i.image
        })))
    }, [data, filter])
    return <>
        <div className={styles.titleBar}>
            <h1>ЭкоМаркет</h1>
            <div className={styles.sortPicker}>
                {["По популярности", "По цене", "По новизне"]
                    .map((value, i) =>
                        <button
                            className={i === filter.sort ? "Active" : undefined}
                            onClick={() => setFilter({...filter, sort: i})}
                            key={i}
                        >
                            {value}
                        </button>
                    )
                }
            </div>
        </div>
        <div className={styles.market}>
            <div className="filter">
                <div className="choices">
                    <MarketFilter
                        label="Пол"
                        options={{"MAN": "Мужской", "WOMAN": "Женский"}}
                        onChange={v => setFilter({...filter, sexes: v})}
                        selected={filter.sexes}
                    />
                    {/* ACCESSORIZE should definitely be ACCESSORIES, but it's that on API */}
                    <MarketFilter
                        label="Тип товара"
                        options={{"CLOTHES": "Одежда", "SHOES": "Обувь", "ACCESSORIZE": "Аксессуары",
                            "FURNITURE": "Мебель", "DISHES": "Посуда"}}
                        onChange={v => setFilter({...filter, item_categories: v})}
                        selected={filter.item_categories}
                    />
                    <MarketFilter
                        label="Брэнд"
                        options={{"H&M": "H&M", "P&B": "P&B", "Adidas": "Adidas", "NIKE": "Nike", "Reebok": "Reebok"}}
                        onChange={v => setFilter({...filter, shop_ids: v})}
                        selected={filter.shop_ids}
                    />
                </div>
                <button
                    onClick={() => setFilter({...filter, sexes: [], item_categories: [], shop_ids: []})}
                >
                    Сбросить фильтры
                </button>
            </div>
            <div className={styles.items}>
                {cachedUser ? (
                    <div className="promo">
                        <div className="convert">
                            <p>На вашем балансе <EcoCoins width="16" height="16" /> <b>{cachedUser.balance}</b></p>
                            <span>Вы можете обменять их на скидку {cachedUser.balance} руб.</span>
                        </div>
                        <button>Получить промокод</button>
                    </div>
                ) : (
                    <div className="promo">
                        <div className="convert">
                            <p>Авторизуйтесь, чтобы получить персональную скидку</p>
                        </div>
                        <button onClick={() => dispatch(openModal(<SignIn />))}>Войти</button>
                    </div>
                )}
                {market.map(i => (
                    <div className="item" key={i.name}>
                        <div className="cover" onClick={() => dispatch(openModal(<MarketPurchase />))}>
                            <span>{i.brand}</span>
                            <img src={i.image} alt={i.name} />
                        </div>
                        <b>{i.name}</b>
                        <span>{i.label}</span>
                        <div className="price">
                            <EcoCoins />
                            {i.price}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
}
