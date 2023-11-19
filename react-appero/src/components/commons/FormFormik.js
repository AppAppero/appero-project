import { ErrorMessage, Form, Formik } from "formik";
import { Col, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import * as Yup from "yup";
import SearchIATA from "../home/SearchIATA";

const FormFormik = ({ buttonHidden, size, clickBottonNavigate }) => {

    const ERROR_EMPTY = "Non può essere vuoto !";
    const ERROR_MIN = "Minimo 2 caratteri !";
    const ERROR_0 = "Non può essere 0 !";
    const ERROR_NEGATIVE = "Non può essere un numero negativo!";
    const MORE_THAN = ERROR_0;

    // Formik
    const initialValues = {
        origin: "FCO",
        destination: "VLC",
        departureDate: "2023-12-04",
        returnDate: "2023-12-10",
        adults: 1,
        budget: 1,
        childrenNumber: "",
        overnightCity: ""
    }


    /**
     * Override del submit per gestire alcuni valori e inviare i parametri alla API di Amadeus
     * @param {*} values 
     * @param {*} param1 
     */

    const onSubmitOverride = (values, { setSubmitting }) => {
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
            children: values.childrenNumber === "" ? 0 : values.childrenNumber,
            infants: 0,
            nonStop: false,
            max: 20
        }

        // Disabilita il bottone del "Cerca"
        setSubmitting(true)

        clickBottonNavigate(params)

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
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmitOverride} >{(
                { values, errors, handleChange, handleSubmit, handleBlur,
                    isSubmitting, isValid, touched, dirty, setFieldValue }
            ) => (
                <Form onSubmit={handleSubmit}>
                    <Row className="bg-white p-3 rounded mt-0 gx-5">
                        <FormGroup className='row m-auto'>
                            <Col xs={12} md={4}>

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
                            <Col xs={12} md={4}>

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

                            <Col xs={12} md={4}>
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
                                        hidden={buttonHidden}
                                        type='submit'
                                        disabled={!isValid || isSubmitting}
                                        className="btn btn-md btn-outline-warning"
                                        style={{ fontWeight: "bold" }}>Cerca</button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Row>
                </Form>
            )
            }

        </Formik>
    )
}

const customErrorMessage = {
    color: "red",
    fontSize: "10px"
}


export default FormFormik
