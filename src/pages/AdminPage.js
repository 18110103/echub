import { Route, Switch, useLocation } from "react-router"
import AdminHeader from "../components/Header/AdminHeader/AdminHeader"
import AdminSidebar from "../components/Sidebar/UserSidebar/AdminSidebar"
import { adminRoutes } from "../constants/routes"

const AdminPage = () => {
    const location = useLocation()

    return (
        <div className="user_page__container font-be-vietnam">
            <AdminSidebar />
            <div style={{ gridArea: "module-host" }} className="flex flex-col relative">
                <AdminHeader />
                <main className="flex-auto pb-5 flex justify-center bg-user">
                    <Switch location={location}>
                        {adminRoutes.map(route => {
                            return (
                                <Route path={route.path}
                                    key={route.path}
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