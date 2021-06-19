const Input = ({ }) => (
    <input type="password" className="border-blue-300 border-2 bg-gray-100 w-72 py-1 px-2 rounded-md" />
)

const Label = ({ children, htmlFor }) => (<label className="font-medium text-gray-700 block mb-2" htmlFor={htmlFor}>{children}</label>)

const AdminSettingPage = () => {
    return (
        <div className="max-w-xs mx-auto my-16">
            <div>
                <Label>Nhập mật khẩu cũ</Label>
                <Input />
            </div>
            <div>
                <Label>Nhập mật khẩu mới</Label>
                <Input />
            </div>
            <div>
                <Label>Xác nhận mật khẩu mới</Label>
                <Input />
            </div>
            <button className="w-72 h-8 mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full">
                Đổi mật khẩu
            </button>
        </div>
    )
}

export default AdminSettingPage