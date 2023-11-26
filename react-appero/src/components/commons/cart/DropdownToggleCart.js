import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from "react-bootstrap"

const DropdownToggleCart = ({ children, title }) => {
    return (
        <Dropdown className="text-center mt-3 p-1">
            <Row
                style={{ width: "100%" }}
                className="m-auto text-center bg-light rounded-pill p-1">
                <Col xs={6} className="mt-2 fw-bold">
                    {title}
                </Col>
                <Col xs={6} className="text-end">
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