import { IoAirplaneOutline } from 'react-icons/io5'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { RiHotelBedLine } from 'react-icons/ri'

const Loading = ({ icon }) => {

    const searchIcon = (iconName) => {
        switch (iconName) {
            case "airplane":
                return <IoAirplaneOutline size={30} />
            case "hotel":
                return <RiHotelBedLine size={30} />
            default:
                return <MdOutlineTravelExplore size={30} />;
        }
    }

    const iconIcon = searchIcon(icon);

    return (
        <div style={{ marginTop: "150px", height: "100vh" }}>
            <div className="loading-spinner">
                <div className="customIcon">
                    {iconIcon}
                </div>
                <div className="cloud cloud1">
                    {iconIcon}
                </div>
                <div className="cloud cloud2">
                    {iconIcon}
                </div>
                <div className="cloud cloud3">
                    {iconIcon}
                </div>
                <div className="cloud cloud4">
                    {iconIcon}
                </div>
                <div className="cloud cloud5">
                    {iconIcon}
                </div>
                <div className="cloud cloud6">
                    {iconIcon}
                </div>
            </div>
        </div>
    )
}



export default Loading;
