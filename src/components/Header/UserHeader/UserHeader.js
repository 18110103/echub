import { IoMdNotificationsOutline } from "react-icons/io"
import { IoSearch } from "react-icons/io5"
import ProfileImage from "../../common/ProfileImage"

const UserHeader = () => {
    return <div className="h-14 flex items-center justify-between text-gray-500 border-b
    flex-shrink-0 z-50 sticky bg-white top-0">
        <div className="flex-1 mr-12 ml-8 rounded-md overflow-hidden max-w-sm flex bg-user">
            <input className="flex-1 h-10 p-3 focus:outline-none text-sm bg-transparent"
                placeholder="Tìm kiếm đơn hàng..." />
            <button className="text-blue-700 px-3">
                <IoSearch />
            </button>
        </div>
        <div className="flex items-center">
            <button className="mr-2 text-2xl hover:text-indigo-700 hover:bg-indigo-50 transition-colors w-10 h-10 bg-user p-2 rounded-md">
                <span className="relative block">
                    <IoMdNotificationsOutline />
                    <div style={{ height: 7, width: 7 }} className="absolute bg-red-500 top-px right-1 rounded-full"></div>
                </span>
            </button>
            <button className="mr-3 flex items-center">
                <div className="h-10 w-10 overflow-hidden rounded-lg mr-3">
                    <ProfileImage name="Duc" />
                </div>
                <span className="text-sm font-semibold mr-1">
                    Võ Phú Đức
                </span>
            </button>
        </div>
    </div>
}

export default UserHeader