import React from "react"
import UserPageContainer from "../../../components/User/common/UserPageContainer"
import OrderTableStatus from "../../../components/User/UserOrderManagement/OrderTableStatus"
import OrderTableContainer from "../../../components/User/UserOrderManagement/OrderTableContainer"

const UserOrderManagement = () => {

    return <UserPageContainer>
        <h1 className="user_page_heading border-b mb-2">
            Danh sách đơn hàng
        <OrderTableStatus />
        </h1>
        <OrderTableContainer />
    </UserPageContainer>
}

export default UserOrderManagement