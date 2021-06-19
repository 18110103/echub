import FilterBar from "../../components/Admin/common/FilterBar"
import AdminTable from "../../components/Admin/common/AdminTable"
import TablePagination from "../../components/Admin/common/TablePagination"
import React, {useEffect}  from 'react'
import SearchNSort from "../../components/Admin/common/FilterBar"
import CustomizedDialog from "../../components/common/CustomizedDialog"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from "react"
import AdminCustomerForm from "../../components/Admin/Form/AdminCustomerForm"
import axios from "axios"

const cols = [{
    id: "idUser",
    name: "ID",
    width: "12px",
}, {
    id: "firstName",
    name: "Họ",
    width: "80px",
}, {
    id: "lastName",
    name: "Tên",
    width: "80px",
}, {
    id: "address",
    name: "Địa chỉ",
    width: "80px",
}, {
    id: "email",
    name: "Địa chỉ mail",
    width: "80px",
}, {
    id: "phone",
    name: "Số điện thoại",
    width: "12px",
}, {
    id: "userName",
    name: "Tài khoản",
    width: "12px",
}, {
    id: "password",
    name: "Mật khẩu",
    width: "12px",
}, {
    id: "authen",
    name: "Trạng thái",
    width: "12px",
}]




const AdminCustomerPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }
	
	const [data, setData] = useState(null)
	
	useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:57832/api/Users')
                setData(res.data)
                console.log(res.data)
            } catch (err) {
                alert(err.message)
            }
        }
        fetchData()
    })
	
    const options = [{
        name: "Chặn",
        onClick: () => {
            alert("Ok")
        }
    }, {
        name: "Chỉnh sửa",
        onClick: () => {
            setIsOpen(true)
        }
    }, {
        name: "Xóa",
        onClick: () => {
            alert("Ok")
        }
    }
	, {
        name: "Ngắt kết nối",
        onClick: () => {
            alert("Ok")
        }
    }]

    return (
	<>
        <div>
            <div className="flex justify-end">
                <SearchNSort />
            </div>
            <AdminTable cols={cols} rows={data} options={options} />
            <TablePagination />
        </div>
		<CustomizedDialog isOpen={isOpen} onClose={() => { }}>
                <div className="inline-block w-screen max-w-2xl overflow-hidden transition-all transform bg-white shadow-xl">
                    <Dialog.Title
                        as="h3"
                        className="font-semibold p-3 bg-blue-400 text-white text-center"
                    >
                        Quản lý khách hàng
                    </Dialog.Title>
                    <Dialog.Description
                        className="mx-auto max-w-md p-2 mb-3">
                       <AdminCustomerForm />
                    </Dialog.Description>
                    <div className="mx-auto max-w-md mb-3 text-right space-x-5 text-white text-sm">
                        <button
                            type="button"
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
                </div>
            </CustomizedDialog>
			</>
    )
}

export default AdminCustomerPage