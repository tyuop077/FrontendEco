export interface APIUser {
    id: string,
    photo_url: string | null,
    firstname: string | null,
    lastname: string | null,
    username: string | null,
    email: string,
    phone_number: string,
    password: null,
    balance: number | null,
    role: {
        name: "USER" | "ADMIN" | "POINT" | "SHOP",
        localizedName: string
    }
}

export interface CachedUser {
    displayName: string,
    avatarURL: string,
    balance: number
}

export type LoginData = {token: string} & APIUser

export interface APIMarketItem {
    name: string,
    brand: string,
    sexes: ["MAN"] | ["WOMAN"] | [],
    type: string,
    price: number,
    image: string,
    popularity: number,
    createdAt: number
}

export interface MarketItem {
    name: string,
    brand: string,
    label: string,
    price: number,
    image: string
}
