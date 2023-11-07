import { useEffect, useState } from "react";
import currency from '../../utils/currency';
import Currency from "./Currency";
import { FormControl } from "react-bootstrap";

const PopUpCurrency = () => {
    const [isOpenCurrency, setIsOpenCurrency] = useState(false)
    const [currentCodCurrency, setCurrentCodCurrency] = useState()
    const [query, setQuery] = useState("")
    const [dataCurrency, setDataCurrency] = useState(currency);

    // Use Effect per il Currency (Tipo di moneta)
    useEffect(() => {
        if (localStorage.getItem("currentCodCurrency")) {
            setCurrentCodCurrency(localStorage.getItem("currentCodCurrency"))
        } else {
            // Default Euro:EUR
            setCurrentCodCurrency("EUR")
            localStorage.setItem("currentCodCurrency", "EUR")
        }
    }, [currentCodCurrency])

    const searchChanheCurrency = (e) => {
        setQuery(e.target.value)
        const filterCurrency = currency.
            filter(el => { return el.name.toLowerCase().includes(query.toLowerCase()) })
        setDataCurrency(filterCurrency)
    }

    return (
        <>
            <div onClick={() => setIsOpenCurrency(!isOpenCurrency)}
                style={{ fontWeight: "bold", cursor: "pointer", color: "white", fontSize: "20px" }}>
                {currentCodCurrency}
            </div>

            {isOpenCurrency &&
                <div style={popup}>
                    <h3 style={{ color: "white", margin: "0 0 20px 0" }}>Scegli la moneta</h3>
                    <FormControl
                        name="query" id="query"
                        onChange={searchChanheCurrency}
                        placeholder="Cerca"
                        value={query}
                        style={{ marginBottom: "20px" }}
                        type="search" />
                    {
                        dataCurrency.map((el, index) => {
                            return <Currency
                                key={index}
                                {...el}
                                setCurrentCodCurrency={setCurrentCodCurrency}
                                setIsOpenCurrency={setIsOpenCurrency}
                            />
                        })
                    }
                </div>
            }
        </>
    )
}


const popup = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: 'rgba(0, 0, 0, 0.8)',
    padding: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
    zIndex: "1000",
    height: "50%",
    width: "40%",
    borderRadius: "10px",
    overflow: "auto"
}

/**
const scrollbarStyles = {
    scrollbarWidth: "thin",
    scrollbarColor: "#333 #fff",
    WebkitScrollbar: {
        width: "6px",
        scrollbarThumb: {
            backgroundColor: "#333",
        },
        scrollbarTrack: {
            backgroundColor: "#fff",
        },
    },
};
 */
export default PopUpCurrency;