import { useState } from "react"

const Label = ({ children }) => (<label className="w-40 text-left text-sm font-large">{children}</label>)
const Input = ({ className, ...props }) => <input {...props}
    className="block w-full border bg-gray-300 hover:bg-gray-200 focus:bg-white focus:border-blue-700 mb-1
 px-3 py-2 focus:outline-none"></input>
const InputDisable = ({ className, ...props }) => <input {...props}
    className="block w-full border bg-gray-100 mb-1
 px-3 py-2 focus:outline-none"></input>

const AdminPartnerForm = () => {
	const [companyName, setCompanyName] = useState('')
	const [ownerName, setOwnerName] = useState('')
	const [code, setCode] = useState('')
	const [phone, setPhone] = useState('')
	const [address, setAddress] = useState('')
	const [email, setEmail] = useState('')
	const [account, setAccount] = useState('')
	const [password, setPassword] = useState('')
	const [dateCreate, setDateCreate] = useState('')
	const [dateEnd, setDateEnd] = useState('')
    return (
        <div>
            <h4 className="text-center text-xl font-semibold text-gray-700 mb-4">Thông tin chi tiết khách hàng</h4>
            <div className="space-y-4">
                <div className="flex items-center">
                    <Label>Tên công ty : </Label>
                    <InputDisable type="text" placeholder="Grab"
                            value={companyName} onChange={e => setCompanyName(e.target.value)} readOnly />
                </div>
                <div className="flex items-center">
                    <Label>Tên chủ sở hữu : </Label>
                    <InputDisable type="text" placeholder="Công Danh"
                            value={ownerName} onChange={e => setOwnerName(e.target.value)} readOnly />
                </div>
				
				<div className="flex items-center">
                    <Label>Mã số thuế : </Label>
                    <InputDisable type="text" placeholder="DFSAFWEF4234324"
                            value={code} onChange={e => setCode(e.target.value)} readOnly />
                </div>
				
				
				<div className="flex items-center">
                    <Label>Ngày đăng ký : </Label>
                    <InputDisable type="text" placeholder="01/12/2020"
                            value={dateCreate} onChange={e => setDateCreate(e.target.value)} readOnly />
                </div>
				<div className="flex items-center">
                    <Label>Ngày kết thúc : </Label>
                    <InputDisable type="text" placeholder="12/12/2021"
                            value={dateEnd} onChange={e => setDateEnd(e.target.value)} readOnly />
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
                            value={password} onChange={e => setPassword(e.target.value)} />
                </div>
				
            </div>
        </div>
    )
}

export default AdminPartnerForm