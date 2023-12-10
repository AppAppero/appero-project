import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { PARAMS_HOTEL } from "../../utils/constStorageCookie";
import ErrorElement from "../commons/ErrorElement";
import Loading from "../commons/Loading";
import TitleContent from "../commons/TitleContent";
import CardContentHotel from "./CardContentHotel";

const ContentHotel = ({ detailsHotel }) => {
    const reducerHotel = useSelector(state => state.reducerHotel)
    const { hotels, isLoading, isError, messageError } = reducerHotel;

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
                                (hotels?.length > 0 ?
                                    (
                                        hotels?.map((hotel, index) =>
                                        (
                                            <CardContentHotel key={index} {...hotel} />
                                        )
                                        )
                                    ) :
                                    (
                                        <ErrorElement>Nessun hotel trovato con i parametri di ricerca inseriti, riprova!</ErrorElement>
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