import { Card, Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux";
import TitleContent from "../commons/TitleContent";
import Loading from "../commons/Loading";
import ErrorElement from "../commons/ErrorElement";
import { PARAMS_HOTEL } from "../../utils/constStorageCookie";
import CardContentHotel from "./CardContentHotel";

const ContentHotel = ({ detailsHotel }) => {
    const reducerHotel = useSelector(state => state.reducerHotel)
    const { hotels, isLoading, isError, messageError } = reducerHotel;


    return (
        <>
            <TitleContent
                isError={isError}
                isLoading={isLoading}
                title={detailsHotel?.overnightCity} />

            <Row className='gx-4'>
                {
                    !isLoading && !isError ?
                        (hotels?.length > 0 ?
                            (
                                hotels.map((hotel, index) => {
                                    return (
                                        <Col key={index} xs={12}>
                                            <Card
                                                className='shadow-lg border-0 justify-content-center rounded-3 p-3 mt-4 border-none'>
                                                <CardContentHotel hotel={hotel} />
                                            </Card>
                                        </Col>
                                    )
                                })
                            ) :
                            (localStorage.getItem(PARAMS_HOTEL) && <ErrorElement>Nessun hotel trovato, riprova!</ErrorElement>)
                        ) :
                        isLoading && !isError ? <Loading icon="hotel" /> :
                            !isLoading && isError && <ErrorElement>{messageError}</ErrorElement>
                }

            </Row>

        </>
    )
}

export default ContentHotel