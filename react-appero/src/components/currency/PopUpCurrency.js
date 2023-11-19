import { useEffect, useState } from "react";
import currency from '../../utils/currency';
import Currency from "./Currency";
import { FormControl, Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";

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

    // Cerca e risetta la lista dei currency
    const searchChanheCurrency = (e) => {
        setQuery(e.target.value)
        const filterCurrency = currency.
            filter(el => { return el.name.toLowerCase().includes(query.toLowerCase()) })
        setDataCurrency(filterCurrency)
    }

    return (
        <>
            <div
                className="fw-bold fs-5 text-white"
                onClick={() => setIsOpenCurrency(!isOpenCurrency)}
                style={{ cursor: "pointer" }}
            >
                {currentCodCurrency}
            </div>

            <Modal show={isOpenCurrency} onHide={() => setIsOpenCurrency(!isOpenCurrency)}>
                <ModalHeader closeButton>
                    <ModalTitle className="text-center p-2">Scegli la moneta</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <FormControl
                        className="mb-3"
                        name="query" id="query"
                        onChange={searchChanheCurrency}
                        placeholder="Cerca"
                        value={query}
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
                </ModalBody>
            </Modal>

        </>
    )
}

export default PopUpCurrency;