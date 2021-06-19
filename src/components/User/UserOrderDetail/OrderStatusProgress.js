import { AiFillCreditCard } from "react-icons/ai"
import { IoNewspaperSharp } from "react-icons/io5"
import { FaBoxOpen, FaTruck } from "react-icons/fa"

const Progress = {
    CREATED: {
        name: 'Đơn hàng đã tạo',
        icon: IoNewspaperSharp
    },
    CONFIRMED: {
        name: 'Đã xác nhận thông tin thanh toán',
        icon: AiFillCreditCard
    },
    IN_TRANSITION: {
        name: 'Đã giao cho nhà vận chuyển',
        icon: FaTruck
    },
    DELIVERED: {
        name: 'Đơn hàng đã nhận',
        icon: FaBoxOpen
    }
}

const OrderStatusProgress = () => {
    return <div className="flex justify-between mx-20 relative">
        {Object.keys(Progress).map((key, i) => {
            const Icon = Progress[key].icon
            return <div className="z-10 w-44 flex flex-col items-center">
                <div className="text-blue-500 bg-white mx-8 h-14 w-14 flex justify-center items-center p-1 border-4 rounded-full border-blue-500">
                    <Icon size={25} />
                </div>
                <div className="text-center mt-2 text-xs">
                    <p>{Progress[key].name}</p>
                    <p>10:50 04-02-2021</p>
                </div>
            </div>
        })}
        <div style={{ top: 27 }} className="z-0 absolute h-1 w-full">
            <div style={{ width: "calc(100% - 176px)" }} className="h-full bg-blue-500 mx-auto" />
        </div>
    </div>
}

export default OrderStatusProgress