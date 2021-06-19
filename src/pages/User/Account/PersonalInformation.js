import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { putUser } from "../../../api/account"
import Button from "../../../components/User/common/Button"
import { Label } from "../../../components/User/common/Inputs"
import UserAccountSettingHeader from "../../../components/User/UserAccountSetting/UserAccountSettingHeader"
import useUser from "../../../hooks/query/useUser"

const PersonalInformation = () => {
    const { data: userData, refetch } = useUser()
    const { register, handleSubmit, formState: { isSubmitting } } = useForm({
        defaultValues: {
            firstName: userData.firstName,
            lastName: userData.lastName,
            userName: userData.userName,
            phone: userData.phone,
            email: userData.email
        }
    })

    const onSubmit = async (data) => {
        try {
            console.log(data)
            await putUser(userData.idUser, data)
            await refetch()
            alert("Cập nhật thành công")
        } catch (err) {
            alert(err?.message || err)
        }
    }


    return <form onSubmit={handleSubmit(onSubmit)} className="text-gray-700 flex flex-col justify-between h-full text-sm">
        <div>
            <UserAccountSettingHeader>
                Thông tin tài khoản
            </UserAccountSettingHeader>
            <div className="mb-6 max-w-md">
                <div className="mb-6 flex items-center">
                    <Label className="w-28 flex-shrink-0">
                        Họ
                    </Label>
                    <input {...register('firstName')} className="py-1 px-2 input rounded-lg bg-user" />
                </div>
                <div className="mb-6 flex items-center">
                    <Label className="w-28 flex-shrink-0">
                        Tên
                    </Label>
                    <input {...register('lastName')} className="py-1 px-2 input rounded-lg bg-user" />
                </div>
                <div className="mb-6 flex items-center">
                    <Label className="w-28 flex-shrink-0">
                        Tên đăng nhập
                    </Label>
                    <input {...register('userName')} className="py-1 px-2 input rounded-lg bg-user" />
                </div>
                <div className="mb-6 flex items-center">
                    <Label className="w-28 flex-shrink-0">
                        Email
                    </Label>
                    <input {...register('email')} className="py-1 px-2 input rounded-lg bg-user" />
                </div>
                <div className="mb-6 flex items-center">
                    <Label className="w-28 flex-shrink-0">
                        Số điện thoại
                    </Label>
                    <input {...register('phone')} className="py-1 px-2 input rounded-lg bg-user" />
                </div>
            </div>
        </div>
        <div className="border-t pt-2">
            <Button type="submit" loading={isSubmitting} className="w-24 rounded-2xl">Lưu</Button>
        </div>
    </form>
}

export default PersonalInformation