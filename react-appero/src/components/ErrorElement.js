import { Col, Row } from "react-bootstrap";

const ErrorElement = ({ children }) => {
    return (
        <Row>
            <Col sm={12} style={{ textAlign: "center" }}>
                <h4 style={styleMessage}>{children}</h4>
            </Col>
        </Row>
    )
}
const styleMessage = {
    color: "red",
    fontWeight: "bold"
}
export default ErrorElement;