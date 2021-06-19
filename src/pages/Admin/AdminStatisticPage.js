import FilterBar from "../../components/Admin/common/FilterBar"
import AdminTable from "../../components/Admin/common/AdminTable"
import TablePagination from "../../components/Admin/common/TablePagination"
import React from 'react'
import SearchNSort from "../../components/Admin/common/FilterBar"
import CustomizedDialog from "../../components/common/CustomizedDialog"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from "react"
import AdminOrderForm from "../../components/Admin/Form/AdminOrderForm"

const cols = [{
    id: "id",
    name: "Mã bill",
    width: "12px",
}, {
    id: "hub",
    name: "Đơn vị vận chuyển",
    width: "80px",
}, {
    id: "price",
    name: "Đơn giá",
    width: "80px",
}, {
    id: "status",
    name: "Trạng thái",
    width: "12px",
}]

const rows = [{
    id: "asdasd",
    hub: "sadasd",
    price: "asdascas",
    status: <div>asdsd</div>
}]


const AdminStatisticPage = () => {
	const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }
	
   

    return (
	
        <div>
            <div className="flex justify-end">
                
            </div>
            <AdminTable cols={cols} rows={rows}  />
			<button className="w-80 h-10 mt-5 bg-blue-500 text-white font-medium rounded-full" disable>
                Tổng doanh thu : 1,500,000 VNĐ
            </button>
            <TablePagination />
        </div>
		
    )
}

export default AdminStatisticPage