import { IoMdNotificationsOutline } from "react-icons/io"
import { Fade } from "react-reveal"

const NotificationButton = () => {
    return <div className="relative">
        <button className="mr-2 text-2xl text-indigo-700 hover:bg-indigo-50 transition-colors w-10 h-10 bg-user p-2 rounded-md">
            <span className="relative block">
                <IoMdNotificationsOutline />
                <div style={{ height: 7, width: 7 }} className="absolute bg-red-500 top-px right-1 rounded-full"></div>
            </span>
        </button>
        <Fade>
            <div className="absolute hidden">
                asd
            </div>
        </Fade>
    </div>

}

export default NotificationButton