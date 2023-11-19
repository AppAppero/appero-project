import { Col, Row } from "react-bootstrap";

const ErrorElement = ({ children }) => {
    return (
        <Row>
            <Col sm={12} className="text-center">
                <h4 className="text-danger fw-bold">{children}</h4>
            </Col>
        </Row>
    )
}
export default ErrorElement;