import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import HeaderDetail from "../components/commons/HeaderDetail";
import ContentHotel from "../components/hotel/ContentHotel";
import HeaderFilterHotel from "../components/hotel/HeaderFilterHotel";
import ModalFormHotel from '../components/hotel/ModalFormHotel';
import { useGlobalContext } from '../context/context';
import useTitle from '../hook/useTitle';
import { setDetailsHotel } from "../redux/reducerHotel";
import { PARAMS_HOTEL } from '../utils/commons/constStorageCookie';
import RefreshDetailHotel from '../components/hotel/RefreshDetailHotel';

const Hotel = () => {
  useTitle("Hotel")
  const dispatch = useDispatch()
  const { headerDetailHotel } = useSelector(state => state.reducerHotel)
  const { params, setContext } = useGlobalContext()
  const [isOpenModal, setIsOpenModal] = useState(true);


  // Utilizzato per il refresh .. recupera dallo storage i dettagli e aggiorna lo stato redux 
  useEffect(() => {
    setContext("hotel")
    if (localStorage.getItem(PARAMS_HOTEL)) {
      setIsOpenModal(false)
      const paramsHotel = JSON.parse(localStorage.getItem(PARAMS_HOTEL));
      dispatch(setDetailsHotel({ paramsHotel, params }));
    }
  }, [])

  return (
    <>
      <ModalFormHotel
        params={params}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal} />

      <HeaderDetail details={headerDetailHotel} />
      <RefreshDetailHotel params={params} />

      <HeaderFilterHotel />
      <ContentHotel />
    </>
  )
}

export default Hotel
