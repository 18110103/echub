import { useState } from "react"

const Label = ({ children }) => (<label className="w-40 text-left text-sm font-large">{children}</label>)
const Input = ({ className, ...props }) => <input {...props}
    className="block w-full border bg-gray-300 hover:bg-gray-200 focus:bg-white focus:border-blue-700 mb-1
 px-3 py-2 focus:outline-none"></input>
const InputDisable = ({ className, ...props }) => <input {...props}
    className="block w-full border bg-gray-100 mb-1
 px-3 py-2 focus:outline-none"></input>

const AdminCustomerForm = () => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [phone, setPhone] = useState('')
	const [address, setAddress] = useState('')
	const [email, setEmail] = useState('')
	const [account, setAccount] = useState('')
	const [password, setPassword] = useState('')
	const [DOB, setDOB] = useState('')
    return (
        <div>
            <h4 className="text-center text-xl font-semibold text-gray-700 mb-4">Thông tin chi tiết khách hàng</h4>
            <div className="space-y-4">
                <div className="flex items-center">
                    <Label>Họ : </Label>
                    <InputDisable type="text" placeholder="Võ"
                            value={firstName} onChange={e => setFirstName(e.target.value)} readOnly />
                </div>
                <div className="flex items-center">
                    <Label>Tên : </Label>
                    <InputDisable type="text" placeholder="Công Danh"
                            value={lastName} onChange={e => setLastName(e.target.value)} readOnly />
                </div>
				<div className="flex items-center">
                    <Label>Giới tính : </Label>
                    <select className="w-full p-1 focus:outline-none bg-gray-200 rounded-md">
                        <option>{"Nam"}</option>
						<option>{"Nữ"}</option>
						<option>{"Khác"}</option>
                    </select>
                </div>
				<div className="flex items-center">
                    <Label>Ngày sinh : </Label>
                    <InputDisable type="text" placeholder="01/12/2000"
                            value={DOB} onChange={e => setDOB(e.target.value)} readOnly />
                </div>
                <div className="flex items-center">
                    <Label>Số điện thoại : </Label>
                    <Input type="text" placeholder="0935190136"
                            value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
                <div className="flex items-center">
                    <Label>Địa chỉ : </Label>
                    <Input type="text" placeholder="Hồ chí minh"
                            value={address} onChange={e => setAddress(e.target.value)} />
                </div>
                <div className="flex items-center">
                    <Label>Email  :  </Label>
                    <InputDisable type="text" placeholder="memfth@gmail.com"
                            value={email} onChange={e => setEmail(e.target.value)} readOnly />
                </div>
                <div className="flex items-center">
                    <Label>Tài khoản : </Label>
                    <InputDisable type="text" placeholder="gapropp123"
                            value={account} onChange={e => setAccount(e.target.value)} readOnly />
                </div>
				<div className="flex items-center">
                    <Label>Mật khẩu : </Label>
                    <Input type="text" placeholder="123456789"
                            value={password} onChange={e => setPassword(e.target.value)} readOnly />
                </div>
				
            </div>
        </div>
    )
}

export default AdminCustomerForm