import styles from "./Market.module.scss";
import {useState} from "react";
import MarketFilter from "../../components/MarketFilter/MarketFilter";

export default () => {
    const [filter, setFilter] = useState({
        sort: 0,
        sexes: [] as string[], // this should be gender, but on API it's that
        item_categories: [] as string[],
        shop_ids: [] as string[]
    });
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
                <MarketFilter
                    label="Пол"
                    options={{"MAN": "Мужской", "WOMAN": "Женский"}}
                    onChange={v => setFilter({...filter, sexes: v})}
                />
                {/* ACCESSORIZE should definitely be ACCESSORIES, but it's that on API */}
                <MarketFilter
                    label="Тип товара"
                    options={{"CLOTHES": "Одежда", "SHOES": "Обувь", "ACCESSORIZE": "Аксессуары", "FURNITURE": "Мебель", "DISHES": "Посуда"}}
                    onChange={v => setFilter({...filter, item_categories: v})}
                />
                <MarketFilter
                    label="Брэнд"
                    options={{"0": "H&M", "1": "P&B", "2": "Adidas", "3": "Nike", "4": "Reebok"}}
                    onChange={v => setFilter({...filter, shop_ids: v})}
                />
            </div>
            {JSON.stringify(filter)}
        </div>
    </>
}
