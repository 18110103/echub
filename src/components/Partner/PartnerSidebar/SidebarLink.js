import classNames from "classnames"
import { NavLink, useRouteMatch } from "react-router-dom"

const SidebarLink = ({ path, name, icon, exact }) => {
    const Icon = icon
    const match = useRouteMatch({ path, exact })

    return <li>
        <NavLink to={path}
            className={classNames('py-2 flex items-center pl-4 font-bold rounded-lg', {
                "text-white bg-gray-600": match,
                "text-gray-500 hover:bg-gray-200": !match
            })}
            onClick={e => { if (match) e.preventDefault() }}
            exact={exact}
        >
            <Icon className='inline-block mr-2 text-xl' />
            <span>
                {name}
            </span>
        </NavLink>
    </li>
}

export default SidebarLink