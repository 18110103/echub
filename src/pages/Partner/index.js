import { useState } from "react"
import { AiOutlineHome, AiOutlinePieChart, AiOutlineSetting, AiOutlineUser } from "react-icons/ai"
import { BiPackage } from "react-icons/bi"
import { BsBook } from "react-icons/bs"
import { Route, Switch, useLocation } from "react-router"
import { LoadingIcon } from "../../components/common/Loading"
import PartnerHeader from "../../components/Partner/PartnerHeader"
import PartnerSidebar from "../../components/Partner/PartnerSidebar"
import { PARTNER_ACCOUNT_SETTING_PATH, PARTNER_CUSTOMER_PATH, PARTNER_HOME_PATH, PARTNER_ORDER_MANAGER_PATH, PARTNER_POLICY_PATH, PARTNER_STATISTIC_PATH } from "../../constants/partnerPaths"
import usePartner from "../../hooks/query/usePartner"
import PartnerCustomerPage from "./PartnerCustomerPage"
import PartnerOrderPage from "./PartnerOrderPage"
import PartnerPolicyPage from "./PartnerPolicyPage"
import PartnerSettingPage from "./PartnerSettingPage"
import PartnerStatisticPage from "./PartnerStatisticPage"

export const partnerRoutes = [{
    path: PARTNER_HOME_PATH,
    name: "Trang chủ",
    icon: AiOutlineHome,
    component: <div>Trang chủ</div>,
    exact: true
}, {
    path: PARTNER_ORDER_MANAGER_PATH,
    name: "Đơn hàng",
    icon: BiPackage,
    component: <PartnerOrderPage />,
    exact: true
}, {
    path: PARTNER_POLICY_PATH,
    name: "Chính sách",
    icon: BsBook,
    component: <PartnerPolicyPage />,
    exact: true
},
// {
//     path: PARTNER_CUSTOMER_PATH,
//     name: "Khách hàng",
//     icon: AiOutlineUser,
//     component: <PartnerCustomerPage />,
//     exact: true
// }
// , {
//     path: PARTNER_STATISTIC_PATH,
//     name: "Thống kê",
//     icon: AiOutlinePieChart,
//     component: <PartnerStatisticPage />,
//     exact: true
// }, 
{
    path: PARTNER_ACCOUNT_SETTING_PATH,
    name: "Cài đặt tài khoản",
    icon: AiOutlineSetting,
    component: <PartnerSettingPage />,
    exact: true
},]

const PartnerPage = () => {
    const location = useLocation()
    const { isLoading, data } = usePartner()

    if (isLoading || !data) return <div className="fixed inset-0 flex-center"><LoadingIcon /></div>

    return (
        <div className="relative flex flex-col min-h-screen">
            <PartnerHeader />
            <div className="flex flex-auto bg-partner">
                <div className="p-4 shadow-xl border-r bg-white">
                    <PartnerSidebar />
                </div>
                <main className="flex-auto p-4 m-5 border bg-white rounded-lg shadow-md">
                    <Switch location={location}>
                        {partnerRoutes.map(route => {
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

export default PartnerPage