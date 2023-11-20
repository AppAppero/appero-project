import React from 'react';
import { Col, Row } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { updateBudget } from '../../redux/reducerItinerary';
import FormFormik from '../commons/form/FormFormik';

const FormElement = ({ sizeGlobal }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { size } = sizeGlobal;

    const clickBottonNavigate = (params) => {
        // Aggiorna direttamente il budget
        dispatch(updateBudget(parseFloat(params?.maxPrice)))
        /**
           * Va nella nuova pagina dei voli:con {state{...}} passo gli oggetti nello state altrimenti : 
           * Serializza l'oggetto params in una stringa JSON const paramsString :
           * JSON.stringify(params);
           * 
           * */
        navigate("flight", { state: { params } })
    }

    return (
        <Row className="text-center justify-content-center align-items-center"
            style={{ margin: !size.isMobile ? "120px auto 0 auto" : "50px auto 0 auto" }}>
            <Col xs={12} sm={11} className='shadow-sm bg-white bg-opacity-50 rounded-3' style={{ padding: "20px 40px 20px 40px" }}>
                <Col xs={12}>
                    <FormFormik
                        buttonHidden={false}
                        size={size}
                        clickBottonNavigate={clickBottonNavigate} />
                </Col>
            </Col>
        </Row>
    );

};

export default FormElement;
