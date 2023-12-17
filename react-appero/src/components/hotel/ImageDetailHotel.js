import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const ImageDetailHotel = ({ rooms }) => {
    const size = 20;
    const [selected, setSelected] = useState(0);
    const [image, setImage] = useState();

    const clickNextImage = () => {
        setSelected(selected + 1);
    };

    const clickPreviewImage = () => {
        setSelected(selected - 1);
    };

    useEffect(() => {
        if (selected === rooms?.photos?.length) setSelected(0);
        else if (selected < 0) setSelected(rooms?.photos?.length - 1);

        setImage(rooms?.photos[selected]?.urlMax1280);
    }, [selected, rooms]);

    return (
        <>
            <Row>
                <Col>
                    <img
                        style={{ width: "100%", borderRadius: "10px" }}
                        src={image}
                        alt={`Room ${selected + 1}`}
                    />
                </Col>
            </Row>
            <Row className="gx-2 mt-2">
                <Col xs={5} className="text-end">
                    <ButtonImage click_button={clickPreviewImage}>
                        <FaArrowAltCircleLeft size={size} />
                    </ButtonImage>
                </Col>
                <Col xs={2} className="text-center mt-2 fw-bold">
                    {selected + 1}/{rooms?.photos?.length}
                </Col>
                <Col xs={5} className="text-start">
                    <ButtonImage click_button={clickNextImage}>
                        <FaArrowAltCircleRight size={size} />
                    </ButtonImage>
                </Col>
            </Row>
        </>
    );
};

const ButtonImage = ({ children, click_button }) => {
    return (
        <Button onClick={click_button} className="btn-light">
            {children}
        </Button>
    );
};

export default ImageDetailHotel;
