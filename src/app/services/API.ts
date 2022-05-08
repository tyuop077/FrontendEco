import {LoginData} from "../types";
import {Store} from "../Store";
import {updateCachedUser} from "../stores/CachedUserSlice";

export class API {
    static readonly endpoint = "https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/";
    static get _token() {
        return localStorage.getItem("token")
    }
    static get _headers() {
        return {
            "Content-Type": "application/json",
            ...API._token ? {"Authorization": `Bearer ${API._token}`} : {}
        }
    }
    static async _request(path: string, method: string, data?: any) {
        try {
            const res = await fetch(`${API.endpoint}${path}`, {
                method,
                headers: API._headers,
                body: data ? JSON.stringify(data) : undefined
            });
            if (res.ok) return {success: true, data: await res.json()};
            return {success: false, data: await res.json()}
        } catch (e) {
            console.log("Unexpected error", e);
            return {success: false, data: null}
        }
    }
    static _get(path: string) {
        return API._request(path, "GET");
    }
    static _post(path: string, data?: any) {
        return API._request(path, "POST", data);
    }
    static async register({phone, email, password}: {phone: string, email: string, password: string}) {
        return await API._post("account", {phone_number: phone, email, password});
    }
    static async login(login: string, password: string) {
        const res = await API._post("login", {login, password});
        const data = res.data as LoginData;
        if (res.success) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user_cache", JSON.stringify({
                displayName: data.firstname ?? data.username ?? data.email ?? "Пользователь",
                avatarURL: data.photo_url ?? undefined,
                balance: data.balance ?? 0
            }))
            Store.dispatch(updateCachedUser())
        }
        return res
    }
}
