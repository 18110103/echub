import FilterBar from "../../components/Partner/common/FilterBar"
import PartnerTable from "../../components/Partner/common/PartnerTable"
import TablePagination from "../../components/Partner/common/TablePagination"
import React, { useEffect, useState } from 'react'
import SearchNSort from "../../components/Partner/common/FilterBar"
import axios from "axios"
import usePartner from "../../hooks/query/usePartner"

const cols = [{
    id: "idBill",
    name: "Mã bưu kiện",
    width: "200px",
}, {
    id: "sendAdd",
    name: "Địa chỉ gửi",
    width: "200px",
}, {
    id: "receiveAdd",
    name: "Địa chỉ nhận",
    width: "200px",
}, {
    id: "sendPhone",
    name: "Sđt gửi",
}, {
    id: "receivePhone",
    name: "Sđt nhận",
}, {
    id: "status",
    name: "Trạng thái",
}]


const PartnerOrderPage = () => {
    const options = [{
        name: "Xác nhận đơn",
        onClick: () => {
            alert("Ok")
        }
    }, {
        name: "Chỉnh sửa",
        onClick: () => {
            alert("Ok")
        }
    }, {
        name: "Xóa",
        onClick: async (data) => {
            await axios.delete('http://localhost:57832/api/Bills/' + data.idBill)
            alert("Ok")
            fetchData()
        }
    }]

    const [data, setData] = useState(null)
    const { data: partnerData, currentPartner } = usePartner()
    console.log(partnerData)

    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:57832/api/Bills?companyId=' + partnerData.idCompany)
            setData(res.data.map(data => ({ ...data, status: data.shippingDone ? "Đã giao" : "Chưa giao" })))
        } catch (err) {
            alert(err.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [partnerData, currentPartner])

    return (
        <div>
            <div className="flex justify-end">
                <SearchNSort />
            </div>
            <PartnerTable cols={cols} rows={data} options={options} />
            <TablePagination />
        </div>
    )
}

export default PartnerOrderPage