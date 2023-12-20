import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import ContentCart from '../cart/ContentCart';

const ModalCart = ({ show, setShow }) => {
    return (
      <Modal show={show} onHide={() => setShow(!show)}>
        <ModalHeader closeButton>
        </ModalHeader>
        <ModalBody>
          <ContentCart />
        </ModalBody>
      </Modal>
    )
  }


  export default ModalCart