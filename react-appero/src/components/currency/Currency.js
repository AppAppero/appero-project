import { Row } from "react-bootstrap"

const Currency = ({ name, code, symbol, setCurrentCodCurrency, setIsOpenCurrency }) => {

    // Setta nel localStorage la moneta
    const handleChangeCurrentCodCurrency = (symbol) => {
        localStorage.setItem("currentCodCurrency", symbol)
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
