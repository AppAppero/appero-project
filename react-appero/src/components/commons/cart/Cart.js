import React from 'react';
import { Col } from 'react-bootstrap';
import useSize from '../../../hook/useSize';
import ContentCart from './ContentCart';

const Cart = () => {

  const { isAllScreen } = useSize().size;

  return (
    <>
      {!isAllScreen &&
        <Col xs={3} className="position-fixed top-0 end-0 vh-100 bg-white">

          {/* Contenitore di tutto l'itineriario che verrà riutilizzato anche nel Modal */}
          <ContentCart />

        </Col>
      }
    </>

  )

}

export default Cart
