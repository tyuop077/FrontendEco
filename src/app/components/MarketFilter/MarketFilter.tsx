import {ChangeEvent, useState} from "react";
import styles from "./MarketFilter.module.scss";

interface Props {
    label: string,
    options: Record<string, string>,
    onChange: (value: string[]) => void
}

export default ({label, options, onChange}: Props) => {
    const [array, setArray] = useState<string[]>([]);
    const onArrayChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.checked) {
            const val = e.currentTarget.id === `all_${label}` ? Object.keys(options) : [...array, e.currentTarget.id];
            setArray(val);
            onChange(val);
        } else {
            const set = new Set(array);
            set.delete(e.currentTarget.id);
            const val = e.currentTarget.id === `all_${label}` ? [] : Array.from(set);
            setArray(val);
            onChange(val);
        }
    }
    return (
        <div className={styles.filter}>
            <b>{label}</b>
            {[[`all_${label}`, "Выбрать все"], ...Object.entries(options)].map(([value, text]) => <div>
                <input
                    type="checkbox"
                    id={value}
                    onChange={onArrayChange}
                    checked={value === `all_${label}` ? array.length === Object.keys(options).length : array.includes(value)}
                />
                <label htmlFor={value}>{text}</label>
            </div>)}
        </div>
    )
}
