import { useEffect } from "react"
import { useGlobalContext } from "../context/context"

const Render = () => {
    const { context, setContext } = useGlobalContext()

    useEffect(() => {
        setContext("render")
    }, [])

    return (<></>)
}
export default Render