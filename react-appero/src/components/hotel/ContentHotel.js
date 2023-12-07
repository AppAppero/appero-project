import { Card, Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux";
import TitleContent from "../commons/TitleContent";
import Loading from "../commons/Loading";
import ErrorElement from "../commons/ErrorElement";
import { PARAMS_HOTEL } from "../../utils/constStorageCookie";
import CardContentHotel from "./CardContentHotel";
import {hotel_val} from "../../utils/exHotel"

const ContentHotel = ({ detailsHotel }) => {
    const reducerHotel = useSelector(state => state.reducerHotel)
    const { isLoading, isError, messageError } = reducerHotel;


    return (
        <>
            {
                localStorage.getItem(PARAMS_HOTEL) &&
                <>
                    <TitleContent
                        isError={isError}
                        isLoading={isLoading}
                        title={detailsHotel?.overnightCity} />

                    <Row className='gx-4'>
                        {
                            !isLoading && !isError ?
                                (hotel_val?.length > 0 ?
                                    (
                                        hotel_val.map((hotel, index) =>
                                        (
                                            <CardContentHotel key={index} {...hotel} />
                                        )
                                        )
                                    ) :
                                    (
                                        <ErrorElement>Nessun hotel trovato, riprova!</ErrorElement>
                                    )
                                ) :
                                (
                                    isLoading && !isError ? <Loading icon="hotel" /> :
                                        !isLoading && isError && <ErrorElement>{messageError}</ErrorElement>
                                )
                        }

                    </Row>
                </>
            }
        </>

    )
}

export default ContentHotel