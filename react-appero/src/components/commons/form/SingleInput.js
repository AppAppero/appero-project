import { ErrorMessage } from "formik";
import { memo, useState } from "react";
import { Col, FormControl, FormLabel, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { FcInfo } from "react-icons/fc";

const SingleInput = memo((
    {
        labelUp,
        disabled,
        value,
        nameValue,
        nameInput,
        type,
        handleChange,
        errors,
        onBlur,
        touched,
        isInfo,
        messageInfo,
        isCheck,
        messageCheck,
        param,
        setFieldValue,
    }) => {

    const [isFocused, setIsFocused] = useState(false);
    const [isChecked, setChecked] = useState(false);

    // Per la città di alloggio se è uguale a quella della destinazione
    const checkValue = () => {
        if (isChecked) {
            setFieldValue(nameValue, param);  // Usa setFieldValue direttamente dal form
            return param
        }
        return value
    }


    // Per il min di budget
    const checkBudget = () => {
        return nameValue === "budget" ? 300 : ""
    }

    const tooltip = (
        <Tooltip id="tooltip">{messageInfo}</Tooltip>
    );

    return (
        <>
            <Row className="gx-0">
                <Col xs={10}
                    className={`input-container ${isFocused ? 'focused' : ''}`}>
                    <FormLabel
                        className={labelUp || isFocused || value ? 'label-up bg-white' : ''}>
                        {nameInput}
                    </FormLabel>
                    <FormControl
                        autoComplete="off"
                        className="mt-3"
                        disabled={disabled}
                        type={type}
                        id={nameValue}
                        name={nameValue}
                        min={checkBudget()}
                        value={checkValue()}
                        onFocus={() => setIsFocused(true)}
                        onChange={handleChange}
                        onBlur={onBlur}
                        style={{ border: errors && touched ? "1px solid red" : "" }}
                    />
                </Col>

                {isInfo &&
                    <Col xs={2} style={{ marginTop: "20px" }}>

                        <OverlayTrigger overlay={tooltip} placement="top">
                            <div><FcInfo size={15} /></div>
                        </OverlayTrigger>

                    </Col>
                }

            </Row>
            {isCheck &&
                <Row className="m-0 p-0 gx-0">
                    <Col className="text-start" xs={1}>
                        <input type="checkbox"
                            checked={isChecked}
                            onChange={() => {
                                setChecked(!isChecked);
                                setFieldValue(nameValue, !isChecked ? param : value);
                            }}
                        />
                    </Col>
                    <Col className="text-start" xs={11} style={{ marginTop: "3px", fontSize: "12px" }}>
                        {messageCheck}
                    </Col>
                </Row>
            }

            <Row>
                <Col>
                    <ErrorMessage
                        name={nameValue}
                        component="p"
                        style={customErrorMessage}
                    />
                </Col>
            </Row>
        </>
    )
})


const customErrorMessage = {
    color: "red",
    fontSize: "10px"
}
export default SingleInput