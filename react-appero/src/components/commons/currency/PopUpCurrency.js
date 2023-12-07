import { useEffect, useState } from "react";
import { Button, FormControl, Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";
import { CURRENCY } from "../../../utils/constStorageCookie";
import currency from '../../../utils/currency';
import Currency from "./Currency";

const PopUpCurrency = () => {
    const [isOpenCurrency, setIsOpenCurrency] = useState(false)
    const [currentCodCurrency, setCurrentCodCurrency] = useState()
    const [query, setQuery] = useState("")
    const [dataCurrency, setDataCurrency] = useState(currency);

    // Use Effect per il Currency (Tipo di moneta)
    useEffect(() => {
        if (localStorage.getItem(CURRENCY)) {
            setCurrentCodCurrency(localStorage.getItem(CURRENCY))
        } else {
            // Default Euro:EUR
            setCurrentCodCurrency("EUR")
            localStorage.setItem(CURRENCY, "EUR")
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
            <Button
                className="text-light btn-light btn-md"
                onClick={() => setIsOpenCurrency(!isOpenCurrency)}
                style={{ background: "none" }}
            >
                {currentCodCurrency}
            </Button>

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