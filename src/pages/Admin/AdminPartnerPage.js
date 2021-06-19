import FilterBar from "../../components/Admin/common/FilterBar"
import AdminTable from "../../components/Admin/common/AdminTable"
import TablePagination from "../../components/Admin/common/TablePagination"
import React from 'react'
import SearchNSort from "../../components/Admin/common/FilterBar"
import CustomizedDialog from "../../components/common/CustomizedDialog"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from "react"
import AdminPartnerForm from "../../components/Admin/Form/AdminPartnerForm"
import AdminAddPartnerForm from "../../components/Admin/Form/AdminAddPartnerForm"
import axios from "axios"

const cols = [{
    id: "idCompany",
    name: "Mã công ty",
    width: "12px",
}, {
    id: "companyName",
    name: "Tên công ty",
    width: "80px",
}, {
    id: "comAddress",
    name: "Địa chỉ",
    width: "80px",
}, {
    id: "email",
    name: "Email",
    width: "12px",
}, {
    id: "service",
    name: "Gói dịch vụ",
    width: "12px",
}, {
    id: "password",
    name: "Mật khảu",
    width: "12px",
}, {
    id: "status",
    name: "Trạng thái",
    width: "12px",
}]




const AdminPartnerPage = () => {
    const [isOpen, setIsOpen] = useState(false)
	const [isOpenAdd, setIsOpenAdd] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }
	const closeAddModal = () => {
        setIsOpenAdd(false)
    }
	const [data, setData] = useState(null)
	
	useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:57832/api/ShipCompanies')
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
            <div className="flex justify-between">
                    <button onClick={() => setIsOpenAdd(true)}
                        className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-lg text-sm font-semibold">
                        Thêm đối tác
                    </button>
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
                        Quản lý tài khoản doanh nghiệp
                    </Dialog.Title>
                    <Dialog.Description
                        className="mx-auto max-w-md p-2 mb-3">
                       <AdminPartnerForm />
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
			<CustomizedDialog isOpen={isOpenAdd} onClose={() => { }}>
                <div className="inline-block w-screen max-w-2xl overflow-hidden transition-all transform bg-white shadow-xl">
                    <Dialog.Title
                        as="h3"
                        className="font-semibold p-3 bg-blue-400 text-white text-center"
                    >
                        Thêm tài khoản doanh nghiệp
                    </Dialog.Title>
                    <Dialog.Description
                        className="mx-auto max-w-md p-2 mb-3">
                       <AdminAddPartnerForm closeAddModal={() => setIsOpenAdd(false)}  />
                    </Dialog.Description>
                    
                </div>
            </CustomizedDialog>
			</>
    )
}

export default AdminPartnerPage