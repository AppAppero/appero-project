import { Col, Row } from "react-bootstrap"

const TitleContent = ({ isLoading, isError, title }) => {
    return (
        !isLoading && !isError &&
        <Row className='fw-bold fs-4 lh-1.5 text-dark mt-2'>
            <Col>{title}</Col>
        </Row>
    )
}

export default TitleContent