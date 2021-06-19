import { useState } from "react";
import numberWithCommas from "../../../util/numberWithCommas";
import Loading from "../../common/Loading";

const ConfirmModal = ({ data, modalClose, isSubmitting, setIsSubmitting, setModalType }) => {
    const [error, setError] = useState(null)

    if (!data) return null

    const handleConfirm = async () => {
        setIsSubmitting(true)
        try {
            if (error) setError(null)
            await new Promise(res => setTimeout(res, 2000))
            setModalType('SUCCESS')
        } catch (err) {
            alert(err?.message || err)
            setError(err?.message || err)
            setIsSubmitting(false)
        }
    }

    return (
        <div className="inline-block w-full overflow-hidden transition-all transform bg-white shadow-xl rounded-lg max-w-xl">
            <div className="text-gray-700 relative">
                {isSubmitting &&
                    <div className="absolute inset-0 bg-black bg-opacity-10">
                        <Loading />
                    </div>
                }
                <h2 className="p-4 font-bold text-lg">
                    Xác nhận tạo đơn hàng
                </h2>
                {error &&
                    <div className="mx-3 mb-4 py-2 px-4 bg-red-500 rounded-xl text-white text-sm font-semibold">asdasd</div>
                }
                <div className="px-4 font-medium">
                    <div className="flex space-x-4 mb-2">
                        <div className="flex-1">
                            <div className="text-blue-800 font-semibold">Bên gửi</div>
                            <div className="text-sm">Trần Hữu Hào - 0911048148 - 275/1 Bạch Đằng, TP.HCM</div>
                        </div>
                        <div className="flex-1">
                            <div className="text-blue-800 font-semibold">Bên nhận</div>
                            <div className="text-sm">{`${data.name} - ${data.phone} - ${data.street}, ${data.province.ProvinceName}, ${data.district.DistrictName}, ${data.ward.WardName}`}</div>
                        </div>
                    </div>
                    <div>
                        <div className="text-blue-800 font-semibold">Hàng hóa</div>
                        <div className="flex space-x-4 mb-2 text-sm">
                            <div className="flex-1">
                                {data.items.map(item => (
                                    <div key={item.name}>{`${item.name} - ${item.amount}`}</div>
                                ))}
                            </div>
                            <div className="flex-1 font-semibold">
                                <div>Tổng khối lượng: {data.weight}</div>
                                <div>Tổng giá trị đơn hàng: {numberWithCommas(data.price)} vnđ</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-2">
                        <div className="flex-1">
                            <div className="text-blue-800 font-semibold">Lưu ý - Ghi chú</div>
                            <div className="text-sm">
                                <div>{data.noteRequired}</div>
                                <div>Ghi chú: {data.noteInfo}</div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="text-blue-800 font-semibold">Tùy chọn thanh toán</div>
                            <div className="text-sm">{data.whoPayFee}</div>
                        </div>
                    </div>
                    <div>
                        <div className="text-blue-800 font-semibold">Thông tin vận chuyển</div>
                        <div className="text-sm font-semibold">
                            <div>Tên đơn vị vận chuyển: Grab</div>
                            <div>Gói cước: Tiết kiệm</div>
                            <div className="text-xl">Cước phí: 60.000đ</div>
                        </div>
                    </div>
                </div>
                <div className="text-right space-x-4 p-4 bg-gray-50 text-sm">
                    <button className="py-2 w-24 ring-1 ring-gray-200 bg-white font-semibold rounded-lg" onClick={modalClose}>
                        Đóng
                    </button>
                    <button onClick={handleConfirm} className="py-2 w-24 bg-blue-500 text-white font-semibold rounded-lg">
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal