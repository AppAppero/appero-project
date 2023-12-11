import { ErrorMessage, Form, Formik } from "formik";
import { Button, FormControl, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { getFilterHotel, searchHotel, setDetailsHotel } from "../../redux/reducerHotel";
import { PARAMS_HOTEL } from "../../utils/commons/constStorageCookie";
import { ERROR_0, ERROR_EMPTY, ERROR_MIN } from '../../utils/commons/message';

/**
 * Modal iniziale Ricerca alloggio hotel
 * @returns 
 */
const ModalFormHotel = ({ params, isOpenModal, setIsOpenModal }) => {

    const dispatch = useDispatch()
    const param_hotel = localStorage.getItem(PARAMS_HOTEL)
    // Formik
    const initialValues = { overnightCity: "", numberRoom: "" }

    // YUP
    const validationSchema = Yup.object().shape(
        {
            overnightCity: Yup.string().min(3, ERROR_MIN).required(ERROR_EMPTY),
            numberRoom: Yup.number().min(1, ERROR_0).required(ERROR_EMPTY)
        }
    )

    // Click per ricerca hotel
    const submitFormik = (paramsHotel) => {
        // Aggiorno il redux per i dettagli hotel
        dispatch(setDetailsHotel({ paramsHotel, params }))

        // Salvo nello storage i dati e li invio
        localStorage.setItem(PARAMS_HOTEL, JSON.stringify(paramsHotel))

        // Chiamate API
        let input = { params }
        dispatch(searchHotel(input, false))
        dispatch(getFilterHotel(input, false))

        // Chiudo il modal
        setIsOpenModal(false)
    }


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitFormik}>
            {({ values, errors, handleBlur, handleChange,
                handleSubmit, touched },
            ) => (
                <Modal show={isOpenModal}>
                    <ModalHeader>
                        <ModalTitle>
                            Dove vuoi alloggiare?
                        </ModalTitle>
                    </ModalHeader>

                    <ModalBody>

                        <Form>
                            <FormControl
                                type='text'
                                value={values.overnightCity}
                                name="overnightCity"
                                id="overnightCity"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder='Città di alloggio'
                                errors={errors.overnightCity}
                                style={{ border: errors.overnightCity && touched.overnightCity ? "1px solid red" : "" }}
                            />
                            <ErrorMessage name='overnightCity' component="p" />

                            <FormControl
                                className='mt-2'
                                type='number'
                                value={values.numberRoom}
                                name="numberRoom"
                                id="numberRoom"
                                placeholder='Stanze'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                errors={errors.numberRoom}
                                style={{ border: errors.numberRoom && touched.numberRoom ? "1px solid red" : "" }}
                            />
                            <ErrorMessage name='numberRoom' component="p" />

                        </Form>

                    </ModalBody>

                    <ModalFooter>
                        <Button
                            onClick={handleSubmit}
                            variant='success'
                            type='submit'
                        >Continua</Button>
                    </ModalFooter>

                </Modal>
            )}
        </Formik>
    )
}

export default ModalFormHotel