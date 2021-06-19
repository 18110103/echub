import classNames from "classnames"
import { NavLink, useRouteMatch } from "react-router-dom"
import ReactTooltip from "react-tooltip"

const SidebarLink = ({ path, name, icon, expand, exact }) => {
    const Icon = icon
    const match = useRouteMatch({ path, exact })

    return <div>
        <div
            data-tip={name}
            data-background-color="#4B5563"
            className="hover:text-blue-500 text-gray-500 text-opacity-80"
        >
            <NavLink to={path}
                className={classNames('py-2 flex items-center w-64 transition-all', {
                    "mb-3": expand,
                    "my-3": !expand
                })}
                onClick={e => { if (match) e.preventDefault() }}
                activeClassName="text-blue-600 active-sidebar-link from-blue-50 to-white bg-gradient-to-r"
                exact={exact}
            >
                <div className="w-14 text-center">
                    <Icon className={classNames('inline', {
                        "text-2xl": expand,
                        "text-xl": !expand,
                    })} />
                </div>
                <span style={{ fontSize: 13 }}
                    className={classNames('transition-opacity -ml-1 font-bold', {
                        "opacity-100 visible duration-300": expand,
                        "opacity-0 invisible": !expand
                    })}>
                    {name}
                </span>
            </NavLink>
        </div>
        <ReactTooltip disable={expand} place="right" effect="solid" />
    </div>
}

export default SidebarLink