import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper';
import JT from '../../../assets/partner/jt.png'
import Grab from '../../../assets/partner/grab.png'
import Ahamove from '../../../assets/partner/ahamove.png'
import GHN from '../../../assets/partner/ghn.png'
import GHTK from '../../../assets/partner/ghtk.png'

SwiperCore.use([Autoplay]);

const Img = (props) => <img className="h-32 mx-auto" alt={props.alt} {...props} />

const Partner = () => {
    return (
        <div className="p-6">
            <h2 className="p-4 font-medium text-xl mb-4">Liên kết với các đối tác vận chuyển hàng đầu</h2>
            <Swiper
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                preloadImages
                spaceBetween={10}
                slidesPerView={2}
                breakpoints={{
                    "1280": {
                        slidesPerView: 5,
                        autoplay: false
                    },
                    "900": {
                        slidesPerView: 4
                    },
                    "640": {
                        slidesPerView: 3
                    }
                }}
            >
                <div className="flex pb-8 justify-evenly flex-wrap">
                    <SwiperSlide className="h-auto"><Img src={JT} alt="J and T logo" /></SwiperSlide>
                    <SwiperSlide className="h-auto"><Img src={Grab} alt="Grab logo" /></SwiperSlide>
                    <SwiperSlide className="h-auto"><Img src={Ahamove} alt="Ahamove logo" /></SwiperSlide>
                    <SwiperSlide className="h-auto"><Img src={GHN} alt="GHN logo" /></SwiperSlide>
                    <SwiperSlide className="h-auto"><Img src={GHTK} alt="GHTK logo" /></SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
}

export default Partner