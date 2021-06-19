import SearchNSort from "../../components/Partner/common/FilterBar"
import PartnerTable from "../../components/Partner/common/PartnerTable"
import TablePagination from "../../components/Partner/common/TablePagination"
import { Dialog } from '@headlessui/react'
import { useEffect, useState } from "react"
import PartnerPolicyForm from "../../components/Partner/PartnerPolicy/PartnerPolicyForm"
import CustomizedDialog from "../../components/common/CustomizedDialog"
import axios from "axios"
import usePartner from "../../hooks/query/usePartner"
import { searchFees } from "../../api/shippingFee"

const cols = [{
    id: "nameFee",
    name: "Tên gói cước",
    width: "12px",
}, {
    id: "price",
    name: "Giá",
    width: "80px",
}, {
    id: "tgGiao",
    name: "Thời gian giao",
    width: "80px",
}, {
    id: "maxKg",
    name: "Khối lượng tối đa",
    width: "70px",
}, {
    id: "pricePerKg",
    name: "Giá tăng theo 1kg",
    width: "70px",
}, {
    id: "tuyen",
    name: "Tuyến",
    width: "70px",
}]

const PartnerPolicyPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState([])
    const { data: partnerData, currentPartner } = usePartner()

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(partnerData)
                const data = await searchFees(partnerData.companyName)
                setData(data)
            } catch (err) {
                alert(err.message)
            }
        }
        fetchData()
    }, [partnerData, currentPartner])

    return (
        <>
            <div>
                <div className="flex justify-between">
                    <button onClick={() => setIsOpen(true)}
                        className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-lg text-sm font-semibold">
                        Thêm gói cước
                    </button>
                    <SearchNSort />
                </div>
                <PartnerTable cols={cols} rows={data} />
                <TablePagination />
            </div>
            <CustomizedDialog isOpen={isOpen} onClose={() => { }}>
                <div className="inline-block w-screen max-w-2xl overflow-hidden transition-all transform bg-white shadow-xl">
                    <Dialog.Title
                        as="h3"
                        className="font-semibold p-3 bg-blue-400 text-white text-center"
                    >
                        Gói dịch vụ
                    </Dialog.Title>
                    <Dialog.Description
                        className="mx-auto max-w-md p-2 mb-3">
                        <PartnerPolicyForm closeModal={() => setIsOpen(false)} />
                    </Dialog.Description>
                </div>
            </CustomizedDialog>
        </>
    )
}

export default PartnerPolicyPage