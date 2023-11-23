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
          <Col xs={4} key={index}>
            <Card
              className='text-center'
              style={select !== index ? styleBase : styleSelect}
              onClick={() => setSelect(index)}>
              <Row>
                <Col
                  style={select !== index ? styleTileBase : styleTileSelect}
                >
                  {el.title}
                </Col>
              </Row>
              <Row>
                <Col
                  style={select !== index ? stylePriceBase : stylePriceSelect}
                >
                  {el.price}€
                </Col>
              </Row>
              <Row>
                <Col
                  style={select !== index ? styleDuringBase : styleDuringSelect}
                >
                  {el.durationTotal}
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
  padding: "0px",
  color: "#000000",
  opacity: 0.85,
  border: "none",
  padding: "4px",
  fontSize: "15px"
}

const styleSelect = {
  ...styleBase,
  background: "#0468BF",
  color: "#FFFFFF",
  opacity: 0.85,
}

const styleTileBase = {
  color: "#000000",
  opacity: 0.7
}
const styleTileSelect = {
  ...styleTileBase,
  color: "#FFFFFF",
  fontWeight:"bold"
}

const stylePriceBase = {
  color: "#000000",
  opacity: 1,
}
const stylePriceSelect = {
  ...stylePriceBase,
  color: "#FFFFFF",
  fontWeight:"bold"
}

const styleDuringBase = {
  color: "#000000",
  opacity: 0.85
}
const styleDuringSelect = {
  ...styleDuringBase,
  color: "#FFFFFF",
  fontWeight:"bold"
}

export default HeaderFilterFlight
