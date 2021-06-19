import { AiOutlineHome, AiOutlinePieChart, AiOutlineSetting, AiOutlineUser } from "react-icons/ai"
import { BiPackage } from "react-icons/bi"
import { BsBook } from "react-icons/bs"
import { Route, Switch, useLocation } from "react-router"
import AdminHeader from "../../components/Admin/AdminHeader"
import AdminSidebar from "../../components/Admin/AdminSidebar"
import { ADMIN_ACCOUNT_SETTING_PATH, ADMIN_CUSTOMER_PATH, ADMIN_HOME_PATH, ADMIN_ORDER_MANAGER_PATH, ADMIN_PARTNER_PATH, ADMIN_STATISTIC_PATH } from "../../constants/adminPaths"
import AdminCustomerPage from "./AdminCustomerPage"
import AdminOrderPage from "./AdminOrderPage"
import AdminPartnerPage from "./AdminPartnerPage"
import AdminSettingPage from "./AdminSettingPage"
import AdminStatisticPage from "./AdminStatisticPage"

export const adminRoutes = [{
    path: ADMIN_HOME_PATH,
    name: "Trang chủ",
    icon: AiOutlineHome,
    component: <div>Trang chủ</div>,
    exact: true
}, {
    path: ADMIN_ORDER_MANAGER_PATH,
    name: "Đơn hàng",
    icon: BiPackage,
    component: <AdminOrderPage />,
    exact: true
}, {
    path: ADMIN_PARTNER_PATH,
    name: "Đối tác",
    icon: BsBook,
    component: <AdminPartnerPage />,
    exact: true
}, {
    path: ADMIN_CUSTOMER_PATH,
    name: "Khách hàng",
    icon: AiOutlineUser,
    component: <AdminCustomerPage />,
    exact: true
}, {
    path: ADMIN_STATISTIC_PATH,
    name: "Thống kê",
    icon: AiOutlinePieChart,
    component: <AdminStatisticPage />,
    exact: true
}, {
    path: ADMIN_ACCOUNT_SETTING_PATH,
    name: "Cài đặt tài khoản",
    icon: AiOutlineSetting,
    component: <AdminSettingPage />,
    exact: true
},]

const AdminPage = () => {
    const location = useLocation()

    return (
        <div className="relative flex flex-col min-h-screen">
            <AdminHeader />
            <div className="flex flex-auto bg-partner">
                <div className="p-4 shadow-xl border-r bg-white">
                    <AdminSidebar />
                </div>
                <main className="flex-auto p-4 m-5 border bg-white rounded-lg shadow-md">
                    <Switch location={location}>
                        {adminRoutes.map(route => {
                            return (
                                <Route path={route.path}
                                    key={route.component}
                                    exact={route?.exact}>
                                    {route.component}
                                </Route>
                            )
                        })}
                    </Switch>
                </main>
            </div>
        </div>
    )
}

export default AdminPage