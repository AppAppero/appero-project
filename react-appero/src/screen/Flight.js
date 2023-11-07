import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { searchFlightAmadeus } from '../redux/reducerFlight'

/**
 * Pagina per i voli
 * 
 * @returns 
 */
const Flight = () => {
    // Con useLocation recupero lo state per evitare di passare tutto nell'url
    const { params } = useLocation().state
    const dispatch = useDispatch()
    const reducerFlight = useSelector(state => state.reducerFlight)
    const { flights, isLoading, isError, messageError } = reducerFlight;

    /** useEffect(() => {
         dispatch(searchFlightAmadeus(params))
     }, []) */


    return (
        <div>

        </div>
    )
}

export default Flight
