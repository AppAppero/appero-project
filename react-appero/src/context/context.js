import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    /**
     * PER GRANDEZZE DELLO SCHERMO
     */
    const [windowSize, setWindowSize] = useState(
        {
            width: window.innerWidth,
            height: window.innerHeight
        }
    );

    // Considera tutto sotto i 768px come mobile
    const isMobile = windowSize.width <= 768;

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    /*******************************************************/

    return (
        <AppContext.Provider value={
            {
                windowSize,
                isMobile
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext }