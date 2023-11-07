import axios from "axios";

const apiUrl = process.env.REACT_APP_LOGIN;
const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;

const formData = new URLSearchParams();
formData.append("grant_type", "client_credentials");
formData.append("client_id", client_id);
formData.append("client_secret", client_secret);

const instance = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})

// Login Condizionale
const loginAmadeus = async (isLogin) => {
    if (isLogin) {
        const response = await instance.post("", formData)
            .then(data => {
                // Salvo il token
                localStorage.setItem("token-amadeus", data.data.token_type + " " + data.data.access_token)
            })
            .catch(error => {
                console.error(error);
            });
        return response;
    }
}

// Login
const login = async () => {
    return await loginAmadeus(true)
}


export { loginAmadeus, login };