import { useForm } from "react-hook-form"
import { createShippingFee } from "../../../api/shippingFee"
import Loading from '../../common/Loading'
import usePartner from '../../../hooks/query/usePartner'
import { tuyenList } from "../../../utils/tuyenUtils"
import removeAccents from "../../../util/removeAccents"

const Label = ({ children }) => (<label className="w-40 text-left text-sm font-medium">{children}</label>)

const PartnerPolicyForm = ({ closeModal }) => {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm()
    const { data: partnerData } = usePartner()

    const onSubmit = async (data) => {
        try {
            const newData = {
                ...data,
                idFee: partnerData.companyName + "_" + data.idFee + "_" + removeAccents(data.nameFee).replaceAll(' ', '').toLowerCase(),
                compid: partnerData.idCompany
            }
            await createShippingFee(newData)
            closeModal()
            window.location.reload()
        } catch (err) {
            alert(err.message)
            console.log(err)
        }
    }

    return (
        <form className="relative" onSubmit={handleSubmit(onSubmit)}>
            {isSubmitting && <Loading noOverlay />}
            <div>
                <h4 className="text-center text-xl font-semibold text-gray-700 mb-4">Thông tin gói dịch vụ</h4>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <Label>Tên gói cước</Label>
                        <input
                            {...register('nameFee')}
                            className="w-full p-1 focus:outline-none bg-gray-200 rounded-md"
                        />
                    </div>
                    <div className="flex items-center">
                        <Label>Giá</Label>
                        <input
                            {...register('price')}
                            className="w-full p-1 focus:outline-none bg-gray-200 rounded-md"
                        />
                    </div>
                    <div className="flex items-center">
                        <Label>Thời gian giao</Label>
                        <input
                            {...register('TGGiao')}
                            className="w-full p-1 focus:outline-none bg-gray-200 rounded-md"
                        />
                    </div>
                    <div className="flex items-center">
                        <Label>Số kg tối đa</Label>
                        <input
                            {...register('maxKg')}
                            className="w-full p-1 focus:outline-none bg-gray-200 rounded-md"
                        />
                    </div>
                    <div className="flex items-center">
                        <Label>Giá khi thêm 1kg</Label>
                        <input
                            {...register('pricePerKg')}
                            className="w-full p-1 focus:outline-none bg-gray-200 rounded-md"
                        />
                    </div>
                    <div className="flex items-center">
                        <Label>Tuyến</Label>
                        <select
                            {...register('idFee')}
                            className="w-full p-1 focus:outline-none bg-gray-200 rounded-md">
                            {tuyenList.map(tuyen => (
                                <option key={tuyen.value} value={tuyen.value}>{tuyen.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-md mb-3 text-right space-x-5 text-white text-sm mt-2">
                <button
                    type="submit"
                    className="font-semibold px-4 py-2 w-20 bg-green-500 rounded-md hover:bg-green-600"
                >
                    Lưu
                </button>
                <button
                    type="button"
                    className="font-semibold px-4 py-2 w-20 bg-blue-500 rounded-md hover:bg-blue-600"
                    onClick={closeModal}
                >
                    Đóng
                </button>
            </div>
        </form>
    )
}

export default PartnerPolicyForm