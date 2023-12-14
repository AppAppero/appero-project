import { useEffect, useState } from "react";
import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from "react-bootstrap"

const DropdownToggleCart = ({ children, title, itinerary }) => {

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        switch (title) {
            case "Volo": {
                setTotalPrice(itinerary?.flight?.price?.grandTotal)
                break;
            }
            case "Hotel": {
                setTotalPrice(itinerary?.hotel?.totalPrice)
                break;
            }
        }
    }, [children])

    return (
        <Dropdown className="text-center mt-3 p-1">
            <Row
                style={{ width: "100%" }}
                className="m-auto text-center bg-light rounded-pill p-1">
                <Col xs={3} className="mt-2 fw-bold">
                    {title}
                </Col>
                <Col xs={6} style={{ fontSize: "16px" }}
                    className="text-success fw-bold text-center p-1 mt-1">
                    {totalPrice} €
                </Col>
                <Col xs={3} className="text-end">
                    <DropdownToggle variant="warning" />
                </Col>
            </Row>

            <DropdownMenu className="p-0 mt-2"
                style={{ width: '100%' }}>
                {children}
            </DropdownMenu>

        </Dropdown>
    )
}

export default DropdownToggleCart