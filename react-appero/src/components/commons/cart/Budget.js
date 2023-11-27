import React, { memo, useState } from 'react';
import { Button, Col, FormControl, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row } from 'react-bootstrap';
import { CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { updateBudget } from '../../../redux/reducerItinerary';
import { BUDGET } from '../../../utils/constStorageCookie';

const Budget = () => {
    const { actualBudget, principalBudget } = useSelector(state => state.reducerItinerary);

    const size = { fontSize: "12px" }
    const text = "fw-bold"
    return (
        <Row className="text-center mt-2">
            <ColBudget
                isClick={true}
                style={size}
                className={text}
                message="Budget"
                price={principalBudget}
            />

            <ColBudget
                isClick={false}
                style={size}
                className={actualBudget <= 0 ? 'text-danger ' + text : 'text-success ' + text}
                message="Budget attuale"
                price={actualBudget}
            />
        </Row>
    )
}

const ColBudget = memo(({ isClick, style, className, message, price }) => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    return (
        <>
            {
                isClick && <ModalEditBudget
                    isOpenModal={isOpenModal}
                    setIsOpenModal={setIsOpenModal}
                />
            }
            <Col
                xs={6}
                style={style}
                className={className}>
                <Row>
                    <Col>
                        {message}
                    </Col>
                </Row>
                <Row className='gx-2'>
                    <Col className='mt-1' xs={isClick ? 9 : 12}>{price} €</Col>
                    {isClick &&
                        <Col xs={2}>
                            <Button
                                onClick={() => setIsOpenModal(!isOpenModal)}
                                variant='light'
                                className='btn-sm btn-outline-warning'
                                style={{ fontSize: "8px" }}><CiEdit /></Button>
                        </Col>
                    }
                </Row>
            </Col>
        </>
    )
})

const ModalEditBudget = memo(({ isOpenModal, setIsOpenModal }) => {

    const dispatch = useDispatch()
    const [newBudget, setNewBudget] = useState("")

    const updateValue = () => {
        dispatch(updateBudget(newBudget))
        localStorage.setItem(BUDGET, newBudget)
        setIsOpenModal(false)
    }

    return (
        <Modal show={isOpenModal} onHide={() => setIsOpenModal(!isOpenModal)}>
            <ModalHeader closeButton>
                <ModalTitle>Modifica il budget inserito</ModalTitle>
            </ModalHeader>
            <ModalBody>

                <FormControl
                    type='number'
                    placeholder='Inserisci il nuovo budget'
                    onChange={(e) => setNewBudget(e.target.value)}
                    value={newBudget}
                    name='newBudget'
                    id='newBudget'
                />

            </ModalBody>
            <ModalFooter>
                <Button variant='warning' onClick={updateValue}>Conferma</Button>
                <Button variant='danger' onClick={() => setIsOpenModal(false)}>Annulla</Button>
            </ModalFooter>
        </Modal>
    )
})

export default Budget
