import SidebarLink from "./SidebarLink"
import { useState } from "react"
import { IoArrowBackCircleOutline } from "react-icons/io5"
import { FaTruck } from "react-icons/fa"
import classNames from "classnames"
import { userRoutes } from "../../../pages/User"
import Logo from "../../common/Logo"
import { AiOutlineHome } from "react-icons/ai"

const UserSidebar = () => {
    const [expand, setExpand] = useState(true)

    return <div style={{ gridArea: "nav" }} className={classNames('h-screen flex flex-col transition-all sticky top-0 border-r ' +
        'duration-300 z-10 bg-white', {
        'w-56': expand,
        'w-14': !expand,
    })}>
        <div className="flex-shrink-0 flex items-center justify-center text-blue-500">
            <Logo className={classNames('h-12', {
                'my-3': expand
            })} />
        </div>
        <div className={`${expand ? "mt-8 " : ""}flex-1 transition-all overflow-x-hidden overflow-y-auto hide-scrollbar`}>
            <SidebarLink expand={expand} exact={true} icon={AiOutlineHome} path="/" name="Trang chủ" />
            {userRoutes.map(route => <SidebarLink expand={expand} {...route} />)}
        </div>
        <div className="h-12 border-t flex-shrink-0">
            <button onClick={() => setExpand(!expand)}
                className="block w-full h-full text-right pr-5 text-blue-600">
                <IoArrowBackCircleOutline size="25px"
                    className={`inline-block transform transition-transform duration-300 ${expand ? "" : "rotate-180"}`} />
            </button>
        </div>
    </div>
}

export default UserSidebar