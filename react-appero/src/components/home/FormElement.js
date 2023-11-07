import { ErrorMessage, Form, Formik } from "formik";
import React from 'react';
import { Col, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import SearchIATA from "./SearchIATA";
import { useNavigate } from "react-router-dom";

const ERROR_EMPTY = "Non può essere vuoto !";
const ERROR_MIN = "Minimo 2 caratteri !";
const ERROR_0 = "Non può essere 0 !";
const ERROR_NEGATIVE = "Non può essere un numero negativo!";
const MORE_THAN = ERROR_0;

const FormElement = ({ sizeGlobal }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const stateFlights = useSelector(state => state.reducerFlight)
    const { loading } = stateFlights;

    const { size } = sizeGlobal;

    // Formik
    const initialValues = {
        origin: "BRI",
        destination: "FCO",
        departureDate: "2023-11-12",
        returnDate: "2023-11-13",
        adults: 1,
        budget: 1,
        childrenNumber: "",
        overnightCity: ""
    }


    const onSub = (values, { setSubmitting }) => {
        let originLocationCode = values.origin.slice(-3)
        let destinationLocationCode = values.destination.slice(-3)
        let params =
        {
            originLocationCode, destinationLocationCode,
            departureDate: values.departureDate,
            returnDate: values.returnDate,
            adults: values.adults,
            currencyCode: localStorage.getItem("currentCodCurrency"),
            maxPrice: values.budget,
            // nonStop:false,
            max: 250
        }

        // Disabilita il bottone del "Cerca"
        setSubmitting(true)

        /**
         * Va nella nuova pagina dei voli:con {state{...}} passo gli oggetti nello state altrimenti : 
         * Serializza l'oggetto params in una stringa JSON const paramsString :
         * JSON.stringify(params);
         * 
         * */
        navigate("flight", { state: { params } })


        // setTimeout(() => {
        //     setSubmitting(false)
        // }, 1000)
    }


    // YUP
    const today = new Date();
    const validationSchema = Yup.object(
        {
            origin: Yup.string().min(2, ERROR_MIN).required(ERROR_EMPTY),
            destination: Yup.string().min(2, ERROR_MIN).required(ERROR_EMPTY),
            departureDate: Yup.date()
                .min(today, "La data di partenza non può essere antecedente a oggi")
                .required("Devi inserire una data di partenza"),
            returnDate: Yup.date()
                .min(Yup.ref("departureDate"), "La data di ritorno deve essere maggiore o uguale alla data di partenza")
                .required("Devi inserire una data di ritorno"),
            budget: Yup.number().min(1, ERROR_0)
                .moreThan(0, MORE_THAN)
                .positive(ERROR_NEGATIVE)
                .required(ERROR_EMPTY),
            adults: Yup.number().min(1, ERROR_0).required(ERROR_EMPTY),
            overnightCity: Yup.string().min(2, ERROR_MIN)
            // childrenNumber: Yup.number().when("adults",
            //     {
            //         is: (adults) => adults > 0,
            //         then: Yup.number().min(1, "Deve esserci almeno un bambino quando ci sono adulti"),
            //         otherwise: Yup.number().min(0, "Il numero di bambini deve essere 0 quando non ci sono adulti"),
            //     }
            // )
        }
    )

    return (
        <div
            className="justify-content-center align-items-center "
            style={{ ...formStyle, margin: !size.isMobile ? "120px auto 0 auto" : "50px auto 0 auto" }}>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSub} >{(
                            { values, errors, handleChange, handleSubmit, handleBlur,
                                isSubmitting, isValid, touched, dirty, setFieldValue }
                        ) => (
                            <Form onSubmit={handleSubmit}>
                                <div className="bg-white p-3 rounded mt-0">
                                    <FormGroup className='row m-auto'>
                                        <Col xs={6} sm={6} md={4}>

                                            {/* Custom component: Per Gestire meglio l'autocompletamento dei codIATA */}
                                            <SearchIATA
                                                size={size}
                                                values={values.origin}
                                                onBlur={handleBlur}
                                                errors={errors.origin}
                                                setFieldValue={setFieldValue}
                                                touched={touched.origin}
                                                placeholder='Partenza'
                                                name='origin' />

                                            <ErrorMessage name='origin' component="p" style={customErrorMessage} />

                                            {size.isMobile && <FormLabel style={{ fontSize: "13px" }}>Data di partenza</FormLabel>}
                                            <FormControl
                                                placeholder='Data di partenza'
                                                className='mt-2'
                                                value={values.departureDate}
                                                type="date"
                                                id="departureDate"
                                                name="departureDate"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                style={{ border: errors.departureDate && touched.departureDate ? "1px solid red" : "" }}
                                            />
                                            <ErrorMessage name='departureDate' component="p" style={customErrorMessage} />


                                        </Col>
                                        <Col xs={6} sm={6} md={4}>

                                            {/* Custom component: Per Gestire meglio l'autocompletamento dei codIATA */}
                                            <SearchIATA
                                                size={size}
                                                values={values.destination}
                                                onBlur={handleBlur}
                                                errors={errors.destination}
                                                setFieldValue={setFieldValue}
                                                touched={touched.destination}
                                                placeholder='Destinazione'
                                                name='destination' />
                                            <ErrorMessage name='destination' component="p" style={customErrorMessage} />

                                            {size.isMobile && <FormLabel style={{ fontSize: "13px" }}>Data di ritorno</FormLabel>}
                                            <FormControl
                                                placeholder='Data di ritorno'
                                                className='mt-2'
                                                type="date"
                                                id="returnDate"
                                                name="returnDate"
                                                value={values.returnDate}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                style={{ border: errors.returnDate && touched.returnDate ? "1px solid red" : "" }}

                                            />
                                            <ErrorMessage name='returnDate' component="p" style={customErrorMessage} />

                                        </Col>

                                        <Col xs={6} sm={5} md={2}>
                                            <FormControl
                                                className='mt-2'
                                                placeholder='Adulti'
                                                type='number'
                                                id="adults"
                                                name="adults"
                                                value={values.adults}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                style={{ border: errors.adults && touched.adults ? "1px solid red" : "" }}

                                            />
                                            <ErrorMessage name='adults' component="p" style={customErrorMessage} />

                                            <FormControl
                                                disabled={values.adults <= 0}
                                                className='mt-2'
                                                placeholder='Bambini'
                                                type='number'
                                                id="childrenNumber"
                                                name="childrenNumber"
                                                value={values.childrenNumber}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name='childrenNumber' />
                                        </Col>

                                        <Col xs={6} sm={5} md={2}>
                                            <FormControl
                                                className='mt-2'
                                                placeholder='Budget'
                                                type='number'
                                                id="budget"
                                                name="budget"
                                                value={values.budget}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                style={{ border: errors.budget && touched.budget ? "1px solid red" : "" }}
                                            />
                                            <ErrorMessage name='budget' component="p" style={customErrorMessage} />
                                        </Col>


                                        {/* <Col xs={6} sm={5} md={2}>
                                            <FormControl
                                                className='mt-2'
                                                placeholder='C'
                                                type='text'
                                                id="overnightCity"
                                                name="overnightCity"
                                                value={values.budget}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name='overnightCity'/>
                                        </Col> */}

                                        <Row className='justify-content-center align-items-center'>
                                            <Col xs={6} sm={5} md={3} className="mt-2">
                                                <button
                                                    type='submit'
                                                    disabled={!isValid || isSubmitting}
                                                    className="btn btn-md btn-outline-warning"
                                                    style={{ fontWeight: "bold" }}>Cerca</button>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </div>
                            </Form>
                        )
                        }

                    </Formik>
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


const customErrorMessage = {
    color: "red",
    fontSize: "10px"
}

/* const inputForm = {
     marginLeft: "10px",
     padding: "0.375rem 0.75rem",
     color: "var(--bs-body-color)",
     width: "200px",
     borderRadius: "var(--bs-border-radius)",
     border: "var(--bs-border-width) solid var(--bs-border-color)"
 }*/


export default FormElement;
