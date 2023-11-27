import { createContext, useContext, useState } from "react";
import useSize from "../hook/useSize";
import { PARAMS } from "../utils/constStorageCookie";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    // Per capire la grandezza dello schermo
    const { isMobile } = useSize().size;
    // Per SideBar
    const [isOpen, setIsOpen] = useState(false);
    // Per la colonna del blocco <Content />
    const colContentXS = isOpen && !isMobile ? 7 : 8;
    const colContentSM = isOpen && !isMobile ? 7 : 6;
    const colContentMD = isOpen && !isMobile ? 7 : 7;

    const [isLoading, setIsloading] = useState(true);

    // Variabile per indicare in che contesto pagina ci troviamo
    const [context, setContext] = useState("flight")
    // Parametri di ricerca
    const [params, setParams] = useState(JSON.parse(localStorage.getItem(PARAMS)))


    return (
        <AppContext.Provider value={
            {
                params, setParams,
                context, setContext,
                isLoading, setIsloading,
                isOpen, setIsOpen,
                colContentXS, colContentSM, colContentMD
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

