import { ErrorMessage, Form, Formik } from "formik";
import { Col, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import * as Yup from "yup";
import SearchIATA from "../../home/SearchIATA";
import SingleInput from "./SingleInput";

const FormFormik = ({ buttonHidden, size, clickBottonNavigate }) => {


    const ERROR_EMPTY = "Non può essere vuoto !";
    const ERROR_MIN = "Minimo 2 caratteri !";
    const ERROR_0 = "Non può essere 0 !";
    const ERROR_NEGATIVE = "Non può essere un numero negativo!";
    const MORE_THAN = ERROR_0;

    // Formik
    /*const initialValues = {
        origin: "BRI",
        destination: "VLC",
        departureDate: "2023-11-27",
        returnDate: "2023-12-03",
        adults: "1",
        budget: "1000",
        childrenNumber: "0"
    }*/

    const initialValues = {
        origin: "",
        destination: "",
        departureDate: "",
        returnDate: "",
        adults: "",
        budget: "",
        childrenNumber: ""
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
            // maxPrice: values.budget,
            children: values.childrenNumber === "" ? 0 : values.childrenNumber,
            infants: 0,
            // nonStop: false,
            max: 20
        }

        // Disabilita il bottone del "Cerca"
        setSubmitting(true)

        clickBottonNavigate(params, values.budget)

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
            adults: Yup.number().min(1, ERROR_0).required(ERROR_EMPTY)
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
                                    setFieldValue={setFieldValue}
                                    placeholder='Partenza'
                                    name='origin'
                                    errors={errors.origin}
                                    touched={touched.origin}
                                />

                                <SingleInput
                                    labelUp={true}
                                    type='date'
                                    onBlur={handleBlur}
                                    value={values.departureDate}
                                    nameValue="departureDate"
                                    nameInput="Data di partenza"
                                    handleChange={handleChange}
                                    errors={errors.departureDate}
                                    touched={touched.departureDate}
                                />

                            </Col>
                            <Col xs={12} md={4}>

                                {/* Custom component: Per Gestire meglio l'autocompletamento dei codIATA */}
                                <SearchIATA
                                    size={size}
                                    values={values.destination}
                                    onBlur={handleBlur}
                                    setFieldValue={setFieldValue}
                                    placeholder='Destinazione'
                                    name='destination'
                                    errors={errors.destination}
                                    touched={touched.destination}
                                />

                                <SingleInput
                                    labelUp={true}
                                    type='date'
                                    onBlur={handleBlur}
                                    value={values.returnDate}
                                    nameValue="returnDate"
                                    nameInput="Data di ritorno"
                                    handleChange={handleChange}
                                    errors={errors.returnDate}
                                    touched={touched.returnDate}
                                />

                            </Col>

                            <Col xs={12} md={4}>
                                <SingleInput
                                    labelUp={false}
                                    type='number'
                                    value={values.adults}
                                    nameValue="adults"
                                    nameInput="Adulti"
                                    handleChange={handleChange}
                                    errors={errors.adults}
                                    onBlur={handleBlur}
                                    touched={touched.adults}
                                />

                                <SingleInput
                                    labelUp={false}
                                    disabled={values.adults <= 0}
                                    type='number'
                                    value={values.childrenNumber}
                                    nameValue="childrenNumber"
                                    nameInput="Bambini"
                                    handleChange={handleChange}
                                    errors={errors.childrenNumber}
                                    onBlur={handleBlur}
                                    touched={touched.childrenNumber}
                                />

                                <SingleInput
                                    labelUp={false}
                                    type='number'
                                    value={values.budget}
                                    nameValue="budget"
                                    nameInput="Budget"
                                    handleChange={handleChange}
                                    errors={errors.budget}
                                    onBlur={handleBlur}
                                    touched={touched.budget}
                                />

                            </Col>

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


export default FormFormik
