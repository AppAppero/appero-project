import { AiFillCar, AiFillSetting } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { MdAttractions, MdHotel, MdOutlineFlight } from 'react-icons/md';

const linksNavBar = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Chi siamo",
        path: "#"
    },
    {
        name: "Pacchetto viaggi",
        path: "#"
    },
    {
        name: "Blogs",
        path: "#"
    }
]




const linksMenu = () => {
    const colorIcon = "blue";
    const sizeIcon = 22;

    const linksTop =
        [
            {
                name: "Home",
                icon: <FaHome color={colorIcon} size={sizeIcon} />,
                path: "/"
            },
            {
                name: "Voli",
                icon: <MdOutlineFlight color={colorIcon} size={sizeIcon} />,
                path: "/flight"
            },
            {
                name: "Hotel",
                icon: <MdHotel color={colorIcon} size={sizeIcon} />,
                path: "/hotel"
            },
            {
                name: "Noleggio",
                icon: <AiFillCar color={colorIcon} size={sizeIcon} />,
                path: "*"
            },
            {
                name: "Attrazioni",
                icon: <MdAttractions color={colorIcon} size={sizeIcon} />,
                path: "*"
            }
        ]


    const linksFooter =
        [
            {
                name: "Impostazioni",
                icon: <AiFillSetting color={colorIcon} size={sizeIcon} />,
                path: "/"
            },
            {
                name: "LogOut",
                icon: <BiLogOut color={colorIcon} size={sizeIcon} />,
                path: "/flight"
            }
        ]

    return { linksTop, linksFooter };
}



export { linksMenu, linksNavBar };
