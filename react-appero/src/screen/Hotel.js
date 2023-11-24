import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/context'
import useTitle from '../hook/useTitle'

const Hotel = () => {
  useTitle("Hotel")
  const { context, setContext } = useGlobalContext()

  useEffect(() => {
    setContext("hotel")
  }, [])

  return (
    <></>
  )
}

export default Hotel
