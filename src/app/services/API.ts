export class API {
    static readonly endpoint = "https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/";
    static get _token() {
        return localStorage.getItem("token")
    }
    static get _headers() {
        return {
            "Content-Type": "application/json",
            "Authorization": API._token ? `Bearer ${API._token}` : ""
        }
    }
    static async _get(path: string) {
        const res = await fetch(`${API.endpoint}${path}`, {
            headers: API._headers
        });
        return res.json()
    }
    static async _post(path: string, data: any) {
        console.log(data);
        const res = await fetch(`${API.endpoint}${path}`, {
            method: "POST",
            headers: API._headers,
            body: data ? JSON.stringify(data) : undefined
        })
        return res.json()
    }

    static async register(data: {phone: string, email: string, password: string}) {
        try {
            const res = await API._post("account", data);
            console.log(res);
            return {success: true}
        } catch (e) {
            return {success: false}
        }
    }
}