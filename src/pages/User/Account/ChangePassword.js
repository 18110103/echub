import { useForm } from "react-hook-form"
import { putUser } from "../../../api/account"
import Button from "../../../components/User/common/Button"
import { LabelInput } from "../../../components/User/common/Inputs"
import UserAccountSettingHeader from "../../../components/User/UserAccountSetting/UserAccountSettingHeader"
import useUser from "../../../hooks/query/useUser"

const ChangePassword = () => {
    const { data: userData } = useUser()
    const { register, handleSubmit, formState: { isSubmitting } } = useForm()

    const onSubmit = async (data) => {
        if (data.currentPassword !== userData.password) {
            alert('Mật khẩu cũ không đúng')
            return
        }
        if (data.newPassword !== data.confirmPassword) {
            alert('Mật khẩu xác nhận không đúng')
            return
        }
        try {
            console.log(data)
            await putUser(userData.idUser, {
                password: data.newPassword
            })
            alert("Cập nhật thành công")
        } catch (err) {
            alert(err?.message || err)
        }
    }


    return <div>
        <UserAccountSettingHeader>
            Đổi mật khẩu
        </UserAccountSettingHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="mb-6 max-w-sm mx-auto">
            <div className="mb-2">
                <LabelInput
                    register={register('currentPassword')}
                    type="password"
                    label="Mật khẩu hiện tại"
                />
            </div>
            <div className="mb-2">
                <LabelInput
                    register={register('newPassword')}
                    type="password"
                    label="Mật khẩu mới"
                />
            </div>
            <div className="mb-6">
                <LabelInput
                    register={register('confirmPassword')}
                    type="password"
                    label="Xác nhận mật khẩu"
                />
            </div>
            <div className="text-center">
                <Button fullWidth loading={isSubmitting}>
                    Xác nhận
                </Button>
            </div>
        </form>
    </div>
}

export default ChangePassword