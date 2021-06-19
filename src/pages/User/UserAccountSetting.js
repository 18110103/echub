import { BiUser } from "react-icons/bi"
import { IoKeyOutline } from "react-icons/io5"
import { GoLocation } from "react-icons/go"
import { MdPayment } from "react-icons/md"
import { Redirect, Route, Switch, useLocation, useRouteMatch } from "react-router"
import { NavLink } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import UserPageContainer from "../../components/User/common/UserPageContainer"
import UserSectionContainer from "../../components/User/common/UserSectionContainer"
import { USER_ADDRESS_SETTING_PATH, USER_CHANGE_PASSWORD_PATH, USER_PAYMENT_SETTING_PATH, USER_PROFILE_SETTING_PATH } from "../../constants/userPaths"
import PersonalInformation from "./Account/PersonalInformation"
import ChangePassword from "./Account/ChangePassword"
import Address from "./Account/Address"
import Payment from "./Account/Payment"

const userAccountSettingRoutes = [{
    name: "Hồ sơ",
    path: USER_PROFILE_SETTING_PATH,
    icon: BiUser,
    component: <PersonalInformation />,
}, {
    name: "Đổi mật khẩu",
    path: USER_CHANGE_PASSWORD_PATH,
    icon: IoKeyOutline,
    component: <ChangePassword />,
}, {
    name: "Địa chỉ",
    path: USER_ADDRESS_SETTING_PATH,
    icon: GoLocation,
    component: <Address />,
},
    // {
    //     name: "Thanh toán",
    //     path: USER_PAYMENT_SETTING_PATH,
    //     icon: MdPayment,
    //     component: <Payment />,
    // }
]
export default function UserAccountSettingPage() {
    const match = useRouteMatch(userAccountSettingRoutes.map(route => route.path))
    const location = useLocation()

    if (!match)
        return <Redirect to={USER_PROFILE_SETTING_PATH} />

    return (
        <UserPageContainer className="min-h-full flex flex-col">
            <div className="mb-4">
                <h1 className="user_page_heading">
                    Cài đặt tài khoản
                </h1>
                <h6 className="text-sm font-normal">
                    Thay đổi thông tin cá nhân và mật khẩu
                </h6>
            </div>
            <UserSectionContainer className="flex flex-auto mb-2 rounded-md">
                <div className="w-52 border-r">
                    <ul className="mr-2 text-sm text-gray-600 font-medium">
                        {userAccountSettingRoutes.map(route => {
                            const Icon = route.icon
                            return (
                                <li>
                                    <NavLink exact
                                        onClick={e => { if (location.pathname === route.path) e.preventDefault() }}
                                        className="w-full text-left px-2 py-3 my-2
                                        hover:bg-gray-100 flex items-center"
                                        activeClassName="bg-blue-500 rounded text-white
                                        hover:bg-blue-500"
                                        to={route.path}>
                                        <Icon className="inline-block mr-3" size={20} />
                                        <span>{route.name}</span>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex-auto py-2 pr-3 pl-8">
                    <TransitionGroup className="h-full">
                        <CSSTransition
                            key={location.key}
                            classNames="page"
                            timeout={300}
                            className="h-full"
                            unmountOnExit
                        >
                            <Switch location={location}>
                                {userAccountSettingRoutes.map(route => {
                                    return (
                                        <Route path={route.path} exact>
                                            <div className="h-full">
                                                {route.component}
                                            </div>
                                        </Route>
                                    )
                                })}
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </UserSectionContainer>
        </UserPageContainer>
    )
}