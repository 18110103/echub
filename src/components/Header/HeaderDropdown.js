import { useState } from "react";
import { NavLink, useRouteMatch } from "react-router-dom"
import Fade from 'react-reveal/Fade'

const HeaderDropdown = ({ exact, to, children, data, liClassName, className, activeClassName }) => {
    const [showDropdown, setDropdown] = useState(false)
    const match = useRouteMatch(data.map(ele => ele.path))

    return (
        <li onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            className={liClassName}>
            <div exact={exact}
                to={to}
                className={`${className} ${match ? activeClassName : ""}`}
                activeClassName={activeClassName}
            >
                {children}

            </div>
            {showDropdown && (
                <Fade duration={350} bottom distance="10px">
                    <div style={{ top: "calc(100%)" }}
                        className="absolute left-0 pt-3 bg-transparent translate-x-6 transform">
                        <div className="bg-white shadow-md">
                            <div className="h-0.5 bg-blue-500"></div>
                            <ul className="border z-50 w-52">
                                {data.map(row => (
                                    <li>
                                        <NavLink
                                            exact
                                            to={row.path}
                                            className="p-2 border-b block hover:bg-gray-100"
                                            activeClassName="text-blue-500"
                                        >
                                            {row.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Fade>
            )
            }
        </li >
    );
}

export default HeaderDropdown
