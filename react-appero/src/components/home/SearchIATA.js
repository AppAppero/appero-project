import { memo, useState } from "react";
import { Col, Row } from "react-bootstrap";
import codeIATA from "../../utils/codeIATA";
import { nameCityByIATA } from "../../utils/formatState";
import SingleInput from "./form/SingleInput";


//** PopUp per la ricerca delle città mentre si compila il form */
const SearchIATA = memo(({
    size,
    values,
    placeholder,
    name,
    setFieldValue,
    errors,
    onBlur,
    touched
}) => {

    const [showSearch, setShowSearch] = useState(false)
    const [searchResults, setSearchResults] = useState([]);


    const handleInputChange = async (e, setFieldValue) => {
        const { value, name } = e.target;
        if (value.length >= 3) {
            //Filtra la lista degli IATA
            const filteredResults = codeIATA.filter(item =>
                Object.values(item)[0].toLowerCase().includes(value.toLowerCase()));

            //La setta nel modello da visualizzare
            setSearchResults(filteredResults);
            setShowSearch(true)

        }
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
            <SingleInput
                touched={touched}
                onBlur={onBlur}
                labelUp={false}
                type="text"
                nameValue={name}
                value={values}
                handleChange={(e) => handleInputChange(e, setFieldValue)}
                nameInput={placeholder}
                errors={errors}
            />
            {showSearch && searchResults?.length > 0 && (
                <div style={{ ...search, width: size.isMobile ? "80%" : "60%" }}>
                    {searchResults.map((el, index) => (
                        <Row
                            onClick={() => clickRowIATA(name, el)}
                            className="text-white mt-1"
                            style={{
                                border: "1px solid gray",
                                cursor: "pointer",
                                fontSize: "14px",
                                textAlign: "justify"
                            }}
                            key={index}>
                            <Col xs={8}>
                                {nameCityByIATA(Object.keys(el)[0])}

                            </Col>
                            <Col xs={2}>
                                {Object.keys(el)[0]}
                            </Col>
                        </Row>
                    ))}
                </div>
            )}
        </>
    )
})


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