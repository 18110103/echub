import { Redirect, Route, Switch, useLocation } from "react-router"
import { USER_ACCOUNT_SETTING_PATH, USER_CREATE_SHIPMENT_PATH, USER_FEE_CALCULATION_PATH, USER_HOME_PATH, USER_NOTIFICATION_PATH, USER_ORDER_MANAGER_PATH } from "../../constants/userPaths"
import { AiOutlineHome } from 'react-icons/ai'
import { BiPackage } from 'react-icons/bi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoDocumentTextOutline, IoPricetagOutline, IoSettingsOutline } from 'react-icons/io5'
import './user.style.css'
import UserNotificationPage from "./UserNotification"
import UserFeeCalculatorPage from "./UserFeeCalculator"
import UserAccountSettingPage from "./UserAccountSetting"
import UserOrderPage from "./UserOrderPage"
import UserCreateShipmentPage from "./UserCreateShipment"
import UserSidebar from "../../components/User/UserSidebar"
import UserHeader from "../../components/User/UserHeader"
import useProvince from "../../hooks/query/useProvince"
import useDistrict from "../../hooks/query/useDistrict"
import useWard from "../../hooks/query/useWard"
import { LoadingIcon } from "../../components/common/Loading"
import useUser from "../../hooks/query/useUser"


export const userRoutes = [
    // {
    //     path: USER_HOME_PATH,
    //     name: "Trang chủ",
    //     icon: AiOutlineHome,
    //     component: <Redirect to="/" />,
    //     exact: true
    // },
    {
        path: USER_CREATE_SHIPMENT_PATH,
        name: "Tạo đơn",
        icon: BiPackage,
        component: <UserCreateShipmentPage />,
        exact: true
    }, {
        path: USER_ORDER_MANAGER_PATH,
        name: "Quản lý đơn hàng",
        icon: IoDocumentTextOutline,
        component: <UserOrderPage />,
        exact: false
    },
    // {
    //     path: USER_NOTIFICATION_PATH,
    //     name: "Thông báo",
    //     icon: IoMdNotificationsOutline,
    //     component: <UserNotificationPage />,
    //     exact: true
    // },
    {
        path: USER_FEE_CALCULATION_PATH,
        name: "Tính phí vận chuyển",
        icon: IoPricetagOutline,
        component: <UserFeeCalculatorPage />,
        exact: true
    },
    {
        path: USER_ACCOUNT_SETTING_PATH,
        name: "Cài đặt tài khoản",
        icon: IoSettingsOutline,
        component: <UserAccountSettingPage />,
        exact: false
    }]

const UserPage = () => {
    const location = useLocation()
    const { isLoading: provinceLoading } = useProvince()
    const { isLoading: districtLoading } = useDistrict()
    const { isLoading: wardLoading } = useWard()
    const { isLoading: userLoading } = useUser()

    if (provinceLoading || districtLoading || wardLoading || userLoading) {
        return (<div className="inset-0 absolute flex-center"><LoadingIcon /></div>)
    }

    console.log(location)

    if (location.pathname === '/user') {
        return <Redirect to="/user/create" />
    }

    return (
        <div className="user_page__container">
            <UserSidebar />
            <div style={{ gridArea: "module-host" }} className="flex flex-col relative">
                <UserHeader />
                <main className="flex-auto pb-5 flex justify-center bg-user">
                    <Switch location={location}>
                        {userRoutes.map(route => {
                            return (
                                <Route path={route.path}
                                    key={route.component}
                                    exact={route?.exact}>
                                    {route.component}
                                </Route>
                            )
                        })}
                        <Route>
                            <Redirect to="/user/create" />
                        </Route>
                    </Switch>
                </main>
            </div>
        </div>
    )
}

export default UserPage