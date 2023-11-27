import { Form, Formik } from "formik";
import { Col, FormGroup, Row } from "react-bootstrap";
import * as Yup from "yup";
import { CURRENCY } from "../../../utils/constStorageCookie";
import {
    ERROR_DATE, ERROR_DATE_RETURN,
    ERROR_DATE_TODAY,
    ERROR_EMPTY,
    ERROR_MAX_ADULTS,
    ERROR_MIN,
    ERROR_MIN_ADULTS,
    ERROR_NEGATIVE,
    ERROR_REQUIRED_ADULTS,
    MESSAGE_INFO_ADULTS,
    MESSAGE_INFO_BUDGET,
    MESSAGE_INFO_CHILDREN, MESSAGE_INFO_INFANTS, MORE_THAN
} from "../../../utils/message";
import SearchIATA from "../../home/SearchIATA";
import SingleInput from "./SingleInput";

const FormFormik = ({ buttonHidden, size, clickBottonNavigate }) => {

    // Formik
    const initialValues = {
        origin: "BRI",
        destination: "VLC",
        departureDate: "2023-12-04",
        returnDate: "2023-12-10",
        adults: 1,
        budget: 500,
        childrenNumber: "",
        infants: "",
        overnightStayCity: ""
    }

    /*  const initialValues = {
         origin: "",
         destination: "",
         departureDate: "",
         returnDate: "",
         adults: "",
         budget: "",
         infants: "",
         childrenNumber: "",
         overnightStayCity: ""
     }*/


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
            currencyCode: localStorage.getItem(CURRENCY),
            maxPrice: values.budget,
            children: values.childrenNumber === "" ? 0 : values.childrenNumber,
            infants: values.infants === "" ? 0 : values.infants,
            // nonStop: false,
            max: 20
        }

        // Disabilita il bottone del "Cerca"
        setSubmitting(true)

        let otherParams = { budget: values.budget, overnightStayCity: values.overnightStayCity }
        clickBottonNavigate(params, otherParams)

    }


    // YUP
    const today = new Date();
    const validationSchema = Yup.object().shape(
        {
            origin: Yup.string().min(2, ERROR_MIN).required(ERROR_EMPTY),

            destination: Yup.string().min(2, ERROR_MIN).required(ERROR_EMPTY),

            departureDate: Yup.date()
                .min(today, ERROR_DATE_TODAY)
                .required(ERROR_DATE + "partenza"),

            returnDate: Yup.date()
                .min(Yup.ref("departureDate"), ERROR_DATE_RETURN)
                .required(ERROR_DATE + "ritorno"),

            budget: Yup.number()
                .min(process.env.REACT_APP_MIN_BUDGET, MORE_THAN)
                .positive(ERROR_NEGATIVE)
                .required(ERROR_EMPTY),

            // overnightStayCity: Yup.string()
            //     .min(2, ERROR_MIN)
            //     .required(ERROR_EMPTY),

            adults: Yup.number()
                .min(1, ERROR_MIN_ADULTS)
                .max(9, ERROR_MAX_ADULTS)
                .required(ERROR_REQUIRED_ADULTS),

            childrenNumber: Yup.number()
                .min(0, MESSAGE_INFO_CHILDREN)
                .max(9, MESSAGE_INFO_CHILDREN),
            //     .when("adults", {
            //         is: (adults) => Yup.number().isType(adults) && adults > 0,
            //         then: Yup.number().min(1, "Deve esserci almeno un bambino quando ci sono adulti."),
            //     }),

            infants: Yup.number()
                .min(0, MESSAGE_INFO_INFANTS)
            //     .when(["adults", "childrenNumber"], {
            //         is: (adults, childrenNumber) => Yup.number().isType(adults) > 0 || Yup.number().isType(childrenNumber) > 0,
            //         then: Yup.number().max(Yup.ref("adults"), "Il numero di neonati non deve superare il numero di adulti."),
            //     }),
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
                                    value={values.departureDate}
                                    nameValue="departureDate"
                                    nameInput="Data di partenza"
                                    handleChange={handleChange}
                                    errors={errors.departureDate}
                                    touched={touched.departureDate}
                                />

                            </Col>


                            <Col xs={12} md={4}>


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
                                    isInfo={true}
                                    messageInfo={MESSAGE_INFO_BUDGET}
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
                                    isInfo={true}
                                    messageInfo={MESSAGE_INFO_ADULTS}
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
                                    isInfo={true}
                                    messageInfo={MESSAGE_INFO_CHILDREN}
                                />

                                <SingleInput
                                    labelUp={false}
                                    disabled={values.adults <= 0}
                                    type='number'
                                    value={values.infants}
                                    nameValue="infants"
                                    nameInput="Neonati"
                                    handleChange={handleChange}
                                    errors={errors.infants}
                                    onBlur={handleBlur}
                                    touched={touched.infants}
                                    isInfo={true}
                                    messageInfo={MESSAGE_INFO_INFANTS}
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

        </Formik >
    )
}


export default FormFormik
