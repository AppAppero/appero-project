import { useEffect, useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useGlobalContext } from "../../context/context"

const NavigateButton = ({ action }) => {
    const [objButton, setObjButton] = useState({})
    const { context, setContext, params } = useGlobalContext()

    const navigate = useNavigate()

    const clickButton = () => {
        let path = "/" + objButton.path;
        setContext(context)
        navigate(path, { state: { params } })
    }

    useEffect(() => {
        let path = ""
        if (action === "preview") {
            if (context === "flight")
                path = ""

            if (context === "hotel")
                path = "travel/flight"

            if (context === "render")
                path = "travel/hotel"

            if (context === "attraction")
                path = "travel/render"

            setObjButton({ path, colorType: "warning", title: "Indietro" })

        } else if (action === "next") {
            if (context === "flight")
                path = "travel/hotel"

            if (context === "hotel")
                path = "travel/render"

            if (context === "render")
                path = "travel/attraction"

            setObjButton({ path, colorType: "success", title: "Avanti" })
        }

    }, [action, context])

    return (
        <Col >
            <Button
                onClick={clickButton}
                variant={objButton.colorType}>
                <Row>
                    {
                        action === "preview" &&
                        <Col>
                            <FaArrowCircleLeft className="text-start text-white" />
                        </Col>
                    }
                    {/* <Col style={{ fontSize: "12px" }}>
                        {objButton.title}
                    </Col> */}
                    {
                        action === "next" &&
                        <Col>
                            <FaArrowCircleRight className="text-end" />
                        </Col>
                    }
                </Row>
            </Button>
        </Col>
    )
}

export default NavigateButton