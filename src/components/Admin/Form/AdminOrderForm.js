import { useState } from "react"

const Label = ({ children }) => (<label className="w-40 text-left text-sm font-large">{children}</label>)
const Input = ({ className, ...props }) => <input {...props}
    className="block w-full border bg-gray-300 hover:bg-white focus:bg-white focus:border-blue-700 mb-1
 px-3 py-2 focus:outline-none"></input>
const InputDisable = ({ className, ...props }) => <input {...props}
    className="block w-full border bg-gray-100 mb-1
 px-3 py-2 focus:outline-none"></input>

const AdminOrderForm = () => {
	const [sentName, setSentName] = useState('')
	const [receiveName, setReceiveName] = useState('')
	const [sentPhone, setSentPhone] = useState('')
	const [sentAddress, setSentAddress] = useState('')
	const [receivePhone, setReceivePhone] = useState('')
	const [receiveAddress, setReceiveAddress] = useState('')
	const [sentEmail, setSentEmail] = useState('')
	const [sentAccount, setSentAccount] = useState('')
	const [sentNumberAccount, setSentNumberAccount] = useState('')

    return (
        <div>
            <h4 className="text-center text-xl font-semibold text-gray-700 mb-4">Thông tin chi tiết người gửi</h4>
            <div className="space-y-4">
                
                <div className="flex items-center">
                    <Label>Tên : </Label>
                    <InputDisable type="text" placeholder="Công Danh"
                            value={sentName} onChange={e => setSentName(e.target.value)} readOnly />
                </div>
				<div className="flex items-center">
                    <Label>Số điện thoại : </Label>
                    <InputDisable type="text" placeholder="0935190136"
                            value={sentPhone} onChange={e => setSentPhone(e.target.value)} readOnly />
                </div>
				<div className="flex items-center">
                    <Label>Địa chỉ : </Label>
                    <Input type="text" placeholder="Hồ chí minh"
                            value={sentAddress} onChange={e => setSentAddress(e.target.value)} />
                </div>
				<div className="flex items-center">
                    <Label>Email  :  </Label>
                    <InputDisable type="text" placeholder="memfth@gmail.com"
                            value={sentEmail} onChange={e => setSentEmail(e.target.value)} readOnly />
                </div>
                <div className="flex items-center">
                    <Label>Tài khoản : </Label>
                    <InputDisable type="text" placeholder="gapropp123"
                            value={sentAccount} onChange={e => setSentAccount(e.target.value)} readOnly />
                </div>
				<div className="flex items-center">
                    <Label>Số tài khoản : </Label>
                    <InputDisable type="text" placeholder="VCN312412312"
                            value={sentNumberAccount} onChange={e => setSentNumberAccount(e.target.value)}  readOnly/>
                </div>
				
				<h4 className="text-center text-xl font-semibold text-gray-700 mb-4">Thông tin chi tiết người nhận</h4>
				
                <div className="flex items-center">
                    <Label>Tên : </Label>
                    <InputDisable type="text" placeholder="Công Danh"
                            value={receiveName} onChange={e => setReceiveName(e.target.value)} readOnly />
                </div>
				<div className="flex items-center">
                    <Label>Số điện thoại : </Label>
                    <InputDisable type="text" placeholder="0935190136"
                            value={receivePhone} onChange={e => setReceivePhone(e.target.value)} readOnly />
                </div>
				<div className="flex items-center">
                    <Label>Địa chỉ : </Label>
                    <Input type="text" placeholder="Hồ chí minh"
                            value={receiveAddress} onChange={e => setReceiveAddress(e.target.value)} />
                </div>
				
				<h4 className="text-center text-xl font-semibold text-gray-700 mb-4">Thông tin đơn hàng</h4>
				
				<div className="flex items-center">
                    <Label>Mã bưu kiện : </Label>
                    <InputDisable type="text" placeholder="5234eFDF" readOnly />
                </div>
                <div className="flex items-center">
                    <Label>Ngày gửi : </Label>
                    <InputDisable type="text" placeholder="15/04/2020" readOnly />
                </div>
				<div className="flex items-center">
                    <Label>Ngày nhận : </Label>
                    <InputDisable type="text" placeholder="16/06/2021" readOnly />
                </div>
				<div className="flex items-center">
                    <Label>Tổng thanh toán : </Label>
                    <InputDisable type="text" placeholder="15,000$" readOnly />
                </div>
				<div className="flex items-center">
                    <Label>Trạng thái : </Label>
                    <InputDisable type="text" placeholder="Online" readOnly />
                </div>
				
            </div>
        </div>
    )
}

export default AdminOrderForm