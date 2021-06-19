import { MdLocationOn, MdMail, MdPhone } from 'react-icons/md'
import { FcAssistant } from 'react-icons/fc'
import PreFooter from '../../assets/prefooter.png'

const Heading = ({ children }) => <h3 className="font-medium mb-3 text-gray-200">{children}</h3>

const Footer = () => {
    return <>
        <div>
            <img src={PreFooter} alt="" className="w-full block select-none" />
        </div>
        <div className="bg-gray-700 text-sm text-gray-300">
            <div className="lg:flex pl-2 sm:pl-5 lg:pl-14 sm:pr-2 pr-5 lg:pr-9 py-6">
                <div className="lg:w-2/5 mx-2 md:mx-5 mb-4">
                    <Heading>TỔNG CỤC CÔNG TY LOGISTICS E-COMERCE HUB</Heading>
                    <p className="mb-4">Logistics E-Commerce là doanh nghiệp hàng đầu cung cấp dịch vụ chuyển phát nhanh hàng hoá, bưu kiện trong nước, quốc tế tại Việt Nam.</p>
                    <div className="border-t pt-3">
                        <Heading>THÔNG TIN LIÊN HỆ </Heading>
                        <ul>
                            <li className="flex mb-2"><MdLocationOn size="20px" className="mr-3 text-red-500 flex-shrink-0" />
                                <div>Giấy chứng nhận Đăng ký Kinh doanh số: 0104093672 do Phòng ĐKKD Thành phố Hồ Chí Minh Cấp ngày: 01/04/2021</div></li>
                            <li className="flex mb-2"><MdLocationOn size="20px" className="mr-3 text-red-500 flex-shrink-0" />
                                <div>VP giao dịch: Vincom Center Landmark 81, 772 Điện Biên Phủ,  Phường 1, Bình Thạnh, Thành phố Hồ Chí Minh</div></li>
                            <li className="flex mb-2"><MdMail size="20px" className="mr-3 text-red-500 flex-shrink-0" />
                                <div>cshk@lechub.com.vn</div></li>
                            <li className="flex"><MdPhone size="20px" className="mr-3 text-red-500 flex-shrink-0" />
                                <div>19008095</div></li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-2/5 mx-2 md:mx-5 mb-4">
                    <Heading>GIỚI THIỆU</Heading>
                    <ul>
                        <li className="mb-2"><a href="#" >Giới thiệu Logistics Ecommerce Hub</a></li>
                        <li className="mb-2"><a href="#" >Câu hỏi thường gặp</a></li>
                        <li className="mb-2"><a href="#" >Tin tức</a></li>
                        <li className="mb-2"><a href="#" >Tuyển dụng</a></li>
                    </ul>
                </div>
                <div className="lg:w-2/5 mx-2 md:mx-5 mb-4">
                    <Heading>HỖ TRỢ KHÁCH HÀNG</Heading>
                    <ul>
                        <li className="mb-2"><a href="#" >Giới thiệu Logistics Ecommerce Hub</a></li>
                        <li className="mb-2"><a href="#" >Điều khoản sử dụng</a></li>
                        <li className="mb-2"><a href="#" >Chính sách bảo mật thông tin</a></li>
                        <li className="mb-2"><a href="#" >Chính sách vận chuyển</a></li>
                        <li className="mb-2"><a href="#" >Hướng dẫn sử dụng</a></li>
                        <li className="mb-2"><a href="#" >Câu hỏi thường gặp</a></li>
                        <li className="mb-2"><a href="#" >Góp ý sản phẩm dịch vụ</a></li>
                        <li className="mb-2"><a href="#" >Quy chế họa động thương mại điện tử</a></li>
                        <li className="mb-2"><a href="#" >Góp ý sản phẩm dịch vụ</a></li>
                    </ul>
                </div>
                <div className="lg:w-2/5 mx-2 md:mx-5 text-center">
                    <Heading>HỖ TRỢ</Heading>
                    <div><FcAssistant className="inline" size="90px" /></div>
                    <div className="text-2xl font-medium">19008095</div>
                    <div>Liên hệ hotline từ: 7:00-21:00</div>
                </div>
            </div>
                <div className="text-center border-t p-3 font-medium border-white border-opacity-30">
                    Copyright © LEC HUB 2021. All rights reserved.
        </div>
            </div>
    </>
}

export default Footer