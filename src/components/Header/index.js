import HeaderLink from "./HeaderLink"
import HeaderDropdown from "./HeaderDropdown"
import { Link } from "react-router-dom"
import Logo from "../common/Logo"

const Header = () => {
    const pricingDropdown = [
        { title: "Tính cước vận chuyển", path: "/user/fee" },
        { title: "Biểu phí", path: "/pricing" },
        { title: "Chiết khấu", path: "/asvdfd" }
    ]

    const featuresDropdown = [
        { title: "Khách hàng", path: "/user" },
        { title: "Đối tác", path: "/partner" },
        { title: "Admin", path: "/admin" },
    ]

    const liClasses = "group h-full p-2 inline-block text-gray-500 transition-all " +
        "text-sm font-medium relative"

    const linkClasses = "px-4 py-3 rounded-full inline cursor-pointer " +
        "group-hover:bg-gray-200 group-hover:text-black transition-all duration-200"

    const activeLinkClasses = "text-white group-hover:bg-blue-500 bg-blue-500 group-hover:text-white"

    const HeaderLinkWithClasses = (props) => (
        <HeaderLink
            liClassName={liClasses}
            className={linkClasses}
            activeClassName={activeLinkClasses}
            {...props}
        >
            {props.children}
        </HeaderLink>
    )

    const HeaderDropdownWithClasses = (props) => (
        <HeaderDropdown
            liClassName={liClasses}
            className={linkClasses}
            activeClassName={activeLinkClasses}
            {...props}
        >
            {props.children}
        </HeaderDropdown>
    )

    return <header className="flex select-none min-h-14 sticky top-0 bg-white z-50 px-2">
        <div className="flex justify-between w-full items-center">
            <div className="pl-4">
                <Logo className="h-12" />
            </div>
            <div className="lg:hidden"></div>
            <nav className="text-sm font-medium font-sans h-full flex items-center">
                <ul className="px-3 py-4">
                    <HeaderLinkWithClasses to="/" exact>Trang chủ</HeaderLinkWithClasses>
                    <HeaderDropdownWithClasses data={pricingDropdown}>Bảng giá</HeaderDropdownWithClasses>
                    <HeaderDropdownWithClasses data={featuresDropdown}>Truy cập nhanh</HeaderDropdownWithClasses>
                    <HeaderLinkWithClasses to="/faq">FAQ</HeaderLinkWithClasses>
                    <HeaderLinkWithClasses to="/about">Về chúng tôi</HeaderLinkWithClasses>
                </ul>
            </nav>
            <div>
                <Link to="/login"
                    className="inline-block py-2 px-3 font-medium mr-2 hover:text-blue-600
                    hover:bg-gray-200 transition-colors">Đăng nhập</Link>
                <Link to="/register"
                    className="inline-block py-2 px-4 bg-blue-500 hover:bg-blue-700
                    transition-colors text-white font-medium">Đăng ký</Link>
            </div>
        </div>
    </header>
}

export default Header