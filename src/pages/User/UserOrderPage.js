import { Route, Switch } from "react-router"
import UserOrderManagement from "./UserOrder/UserOrderManagement"
import { USER_ORDER_MANAGER_PATH } from "../../constants/userPaths"
import UserOrderDetail from "./UserOrder/UserOrderDetail"

const UserOrderPage = () => {
    return (
        <Switch>
            <Route path={`${USER_ORDER_MANAGER_PATH}/:id`}>
                <UserOrderDetail />
            </Route>
            <Route>
                <UserOrderManagement />
            </Route>
        </Switch>
    )
}

export default UserOrderPage