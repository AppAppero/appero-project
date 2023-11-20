import { ErrorMessage } from "formik";
import { memo, useState } from "react";
import { Col, FormControl, FormLabel } from "react-bootstrap";
import "../../../css/form.css";

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
        touched
    }) => {

    const [isFocused, setIsFocused] = useState(false);

    return (
        <>
            <Col className={`input-container ${isFocused ? 'focused' : ''}`}>
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
                    value={value}
                    onFocus={() => setIsFocused(true)}
                    onChange={handleChange}
                    onBlur={onBlur}
                    style={{ border: errors && touched ? "1px solid red" : "" }}
                />
            </Col>
            <ErrorMessage
                name={nameValue}
                component="p"
                style={customErrorMessage}
            />

        </>
    )
})
const customErrorMessage = {
    color: "red",
    fontSize: "10px"
}
export default SingleInput