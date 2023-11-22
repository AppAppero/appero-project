import axios from "axios";
import Cookies from 'js-cookie';

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
        try {
            const response = await instance.post("", formData);

            // Salvo il token nuovo
            const tokenAmadeus = response.data.token_type + " " + response.data.access_token;

            // Calcola il momento in cui il cookie dovrebbe scadere (mezz'ora da ora)
            const halfHourFromNow = new Date(new Date().getTime() + 30 * 60 * 1000);

            // Salva nei cookies impostando le sicurezze (httpOnly: true, secure: true) e la scadenza (expires: 7 giorni)
            Cookies.set("token-amadeus", tokenAmadeus,
                {
                    expires: halfHourFromNow,
                    // httpOnly: true, secure: true, sameSite: "None", domain: "localhost", path: "/"
                }
            );
            return response;
        } catch (error) {
            console.error(error);
            throw error; // Rilancia l'errore dopo averlo gestito
        }
    }
}


// Login
const login = async () => {
    return await loginAmadeus(true)
}

/*
L'impostazione httpOnly: true nel cookie indica al browser di limitare l'accesso al cookie solo al protocollo HTTP e di escludere l'accesso tramite JavaScript. Questo è un importante meccanismo di sicurezza per proteggere i cookie sensibili, come quelli che contengono token di autenticazione.
Quando httpOnly è impostato su true, il cookie non può essere letto o manipolato da JavaScript, riducendo così il rischio di attacchi XSS (Cross-Site Scripting). Gli attacchi XSS possono verificarsi quando un malintenzionato inserisce script dannosi in una pagina web, e questi script potrebbero cercare di accedere ai cookie dell'utente, compresi i token di autenticazione.
L'impostazione secure: true richiede che il cookie sia inviato solo su connessioni sicure HTTPS. Questo è essenziale per proteggere i cookie durante la trasmissione tra il client e il server. Se secure non è impostato su true e il tuo sito non è servito su HTTPS, il browser potrebbe rifiutare di salvare o restituire il cookie per ragioni di sicurezza.
Quindi, la combinazione di httpOnly: true e secure: true è una pratica consigliata per cookie contenenti informazioni sensibili, come token di autenticazione. Assicura che il cookie sia protetto sia durante la trasmissione che da accessi non autorizzati tramite JavaScript.
 */

export { login, loginAmadeus };

