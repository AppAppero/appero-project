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

    // Elementi nella visualizzazione del carrello
    const [elements, setElements] = useState([])

    // Aggiunge l'elemento rimuovendo il precedente(Voli e Hotel non sono liste)
    const addElement = (title, element) => {
        setElements(old => {
            old = old.filter(el => el.title !== title)
            let elementNew = { title, element }
            return [...old, elementNew]
        })
    }

    // Rimuove l'elemento 
    const removeElement = (title) => {
        setElements(elements.filter(el => el.title !== title))
    }

    // Rimuovi tutto
    const removeAll = () => {
        setElements([])
    }

    // Rimuove negli Items del local storage e resetta alcuni stati
    const reset = () => {
        nameItems.forEach(item => localStorage.removeItem(item))
        dispatch(setDetailsHotel({}))
    }

    return (
        <AppContext.Provider value={
            {
                elements, setElements, addElement, removeElement,removeAll,
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

