import { useState } from "react";
import { useGlobalContext } from "../context/context";


const Loading = () => {

    const { setIsloading } = useGlobalContext()

    const handleButtonClick = () => {
        setIsloading(true)

        setTimeout(() => {
            setIsloading(true)
        }, 200)
    }

    return (
        <div>
            <div className="loading-spinner">
                <div className="airplane"></div>
                <div className="cloud cloud1"></div>
                <div className="cloud cloud2"></div>
                <div className="cloud cloud3"></div>
            </div>
        </div>
    )
}



export default Loading;
