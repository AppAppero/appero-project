import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useSize from '../../../hook/useSize';
import ContentCart from './ContentCart';

const Cart = () => {

  const { itinerary, actualBudget, counterCart } = useSelector(state => state.reducerItinerary);
  const { isAllScreen } = useSize().size;
  const commonClasses = 'fw-bold text-center mt-2';
  // className={actualBudget > 0 ? 'text-green' : 'text-red'}
  return (
    <>
      {!isAllScreen &&
        <Col xs={3} className="position-fixed top-0 end-0 vh-100 bg-white">
          <Row>
            <Col className="fw-bold text-center mt-4 fs-5">Riepilogo del tuo viaggio</Col>
          </Row>
          <Row className={actualBudget <= 0 ? `text-danger ${commonClasses}` : `text-success ${commonClasses}`}>
            <Col>Budget</Col>
            <Col className={actualBudget <= 0 ? 'text-danger' : 'text-success'}>{actualBudget}</Col>
          </Row>

          {/* Contenitore di tutto l'itineriario che verrà riutilizzato anche nel Modal */}
          <ContentCart counterCart={counterCart} itinerary={itinerary} />

        </Col>
      }
    </>

  )

}

export default Cart
