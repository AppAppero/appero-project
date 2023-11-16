import React from 'react';
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormFormik from '../FormFormik';

const FormElement = ({ sizeGlobal }) => {

    const navigate = useNavigate()

    const { size } = sizeGlobal;

    const clickBottonNavigate = (params) => {
        /**
           * Va nella nuova pagina dei voli:con {state{...}} passo gli oggetti nello state altrimenti : 
           * Serializza l'oggetto params in una stringa JSON const paramsString :
           * JSON.stringify(params);
           * 
           * */
        navigate("flight", { state: { params } })
    }

    return (
        <div
            className="justify-content-center align-items-center "
            style={{ ...formStyle, margin: !size.isMobile ? "120px auto 0 auto" : "50px auto 0 auto" }}>
            <Row>
                <Col xs={12}>
                    <FormFormik
                        buttonHidden={false}
                        size={size}
                        clickBottonNavigate={clickBottonNavigate} />
                </Col>
            </Row>
        </div>
    );
};


const formStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: "20px",
    width: "90%",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
};

/* const inputForm = {
     marginLeft: "10px",
     padding: "0.375rem 0.75rem",
     color: "var(--bs-body-color)",
     width: "200px",
     borderRadius: "var(--bs-border-radius)",
     border: "var(--bs-border-width) solid var(--bs-border-color)"
 }*/


export default FormElement;
