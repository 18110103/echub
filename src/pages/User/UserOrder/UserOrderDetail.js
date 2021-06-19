import { BsArrowLeft } from "react-icons/bs"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import Loading from "../../../components/common/Loading"
import Button from "../../../components/User/common/Button"
import UserPageContainer from "../../../components/User/common/UserPageContainer"
import UserSectionContainer from "../../../components/User/common/UserSectionContainer"
import OrderStatusProgress from "../../../components/User/UserOrderDetail/OrderStatusProgress"
import { USER_ORDER_MANAGER_PATH } from "../../../constants/userPaths"
import useOrder from "../../../hooks/query/useOrder"

const SectionContainer = ({ children }) =>
    <div className="bg-user my-4 p-2 text-sm">
        {children}
    </div>

const SectionHeader = ({ children }) =>
    <h3 className="text-blue-900 font-semibold mb-1 text-base">
        {children}
    </h3>

const UserOrderDetail = () => {
    const { id } = useParams()
    const { isLoading, data } = useOrder(id)

    return <UserPageContainer>
        <div></div>
        <h1 className="user_page_heading mb-3">Chi tiết đơn hàng</h1>
        <UserSectionContainer className="text-gray-600">
            {isLoading ? <div className="h-96"><Loading /></div>
                :
                <>
                    <div className="flex justify-between items-center mb-6">
                        <Link className="text-xs font-medium" to={USER_ORDER_MANAGER_PATH}>
                            <span className="mr-2">
                                <BsArrowLeft className="inline align-middle" />
                            </span>Trở lại
                        </Link>
                        <div className="flex text-sm">
                            <span>ID ĐƠN HÀNG: {id}</span>
                            <div className="w-px bg-gray-400 mx-2" />
                            <span className="text-red-500">{data.shippingDone ? "ĐÃ GIAO" : "CHƯA GIAO"}</span>
                        </div>
                    </div>
                    <OrderStatusProgress />
                    <div className="mx-4">
                        <SectionContainer>
                            <SectionHeader>Thời gian giao hàng dự kiến</SectionHeader>
                            <p>Đơn hàng của bạn sẽ được giao dự kiến vào ngày 10-04-2021</p>
                        </SectionContainer>
                        <SectionContainer>
                            <SectionHeader>Địa chỉ người gửi</SectionHeader>
                            <p>{data.sendPhone}</p>
                            <p>{data.sendAdd}</p>
                        </SectionContainer>
                        <SectionContainer>
                            <SectionHeader>Địa chỉ người nhận</SectionHeader>
                            <p>{data.receivePhone}</p>
                            <p>{data.receiveAdd}</p>
                        </SectionContainer>
                        <div className="text-right"><Button disabled className="text-xs rounded-full">Hủy đơn hàng</Button></div>
                    </div>
                </>
            }
        </UserSectionContainer>
    </UserPageContainer>
}

export default UserOrderDetail