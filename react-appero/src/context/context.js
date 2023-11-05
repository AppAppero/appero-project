import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [isLoading, setIsloading] = useState(true);

    return (
        <AppContext.Provider value={
            {
                isLoading,
                setIsloading
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

