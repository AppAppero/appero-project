import { ErrorMessage, Form, Formik } from "formik";
import React, { useEffect, useState } from 'react';
import { Button, FormControl, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import { BiSolidUser } from 'react-icons/bi';
import { BsCalendar3 } from 'react-icons/bs';
import { SiGooglemaps } from 'react-icons/si';
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import HeaderDetail from "../components/commons/HeaderDetail";
import ContentHotel from "../components/hotel/ContentHotel";
import HeaderFilterHotel from "../components/hotel/HeaderFilterHotel";
import { useGlobalContext } from '../context/context';
import useTitle from '../hook/useTitle';
import { getFilterHotel, searchHotel, setDetailsHotel } from "../redux/reducerHotel";
import { PARAMS_HOTEL } from '../utils/constStorageCookie';
import { checkTextCalculateDate, checkTextDate, checkTextPerson } from "../utils/formatState";
import { ERROR_0, ERROR_EMPTY, ERROR_MIN } from '../utils/message';

/**
 * Modal iniziale Ricerca alloggio hotel
 * @returns 
 */
const Hotel = () => {
  useTitle("Hotel")
  const dispatch = useDispatch()
  const sizeIcon = 12
  const reducerHotel = useSelector(state => state.reducerHotel)
  const { params, setContext } = useGlobalContext()
  const [isOpenModal, setIsOpenModal] = useState(true);
  const { detailsHotel } = reducerHotel;

  const generateStringRoom = () => {
    return detailsHotel?.numberRoom === 1 ?
      detailsHotel?.numberRoom + " Stanza" : detailsHotel?.numberRoom + " Stanze"
  }

  const hotelDetails = [
    {
      title: "Destinazione/hotel struttura",
      detail: [
        {
          icon: <SiGooglemaps size={sizeIcon} />,
          text: detailsHotel?.overnightCity
        }
      ]
    },
    {

      title: "Check-in - Check-out",
      detail: [
        {
          icon: <BsCalendar3 size={sizeIcon} />,
          text: checkTextDate(params)
        }
      ]
    },
    {
      title: "Soggiorno di " + checkTextCalculateDate(params),
      detail: [
        {
          icon: <BiSolidUser size={sizeIcon} />,
          text: checkTextPerson(params) + " - " + generateStringRoom()
        }
      ]
    }
  ]

  useEffect(() => {
    setContext("hotel")
    if (localStorage.getItem(PARAMS_HOTEL)) {
      setIsOpenModal(false)
      dispatch(setDetailsHotel(JSON.parse(localStorage.getItem(PARAMS_HOTEL))))
    }
  }, [])

  return (
    <>
      <ModalFormHotel
        params={params}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal} />

      <HeaderDetail details={hotelDetails} />
      <HeaderFilterHotel />
      <ContentHotel detailsHotel={detailsHotel} />
    </>
  )
}


const ModalFormHotel = ({ params, isOpenModal, setIsOpenModal }) => {

  const dispatch = useDispatch()
  const { paramsHotel, setParamsHotel } = useGlobalContext()
  let { actualBudget } = useSelector(state => state.reducerItinerary)


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
  const submitFormik = (values) => {
    dispatch(setDetailsHotel(values))
    // Salvo nello storage i dati e li invio
    localStorage.setItem(PARAMS_HOTEL, JSON.stringify(values))

    // Check ed invio chiamata API 
    dispatch(searchHotel(paramsHotel, false, setParamsHotel))
    dispatch(getFilterHotel(paramsHotel, false, setParamsHotel))

    // Chiudo il modal
    setIsOpenModal(false)
  }

  // Create Pramas Hotel
  useEffect(() => {
    setParamsHotel(
      {
        departureDate: params.departureDate,
        returnDate: params.returnDate,
        adults: params.adults,
        ageChildren: undefined,
        currencyCode: params.currencyCode,
        lang: "IT",
        actualBudget: parseFloat(actualBudget),
        categoriesFilter: []
      }
    )
  }, [])

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

export default Hotel
