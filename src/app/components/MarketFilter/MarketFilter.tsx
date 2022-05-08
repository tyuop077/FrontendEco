import {ChangeEvent, useState} from "react";
import styles from "./MarketFilter.module.scss";

interface Props {
    label: string,
    options: Record<string, string>,
    onChange: (value: string[]) => void,
    selected: string[]
}

export default ({label, options, onChange, selected}: Props) => {
    const onArrayChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.checked) {
            const val = e.currentTarget.id === `all_${label}` ? Object.keys(options) : [...selected, e.currentTarget.id];
            onChange(val);
        } else {
            const set = new Set(selected);
            set.delete(e.currentTarget.id);
            const val = e.currentTarget.id === `all_${label}` ? [] : Array.from(set);
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
                    checked={value === `all_${label}` ? selected.length === Object.keys(options).length : selected.includes(value)}
                />
                <label htmlFor={value}>{text}</label>
            </div>)}
        </div>
    )
}
