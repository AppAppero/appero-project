import { Row } from "react-bootstrap"
import { CURRENCY } from "../../../utils/commons/constStorageCookie"

const Currency = ({ name, code, symbol, setCurrentCodCurrency, setIsOpenCurrency }) => {

    // Setta nel localStorage la moneta
    const handleChangeCurrentCodCurrency = (symbol) => {
        localStorage.setItem(CURRENCY, symbol)
        setCurrentCodCurrency(symbol)
        setIsOpenCurrency(false)
    }

    return (
        <Row
            onClick={() => handleChangeCurrentCodCurrency(symbol)}
            className='row ms-1 fw-bold' style={{ cursor: "pointer" }}>
            {name} - {code}  ({symbol})
        </Row>
    )
}

export default Currency;
