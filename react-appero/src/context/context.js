import { createContext, useContext, useEffect, useState } from "react";
import { BUDGET, PARAMS, PARAMS_HOTEL } from "../utils/constStorageCookie";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    // Nomi parametri del local storage
    const nameItems = [BUDGET, PARAMS, PARAMS_HOTEL]
    // Per SideBar
    const [isOpen, setIsOpen] = useState(false);
    // Variabile per indicare in che contesto pagina ci troviamo
    const [context, setContext] = useState("flight")
    // Parametri di ricerca iniziali
    const [params, setParams] = useState(JSON.parse(localStorage.getItem(PARAMS)))
    // Parametri di hotel
    const [paramsHotel, setParamsHotel] = useState(JSON.parse(localStorage.getItem(PARAMS_HOTEL)))

    // Rimuove negli Items del local storage 
    const removeItemsLocalStorage = () => {
        nameItems.forEach(item => localStorage.removeItem(item))
    }

    return (
        <AppContext.Provider value={
            {
                removeItemsLocalStorage,
                params, setParams,
                paramsHotel, setParamsHotel,
                context, setContext,
                isOpen, setIsOpen
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };

