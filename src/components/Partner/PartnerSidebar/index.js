import SidebarLink from "./SidebarLink"
import { partnerRoutes } from "../../../pages/Partner"
import Logo from "../../common/Logo"
import { BiLogOut } from 'react-icons/bi'
import { AiOutlineHome } from "react-icons/ai"

const PartnerSidebar = () => {
    return <div className='w-48 duration-300 bg-white'>
        <div className="p-4 flex-center">
            <Logo className="h-16" />
        </div>
        <ul className="text-sm space-y-3">
            <li>
                <button className="w-full">
                    <SidebarLink path="/" exact icon={AiOutlineHome} name="Trang chủ" />
                </button>
            </li>
            {partnerRoutes.map(route => <SidebarLink {...route} />)}
            <li>
                <button className="w-full">
                    <SidebarLink path="#" exact icon={BiLogOut} name="Đăng xuất" />
                </button>
            </li>
        </ul>
    </div>
}

export default PartnerSidebar