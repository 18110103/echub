import Button from "../../common/Button"
import { LabelInput } from "../../common/Inputs"
import AdminAccountSettingHeader from "./AdminAccountSettingHeader"

const AdminChangePassword = () => {
    return <div>
        <AdminAccountSettingHeader>
            Đổi mật khẩu
        </AdminAccountSettingHeader>
        <div className="mb-6 max-w-sm mx-auto">
            <div className="mb-2">
                <LabelInput
                    type="password"
                    label="Mật khẩu hiện tại"
                />
            </div>
            <div className="mb-2">
                <LabelInput
                    type="password"
                    label="Mật khẩu mới"
                />
            </div>
            <div className="mb-6">
                <LabelInput
                    type="password"
                    label="Xác nhận mật khẩu"
                />
            </div>
            <div>
                <Button disabled>
                    Xác nhận
                </Button>
            </div>
        </div>
    </div>
}

export default AdminChangePassword