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
                name: "home",
                icon: <FaHome color={colorIcon} size={sizeIcon} />,
                path: "/",
                title: "Home"
            },
            {
                name: "flight",
                icon: <MdOutlineFlight color={colorIcon} size={sizeIcon} />,
                path: "/travel/flight",
                title: "Voli"
            },
            {
                name: "hotel",
                icon: <MdHotel color={colorIcon} size={sizeIcon} />,
                path: "/travel/hotel",
                title: "Hotel"
            },
            {
                name: "render",
                icon: <AiFillCar color={colorIcon} size={sizeIcon} />,
                path: "/travel/render",
                title: "Noleggio"
            },
            {
                name: "attraction",
                icon: <MdAttractions color={colorIcon} size={sizeIcon} />,
                path: "/travel/attraction",
                title: "Attrazioni"
            }
        ]


    const linksFooter =
        [
            {
                name: "settings",
                icon: <AiFillSetting color={colorIcon} size={sizeIcon} />,
                path: "/",
                title: "Impostazioni"
            },
            {
                name: "logOut",
                icon: <BiLogOut color={colorIcon} size={sizeIcon} />,
                path: "/",
                title: "LogOut"
            }
        ]

    return { linksTop, linksFooter };
}



export { linksMenu, linksNavBar };
