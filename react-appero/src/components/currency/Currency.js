const Currency = ({ name, code, symbol, setCurrentCodCurrency, setIsOpenCurrency }) => {

    const handleChangeCurrentCodCurrency = (symbol) => {
        localStorage.setItem("currentCodCurrency", symbol)
        setCurrentCodCurrency(symbol)
        setIsOpenCurrency(false)
    }

    return (
        <p
            onClick={() => handleChangeCurrentCodCurrency(symbol)}
            className='row'
            style={curText}>
            {name} - {code}  ({symbol})
        </p>
    )
}


const curText = {
    color: "white",
    cursor: "pointer",
    borderBottom: "1px solid gray",
    paddingBottom: "5px",
    margin: "0 0 0 10px",
    fontWeight: "bold"

}

export default Currency;
