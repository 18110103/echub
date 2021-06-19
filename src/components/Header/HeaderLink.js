import { NavLink } from "react-router-dom"

const HeaderLink = ({ exact, to, children, liClassName, className, activeClassName }) => {
    return (
        <li className={liClassName}>
            <NavLink exact={exact}
                to={to}
                className={className}
                activeClassName={activeClassName}
            >
                {children}
            </NavLink>
        </li >
    );
}

export default HeaderLink
