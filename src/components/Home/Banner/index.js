import Banner1Img from '../../../assets/banner1.jpg'
import Banner2Img from '../../../assets/banner2.jpg'
import Banner3Img from '../../../assets/banner3.jpg'
import Banner4Img from '../../../assets/banner4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper';
import { Link } from 'react-router-dom'
import { BsCheck } from 'react-icons/bs'

SwiperCore.use([Navigation]);

const Container = ({ children }) => <div className="py-10 px-20">{children}</div>

const Banner = () => {
    return <div className="my-5 mx-auto">
        <Swiper
            slidesPerView={1}
            simulateTouch={false}
            navigation={true}
            autoHeight={true}
            preloadImages={true}
        >
            <SwiperSlide>
                <Container>
                    <div className="flex items-center">
                        <div className="w-2/5 mx-4">
                            <h1 className="text-3xl font-semibold mb-7">
                                Sàn kết nối vận chuyển dành riêng cho Thương mại điện tử
                            </h1>
                            <p className="text-lg text-gray-500">
                                Webflow empowers designers to build professional, custom websites in a completely visual canvas with no code.
                            </p>
                            <div className="mt-10">
                                <p>Trở thành khách hàng của chúng tôi</p>
                                <Link to="/register" className="inline-block mt-2 bg-blue-500 text-white font-medium hover:bg-blue-700 transition-all px-5 py-3 rounded">Đăng ký</Link>
                            </div>
                        </div>
                        <div className="w-3/5 px-16">
                            <img className="mx-auto" src={Banner1Img} style={{ height: 400 }} alt="sad" />
                        </div>
                    </div>
                </Container>
            </SwiperSlide>
            <SwiperSlide>
                <Container>
                    <div className="flex items-center">
                        <div className="w-2/5 mx-4">
                            <h1 className="text-3xl font-semibold mb-7">
                                Hàng hóa được chuẩn bị sẵn sàng vận chuyển
                            </h1>
                            <div className="flex font-semibold">
                                <p className="text-gray-500 py-1 px-2 rounded-md border-blue-500 border-2">
                                    <span className="text-yellow-500">Tiết kiệm thời gian</span> -{' '}
                                    <span className="text-blue-500">An toàn</span> -{' '}
                                    <span className="text-green-500">Tiện lợi</span>
                                </p>
                            </div>
                            <div className="mt-10">
                                <p>Trở thành khách hàng của chúng tôi</p>
                                <Link to="/register" className="inline-block mt-2 bg-blue-500 text-white font-medium hover:bg-blue-700 transition-all px-5 py-3 rounded">Đăng ký</Link>
                            </div>
                        </div>
                        <div className="w-3/5 px-16">
                            <img className="mx-auto" src={Banner2Img} style={{ height: 400 }} alt="sad" />
                        </div>
                    </div>
                </Container>
            </SwiperSlide>
            <SwiperSlide>
                <Container>
                    <div className="flex items-center">
                        <div className="w-2/5 mx-4">
                            <h1 className="text-3xl font-semibold mb-7">
                                Trở thành nhà vận chuyển tin cậy với khách hàng
                            </h1>
                            <div className="text-gray-500">
                                <p>Cùng nhau phát triển</p>
                                <p>Cùng nhau sẻ chia</p>
                                <p>Hợp tác vói bạn là niềm vinh hạnh của chúng tôi</p>
                            </div>
                            <div className="mt-10">
                                <p>Trở thành đối tác thương mại với chúng tôi</p>
                                <Link to="/register" className="inline-block mt-2 bg-purple-500 text-white font-medium hover:bg-purple-700 transition-all px-5 py-3 rounded">Đăng ký</Link>
                            </div>
                        </div>
                        <div className="w-3/5 px-16">
                            <img className="mx-auto" src={Banner3Img} style={{ height: 400 }} alt="sad" />
                        </div>
                    </div>
                </Container>
            </SwiperSlide>
            <SwiperSlide>
                <Container>
                    <div className="flex items-center">
                        <div className="w-2/5 mx-4">
                            <h1 className="text-2xl font-semibold text-red-500 mb-7 text-center">
                                Hàng hóa luôn luôn được giao đến tay bạn
                                dù cho dịch COVID -19
                            </h1>
                            <div className="text-gray-700 flex">
                                <div className="p-3 border-2 border-blue-500 rounded-md">
                                    <div>
                                        <BsCheck className="inline-block mr-2" />Khử khuẩn trước khi giao hàng
                                    </div>
                                    <div>
                                        <BsCheck className="inline-block mr-2" />Nhân viên luôn đeo khẩu trang khi giao hàng
                                    </div>
                                    <div>
                                        <BsCheck className="inline-block mr-2" />Chuyên nghiệp, ân cần, nhiệt tình, chu đáo
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <p>Trở thành khách hàng của chúng tôi</p>
                                <Link to="/register" className="inline-block mt-2 bg-blue-500 text-white font-medium hover:bg-blue-700 transition-all px-5 py-3 rounded">Đăng ký</Link>
                            </div>
                        </div>
                        <div className="w-3/5 px-16">
                            <img className="mx-auto" src={Banner4Img} style={{ height: 400 }} alt="sad" />
                        </div>
                    </div>
                </Container>
            </SwiperSlide>
        </Swiper>
    </div >
}

export default Banner