import styles from "./Market.module.scss";
import {useState} from "react";
import MarketFilter from "../../components/MarketFilter/MarketFilter";
import {ReactComponent as EcoCoins} from "../../assets/EcoCoins.svg";
import {CachedUser} from "../../types";
import {useSelector} from "react-redux";
import {RootState} from "../../Store";
import {useDispatch} from "react-redux";
import {openModal} from "../../stores/ModalSlice";
import SignIn from "../../components/Modals/SignIn";

export default () => {
    const [filter, setFilter] = useState({
        sort: 0,
        sexes: [] as string[], // this should be "gender", but on API it's that
        item_categories: [] as string[],
        shop_ids: [] as string[]
    });
    const cachedUser: CachedUser | undefined = useSelector((state: RootState) => state.cachedUser.value);
    const dispatch = useDispatch();
    return <>
        <div className={styles.titleBar}>
            <h1>ЭкоМаркет</h1>
            <div className={styles.sortPicker}>
                {["По популярности", "По цене", "По новизне"]
                    .map((value, i) =>
                        <button
                            className={i === filter.sort ? "Active" : undefined}
                            onClick={() => setFilter({...filter, sort: i})}
                        >
                            {value}
                        </button>
                    )}
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
                        options={{"0": "H&M", "1": "P&B", "2": "Adidas", "3": "Nike", "4": "Reebok"}}
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
            </div>
        </div>
    </>
}
