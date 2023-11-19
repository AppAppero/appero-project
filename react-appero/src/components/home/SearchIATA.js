import { useState } from "react";
import { FormControl, Row } from "react-bootstrap";
import codeIATA from "../../utils/codeIATA";

//** PopUp per la ricerca delle città mentre si compila il form */
const SearchIATA = ({
    size,
    onBlur,
    values,
    touched,
    placeholder,
    name,
    setFieldValue,
    errors }) => {

    const [showSearch, setShowSearch] = useState(false)
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = (e, setFieldValue) => {
        const { value, name } = e.target;
        //Filtra la lista degli IATA
        const filteredResults =
            codeIATA.filter(item =>
                Object.values(item)[0].toLowerCase().includes(value.toLowerCase()));

        //La setta nel modello da visualizzare
        setSearchResults(filteredResults);
        setShowSearch(true)
        // Utile per l'override di handleChange di formik
        setFieldValue(name, value);
    };

    const clickRowIATA = (name, el) => {
        // Una volta cliccato, setta l'input in base a quello cliccato
        setFieldValue(name,
            Object.values(el)[0].toString() + " - " + Object.keys(el)[0].toString())
        setShowSearch(false)
    }

    return (
        <>
            <FormControl
                autoComplete="off"
                className='mt-2'
                placeholder={placeholder}
                value={values}
                type="text"
                onBlur={onBlur}
                onChange={(e) => handleInputChange(e, setFieldValue)}
                id={name}
                name={name}
                style={{ border: errors && touched ? "1px solid red" : "" }}
            />
            {showSearch && searchResults?.length > 0 && (
                <div style={{ ...search, width: size.isMobile ? "80%" : "60%" }}>
                    {searchResults.map((el, index) => (
                        <Row
                            onClick={() => clickRowIATA(name, el)}
                            style={{ color: "white", cursor: "pointer", fontSize: "14px" }}
                            key={index}>{`${Object.values(el)[0]} - ${Object.keys(el)[0]}`}
                        </Row>
                    ))}
                </div>
            )}
        </>
    )
}

const search = {
    position: "absolute",
    background: 'rgba(0, 0, 0, 0.8)',
    padding: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
    border: "1px solid #ccc",
    maxHeight: "180px",
    overflow: "auto",
    zIndex: 1
}

export default SearchIATA;