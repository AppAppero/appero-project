import { useEffect, useState } from 'react';

/** HOOK PER GRANDEZZE DELLO SCHERMO*/
const useSize = (id) => {

    const [size, setSize] = useState({})
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [windowSize, setWindowSize] = useState(
        {
            width: window.innerWidth,
            height: window.innerHeight
        }
    );

    // Per togliere carrello e sidebar applicandolo sotto lo schermo
    const isAllScreen = windowSize.width <= 767 || windowSize.height <= 576;;
    
    // Considera tutto sotto i 768px come mobile
    const isMobile = windowSize.width <= 576 || windowSize.height <= 576;

    // Tablet verticali (larghezza tra 768px e 1024px)
    const isTabletVertical = windowSize.width >= 577 && windowSize.width < 768 && windowSize.height >= 577 && windowSize.height <= 1024;

    // Tablet orizzontali (larghezza tra 1024px e 1366px)
    const isTabletHorizontal = windowSize.width >= 769 && windowSize.width < 1024 && windowSize.height >= 577 && windowSize.height <= 1024;

    // Dispositivi mobili e tablet (larghezza <= 1024px)
    const isMobileOrTablet = windowSize.width <= 1024 && windowSize.height <= 1024;

    // Dispositivi mobili e tablet in modalità orizzontale (larghezza <= 1366px)
    const isMobileOrTabletHorizontal = windowSize.width <= 1366 && windowSize.height <= 1366;


    // Use effect per le grandezze
    useEffect(() => {
        // Supervisiona le grandezze
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        // Crea gli eventi
        window.addEventListener('resize', handleResize)

        //CleanUp per rimuovere gli eventi
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // Use effect per Overflow
    useEffect(() => {
        const checkOverflow = () => {
            const container = document.getElementById(id);
            if (container) {
                setIsOverflowing(container.scrollHeight > container.clientHeight);
            }
        };

        checkOverflow();
        window.addEventListener("resizeOverflow", checkOverflow);

        return () => {
            window.removeEventListener("resizeOverflow", checkOverflow);
        };
    }, []);

    // Use effect per il modello di misure
    useEffect(() => {
        // Setta il modello
        setSize({
            isAllScreen,
            isMobile,
            isTabletVertical,
            isTabletHorizontal,
            isMobileOrTablet,
            isMobileOrTabletHorizontal
        })
    }, [windowSize])

    return { windowSize, size, isOverflowing };

}

export default useSize;
