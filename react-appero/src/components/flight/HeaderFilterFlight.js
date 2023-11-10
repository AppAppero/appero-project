import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const HeaderFilterFlight = () => {

  const [select, setSelect] = useState(0);

  const filter = (index) => {
    setSelect(index)
  }

  return (
    <Row className='gx-0'>
      {
        structure.map((el, index) => (
          <Col key={index}>
            <Card
              style={select !== index ? styleBase : styleSelect}
              onClick={() => filter(index)}>
              <Row className='gx-0'>
                <Col xs={1}></Col>
                <Col
                  style={select !== index ? styleTileBase : styleTileSelect}
                >
                  {el.title}
                </Col>
              </Row>
              <Row className='gx-0'>
                <Col xs={1}></Col>
                <Col
                  style={select !== index ? stylePriceBase : stylePriceSelect}
                >
                  {el.price}€
                </Col>
              </Row>
              <Row className='gx-0'>
                <Col xs={1}></Col>
                <Col
                  style={select !== index ? styleDuringBase : styleDuringSelect}
                >
                  {el.during}min
                </Col>
              </Row>
            </Card>
          </Col>
        ))
      }


    </Row >
  )
}

const structure = [
  {
    title: "Il migliore", price: "90", during: 120
  },
  {
    title: "Il più economico", price: "90", during: 120
  },
  {
    title: "Il più veloce", price: "100", during: 120
  }
]


const styleBase = {
  cursor: "pointer",
  background: "#FFFFFF",
  margin: "10px 10px 0 auto",
  boxShadow: " 0px 10px 20px #00057714",
  borderRadius: "12px",
  opacity: 1,
  padding: "10px",
  font: "normal normal normal 18px / 30px Mukta",
  letterSpacing: "0px",
  color: "#000000",
  opacity: 0.85,
  border: "none"
}

const styleSelect = {
  ...styleBase,
  background: "#0468BF",
  font: "normal normal normal 18px / 30px Mukta",
  letterSpacing: "0px",
  color: "#FFFFFF",
  opacity: 0.85
}

const styleTileBase = {
  font: "normal normal 300 16px/27px Mukta",
  letterSpacing: "0px",
  color: "#000000",
  opacity: 0.7
}
const styleTileSelect = {
  ...styleTileBase,
  color: "#FFFFFF"
}

const stylePriceBase = {
  font: "normal normal 800 22px/37px Mukta",
  letterSpacing: "0px",
  color: "#000000",
  opacity: 1
}
const stylePriceSelect = {
  ...stylePriceBase,
  color: "#FFFFFF"
}

const styleDuringBase = {
  font: "normal normal normal 18px/30px Mukta",
  letterSpacing: "0px",
  color: "#000000",
  opacity: 0.85
}
const styleDuringSelect = {
  ...styleDuringBase,
  color: "#FFFFFF"
}

export default HeaderFilterFlight
