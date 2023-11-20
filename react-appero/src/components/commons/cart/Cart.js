import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useSize from '../../../hook/useSize';
import ContentCart from './ContentCart';

const Cart = () => {

  const { itinerary, actualBudget, counterCart } = useSelector(state => state.reducerItinerary);
  const { isAllScreen } = useSize().size;
  const commonClasses = 'fw-bold';

  return (
    <>
      {!isAllScreen &&
        <Col xs={3} className="position-fixed top-0 end-0 vh-100 bg-white">
          <Row>
            <Col className="fw-bold text-center mt-4 fs-5">Riepilogo del tuo viaggio</Col>
          </Row>
          <Row className='mt-2 mb-3 text-center'>
            <Col style={{ marginTop: "1px", fontSize: "15px" }} xs={6}>Budget</Col>
            <Col
              className={actualBudget <= 0 ? `text-danger ${commonClasses}` : `text-success ${commonClasses}`}
              xs={6}>{actualBudget} €</Col>
          </Row>

          {/* Contenitore di tutto l'itineriario che verrà riutilizzato anche nel Modal */}
          <ContentCart counterCart={counterCart} itinerary={itinerary} />

        </Col>
      }
    </>

  )

}

export default Cart
