import { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { setDetailsHotel } from "../redux/reducerHotel";
import { BUDGET, PARAMS, PARAMS_HOTEL } from "../utils/commons/constStorageCookie";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const dispatch = useDispatch()
    // Nomi parametri del local storage
    const nameItems = [BUDGET, PARAMS, PARAMS_HOTEL]
    // Per SideBar
    const [isOpen, setIsOpen] = useState(false);
    // Variabile per indicare in che contesto pagina ci troviamo
    const [context, setContext] = useState("flight")
    // Parametri di ricerca iniziali
    const [params, setParams] = useState(JSON.parse(localStorage.getItem(PARAMS)))

    // Rimuove negli Items del local storage e resetta alcuni stati
    const reset = () => {
        nameItems.forEach(item => localStorage.removeItem(item))
        dispatch(setDetailsHotel({}))
    }

    return (
        <AppContext.Provider value={
            {
                reset,
                params, setParams,
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

