import { AiOutlineEye, AiOutlineFileDone, AiOutlineHeart, AiOutlineLineChart, AiOutlineStar, AiOutlineUser } from "react-icons/ai"
import { BiComment, BiDollar, BiPackage } from "react-icons/bi"
import { FiTruck } from "react-icons/fi"
import classNames from 'classnames'

const Icon = ({ icon, className }) => {
    const IconComponent = icon

    return (
        <div className={classNames('w-8 h-8 flex-center rounded-full mb-2', className)}>
            <IconComponent size={20} />
        </div>
    )
}

const MainStat = ({ icon, className, data, name }) => {
    return (
        <div className="flex items-center">
            <Icon icon={icon} className={className} />
            <div className="ml-2">
                <div className="font-medium">{data}</div>
                <div className="text-sm text-gray-500 font-medium">{name}</div>
            </div>
        </div>
    )
}

const SubStat = ({ icon, className, data, name }) => {
    return (
        <div className="flex-1 flex-center flex-col shadow-lg p-4">
            <Icon icon={icon} className={className} />
            <div className="font-medium">{data}</div>
            <div className="text-xs text-gray-500">{name}</div>
        </div>
    )
}

const PartnerStatisticPage = () => {
    return (
        <div>
            <div className="flex justify-end">
                <input type="date" className="border-blue-300 border p-1" />
            </div>
            <div className="mx-auto max-w-4xl">
                <div className="mt-4 py-2 px-4 shadow-md">
                    <div className="font-semibold text-sm text-gray-500 mb-2">Statistics</div>
                    <div className="justify-between flex">
                        <MainStat icon={AiOutlineLineChart} className="bg-purple-100 text-purple-500" data="10%" name="Tăng trưởng" />
                        <MainStat icon={AiOutlineUser} className="bg-cyan-100 text-cyan-500" data="8.549k" name="Khách hàng" />
                        <MainStat icon={BiPackage} className="bg-red-100 text-red-500" data="1.423k" name="Đơn vận chuyển" />
                        <MainStat icon={BiDollar} className="bg-green-100 text-green-500" data="$9745" name="Doanh thu" />
                    </div>
                </div>
                <div className="mt-16 flex space-x-4">
                    <SubStat icon={AiOutlineStar} className="bg-green-100 text-green-500" data="689" name="Đánh giá" />
                    <SubStat icon={AiOutlineHeart} className="bg-purple-100 text-purple-500" data="26.8" name="Yêu thích" />
                    <SubStat icon={FiTruck} className="bg-red-100 text-red-500" data="2.1k" name="Hủy đơn" />
                </div>
                <div className="mt-16 flex space-x-4">
                    <SubStat icon={AiOutlineFileDone} className="bg-red-100 text-red-500" data="97.8k" name="Đặt đơn" />
                    <SubStat icon={BiComment} className="bg-orange-100 text-orange-500" data="8.549k" name="Bình luận" />
                    <SubStat icon={AiOutlineEye} className="bg-orange-100 text-orange-500" data="1.423k" name="Xem" />
                </div>
            </div>
        </div>
    )
}

export default PartnerStatisticPage