import { useForm } from "react-hook-form"
import { createShipcompany } from "../../../api/shipCompany"
import Loading from '../../common/Loading'

const Label = ({ children }) => (<label className="w-40 text-left text-sm font-medium">{children}</label>)

const AdminAddPartnerForm = ({ closeAddModal }) => {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm()

    const onSubmit = async (data) => {
        try {
            await createShipcompany({
                ...data
            })
            closeAddModal()
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
                        <Label>Mã công ty</Label>
                        <input
                            {...register('idCompany')}
                            className="w-full p-1 focus:outline-none bg-gray-200 rounded-md"
                        />
                    </div>
                    <div className="flex items-center">
                        <Label>Tên công ty</Label>
                        <input
                            {...register('companyName')}
                            className="w-full p-1 focus:outline-none bg-gray-200 rounded-md"
                        />
                    </div>
                    <div className="flex items-center">
                        <Label>Địa chỉ công ty</Label>
                        <input
                            {...register('comAddress')}
                            className="w-full p-1 focus:outline-none bg-gray-200 rounded-md"
                        />
                    </div>
                    <div className="flex items-center">
                        <Label>Mã số thuế</Label>
                        <input
                            {...register('mst')}
                            className="w-full p-1 focus:outline-none bg-gray-200 rounded-md"
                        />
                    </div>
                    <div className="flex items-center">
                        <Label>Email</Label>
                        <input
                            {...register('email')}
                            className="w-full p-1 focus:outline-none bg-gray-200 rounded-md"
                        />
                    </div>
					<div className="flex items-center">
                        <Label>Ngày đăng ký</Label>
                        <input
                            {...register('RegisterDay')}
                            className="w-full p-1 focus:outline-none bg-gray-200 rounded-md"
                        />
                    </div>
					<div className="flex items-center">
                        <Label>Ngày hết hạn</Label>
                        <input
                            {...register('EndDay')}
                            className="w-full p-1 focus:outline-none bg-gray-200 rounded-md"
                        />
                    </div>
					<div className="flex items-center">
                        <Label>Tài khoản</Label>
                        <input
                            {...register('userName')}
                            className="w-full p-1 focus:outline-none bg-gray-200 rounded-md"
                        />
                    </div>
					<div className="flex items-center">
                        <Label>Mật khẩu</Label>
                        <input
                            {...register('password')}
                            className="w-full p-1 focus:outline-none bg-gray-200 rounded-md"
                        />
                    </div>
					
                </div>
            </div>
            <div className="mx-auto max-w-md mb-3 text-right space-x-5 text-white text-sm mt-2">
				<button
                    type="button"
                    className="font-semibold px-4 py-2 w-20 bg-red-500 rounded-md hover:bg-red-600"
					onClick={closeAddModal}
                >
                    Xóa
                </button>
                <button
                    type="submit"
                    className="font-semibold px-4 py-2 w-20 bg-green-500 rounded-md hover:bg-green-600"
                >
                    Lưu
                </button>
                <button
                    type="button"
                    className="font-semibold px-4 py-2 w-20 bg-blue-500 rounded-md hover:bg-blue-600"
                    onClick={closeAddModal}
                >
                    Đóng
                </button>
            </div>
        </form>
    )
}

export default AdminAddPartnerForm