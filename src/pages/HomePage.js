import { AiOutlineRight } from "react-icons/ai"
import { FaPiggyBank, FaShippingFast } from "react-icons/fa"
import { MdLocalShipping } from "react-icons/md"
import BuuCuc from '../assets/buucuc.jpg'
import DeliveryMan from '../assets/deliveryman.png'
import PackagesImage from '../assets/packages.png'
import CountUp from "react-countup"
import LazyLoad from "react-lazy-load"
import Banner from "../components/Home/Banner"
import ServiceCard from "../components/Home/ServiceCard"
import ShippingStep from "../components/Home/ShippingStep"
import Partner from "../components/Home/Partner"


const Homepage = () => {
    return <div className="h-full">
        <Banner />
        <section className="bg-gray-100 text-center sm:p-5 pb-5">
            <h2 className="p-4 font-bold text-3xl mb-4 text-gray-500">DỊCH VỤ NỔI BẬT</h2>
            <hr className="mb-6 border-t-2 border-gray-300 mx-6 sm:mx-16" />
            <div className="flex mb-2 flex-wrap lg:flex-nowrap justify-center sm:p-5 mx-5">
                <ServiceCard
                    icon={MdLocalShipping}
                    subtitle="NHANH - AN TOÀN - CHÍNH XÁC"
                    title="Chuyển phát Nhanh"
                    code="VCN"
                    url="/services/vcn"
                />
                <ServiceCard
                    icon={FaPiggyBank}
                    subtitle="AN TÂM - TIẾT KIỆM - KỊP THỜI"
                    title="Chuyển phát Tiết kiệm"
                    code="VTK"
                    url="/services/vtk"
                />
                <ServiceCard
                    icon={FaShippingFast}
                    subtitle="GIAO NGAY TRONG 24H"
                    title="Chuyển phát Hỏa tốc"
                    code="VHT"
                    url="/services/vht"
                />

            </div>
            <button className="duration-300 relative bg-blue-500 hover:bg-blue-600 hover:shadow-lg hover:-translate-y-px transform transition-all py-2 px-10 text-white font-medium">TẤT CẢ DỊCH VỤ
            <AiOutlineRight className="absolute right-1 top-0 h-full flex items-center" /></button>
        </section>
        <section>
            <ShippingStep />
        </section>
        <section className="bg-gray-100 text-center">
            <Partner />
        </section>
        <section className="container mx-auto my-10">
            <div className="flex justify-end">
                <div className="sm:flex w-full max-w-sm mx-auto sm:mx-0 sm:max-w-none lg:w-3/5 justify-between px-10">
                    <div className="flex mb-3 sm:mb-0">
                        <img src={DeliveryMan} alt="delivery man" className="h-6 mr-3" />
                        <div>
                            <div className="text-3xl font-bold">
                                <LazyLoad throttle={75} height={40}>
                                    <CountUp end={100000000} duration={1} separator="." />
                                </LazyLoad>
                            </div>
                            <div className="text-center">Khách hàng tin dùng</div>
                        </div>
                    </div>
                    <div className="flex">
                        <img src={PackagesImage} alt="packages icon" className="h-6 mr-3" />
                        <div>
                            <div className="text-3xl font-bold">
                                <LazyLoad throttle={75} height={40}>
                                    <CountUp end={450000} duration={1} separator="." />
                                </LazyLoad>
                            </div>
                            <div className="text-center">Đơn hàng đang vận chuyển</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 text-center text-lg font-semibold px-10 my-7">
                    <div className="mb-7">Mạng lưới trên 63 tỉnh thành</div>
                    <hr />
                    <div className="mt-7">Mạng lưới chuyển phát của Lec hub phủ sóng trên 63 tỉnh thành</div>
                </div>
                <div className="flex-1 px-5">
                    <div>
                        <img src={BuuCuc} alt="buu cuc logo" />
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-blue-500">

        </section>
    </div>
}

export default Homepage
