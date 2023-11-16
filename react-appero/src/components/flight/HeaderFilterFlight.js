import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { filterFlight } from '../../redux/reducerFlight';

const HeaderFilterFlight = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(0);
  const reducerFlight = useSelector(state => state.reducerFlight)
  const { filterFly } = reducerFlight;


  // Applica il filtro ogni volta che il select cambia
  useEffect(() => {
    let action = "";
    switch (select) {
      case 0: {
        action = "best"
        break;
      }
      case 1: {
        action = "economy"
        break;
      }
      case 2: {
        action = "flash"
        break;
      }
      default: {
        action = "economy"
        break;
      }
    }

    // Filtra nel redux i vari voli
    dispatch(filterFlight(action))
  }, [select])

  return (
    <Row className='gx-0'>
      {
        filterFly.map((el, index) => (
          <Col key={index}>
            <Card
              style={select !== index ? styleBase : styleSelect}
              onClick={() => setSelect(index)}>
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
                  {el.durationTotal}min
                </Col>
              </Row>
            </Card>
          </Col>
        ))
      }


    </Row >
  )
}


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
