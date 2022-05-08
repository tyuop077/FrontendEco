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
        name: "USER" | "ADMIN",
        localizedName: string
    }
}

export interface CachedUser {
    displayName: string,
    avatarURL: string,
    balance: number
}

export type LoginData = {token: string} & APIUser
