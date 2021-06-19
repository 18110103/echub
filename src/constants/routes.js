import { AiOutlineHome } from "react-icons/ai";
import { BiPackage, BiUser, BiLogOut } from "react-icons/bi";
import { IoPricetagOutline, IoSettingsOutline } from "react-icons/io5";
import AdminShowOrders from "../components/AdminComponents/AdminShowOrders/AdminShowOrders";
import AdminShowStatistic from "../components/AdminComponents/AdminShowStatistic/AdminShowStatistic";
import AdminShowCustomers from "../components/AdminComponents/AdminShowCustomers/AdminShowCustomers";
import AdminShowPartners from "../components/AdminComponents/AdminShowPartners/AdminShowPartners";
import AdminChangePassword from "../components/AdminComponents/AdminAccountSetting/AdminChangePassword";
import { adminPaths } from "./paths";

const adminRoutes = [{
    path: adminPaths.HOME,
    name: "Trang chủ",
    icon: AiOutlineHome,
    component: <div>Trang chủ</div>,
    exact: true
}, {
    path: adminPaths.SHOW_ORDERS,
    name: "Đơn hàng",
    icon: BiPackage,
    component: <AdminShowOrders />,
    exact: true
}, {
    path: adminPaths.SHOW_PARTNERS,
    name: "Đối tác",
    icon: BiUser,
    component: <AdminShowPartners />,
    exact: false
}, {
    path: adminPaths.SHOW_CUSTOMERS,
    name: "Khách hàng",
    icon: BiUser,
    component: <AdminShowCustomers />,
    exact: true
}, {
    path: adminPaths.SHOW_STATISTIC,
    name: "Thống kê",
    icon: IoPricetagOutline,
    component: <AdminShowStatistic />,
    exact: true
}, {
    path: adminPaths.ACCOUNT_SETTING,
    name: "Cài đặt tài khoản",
    icon: IoSettingsOutline,
    component: <AdminChangePassword />,
    exact: false
}, {
    path: adminPaths.LOGOUT,
    name: "Đăng xuất",
    icon: BiLogOut,
    component: <div>Đăng xuất</div>,
    exact: true
},]

export {
    adminRoutes,
}