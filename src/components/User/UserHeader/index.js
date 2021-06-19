import { IoSearch } from "react-icons/io5"
import useUser from "../../../hooks/query/useUser"
import ProfileImage from "../../common/ProfileImage"
import NotificationButton from "./NotificationButton"

const UserHeader = () => {
    const { data } = useUser()

    return <div className="h-14 flex items-center justify-between text-gray-500 border-b
    flex-shrink-0 z-10 sticky bg-white top-0">
        <div className="flex-1 mr-12 ml-8 rounded-md overflow-hidden max-w-sm flex bg-user">
            <input className="flex-1 h-10 p-3 focus:outline-none text-sm bg-transparent"
                placeholder="Tìm kiếm đơn hàng..." />
            <button className="text-blue-700 px-3">
                <IoSearch />
            </button>
        </div>
        <div className="flex items-center">
            <NotificationButton />
            <button className="mr-3 flex items-center">
                <div className="h-10 w-10 overflow-hidden rounded-lg mr-3">
                    <ProfileImage name={data.firstName} />
                </div>
                <span className="text-sm font-semibold mr-1">
                    {`${data.firstName} ${data.lastName}`}
                </span>
            </button>
        </div>
    </div>
}

export default UserHeader