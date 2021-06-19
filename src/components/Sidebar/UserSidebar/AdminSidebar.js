import SidebarLink from "./SidebarLink"
import { useState } from "react"
import { IoArrowBackCircleOutline } from "react-icons/io5"
import { FaTruck } from "react-icons/fa"
import { adminRoutes } from "../../../constants/routes"
import classNames from "classnames"

const AdminSidebar = () => {
    const [expand, setExpand] = useState(true)

    return <div style={{ gridArea: "nav" }} className={classNames('h-screen flex flex-col transition-all sticky top-0 border-r ' +
        'duration-300 z-50 bg-white', {
        'w-56': expand,
        'w-14': !expand,
    })}>
        <div className="h-14 flex-shrink-0 flex items-center justify-center text-blue-500">
            <FaTruck size={expand ? 35 : 25}
                className={classNames('transition-all rounded-xl bg-gray-200 bg-opacity-70 p-2', {
                    "w-12 h-12": expand,
                    "w-10 h-10": !expand
                })}
            />
        </div>
        <div className={`${expand ? "mt-8 " : ""}flex-1 transition-all overflow-x-hidden overflow-y-auto hide-scrollbar`}>
            {adminRoutes.map(route => <SidebarLink expand={expand} {...route} />)}
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

export default AdminSidebar