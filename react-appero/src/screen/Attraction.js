import { useEffect } from "react"
import { useGlobalContext } from "../context/context"

const Attraction = () => {
    const { context, setContext } = useGlobalContext()

    useEffect(() => {
        setContext("attraction")
    }, [])


    return (<></>)
}
export default Attraction