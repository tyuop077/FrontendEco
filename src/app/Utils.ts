import {APIMarketItem} from "./types";

export class Utils {
    static generateMarketLabel(data: APIMarketItem) {
        return Utils.addPluralizedGender(Utils.addPluralizedGender(this.getTypeName(data.type)), data.sexes[0])
    }
    static getTypeName(type: string) {
        return {"CLOTHES": "Одежда", "SHOES": "Обувь", "ACCESSORIZE": "Аксессуары",
            "FURNITURE": "Мебель", "DISHES": "Посуда"}[type] ?? `"${type}"`
    }
    static addPluralizedGender(item: string, gender?: "MAN" | "WOMAN") {
        switch (gender) {
            case "MAN": return `Мужская ${item.toLowerCase()}`;
            case "WOMAN": return `Женская ${item.toLowerCase()}`
            default: return item
        }
    }
}
