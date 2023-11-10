import { createContext, useContext, useState } from "react";
import useSize from "../hook/useSize";

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


    return (
        <AppContext.Provider value={
            {
                isLoading,
                setIsloading,
                isOpen,
                setIsOpen,
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

