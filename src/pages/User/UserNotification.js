import classNames from "classnames"
import { VscPackage } from "react-icons/vsc"
import { Link } from "react-router-dom"

const UserNotificationPage = () => {
    const data = [{
        title: "Đơn hàng của bạn được giao thành công",
        content: "Đơn hàng 251XJKL của bạn đã được giao tới người nhận vào lúc 07:30 25-04-2021.",
        unread: false,
        time: "1 giờ trước",
    }, {
        title: "Đơn hàng của bạn được giao thành công",
        content: "Đơn hàng 251XJKL của bạn đã được giao tới người nhận vào lúc 07:30 25-04-2021.",
        unread: false,
        time: "4 giờ trước",
    }, {
        title: "Đơn hàng của bạn được giao thành công",
        content: "Đơn hàng 251XJKL của bạn đã được giao tới người nhận vào lúc 07:30 25-04-2021.",
        unread: true,
        time: "6 giờ trước",
    },]

    return <div className="flex-auto">
        <h2 className="user_page_heading text-center bg-white py-6 relative shadow">
            Tất cả thông báo (1)
            <button className="float-right text-sm absolute top-1/2
            -translate-y-1/2 transform right-6 text-blue-700 hover:text-blue-800">
                Đánh dấu đã đọc tất cả
            </button>
        </h2>
        <div className="mx-auto max-w-4xl text-sm mt-8">
            {data.map(row => {
                return (
                    <Link to="#"
                        className={classNames('mb-4 border p-3 flex ' +
                            'transition-colors justify-between', {
                            'text-gray-400 text-opacity-70 bg-gray-50 hover:bg-gray-100': !row.unread,
                            'active-sidebar-link bg-white hover:bg-gray-50 text-gray-700': row.unread
                        })}>
                        <div className="flex items-center max-w-md">
                            <span className="mr-4">
                                <VscPackage size="40px" />
                            </span>
                            <div>
                                <h5 className={classNames('text-base font-semibold', {
                                    'text-blue-600': row.unread,
                                })}>
                                    {row.title}
                                </h5>
                                <p>
                                    {row.content}
                                </p>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-24 ml-3 text-right">
                            {row.time}
                        </div>
                    </Link>
                )
            })}
        </div>
    </div>
}

export default UserNotificationPage