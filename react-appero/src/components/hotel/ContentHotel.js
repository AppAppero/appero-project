import { Row } from "react-bootstrap"
import { useSelector } from "react-redux";
import TitleContent from "../commons/TitleContent";

const ContentHotel = () => {
    const reducerHotel = useSelector(state => state.reducerHotel)
    const { hotels, isLoading, isError, messageError, detailsHotel } = reducerHotel;


    return (
        <>
            <TitleContent
                isError={isError}
                isLoading={isLoading}
                title={detailsHotel.overnightCity} />

            <Row className='gx-4'>

            </Row>

        </>
    )
}

export default ContentHotel