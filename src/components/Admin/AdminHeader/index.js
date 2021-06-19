import ProfileImage from "../../common/ProfileImage"
import NotificationButton from "./NotificationButton"

const AdminHeader = () => {
    return <div className="h-14 flex items-center justify-end text-white border-b
    flex-shrink-0 z-10 sticky bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 top-0">
        <div className="flex items-center">
            <NotificationButton />
            <button className="mr-3 flex items-center">
                <div className="h-10 w-10 overflow-hidden rounded-lg mr-3">
                    <ProfileImage name="Duc" />
                </div>
                <span className="text-sm font-semibold mr-1">
                    Admin
                </span>
            </button>
        </div>
    </div>
}

export default AdminHeader