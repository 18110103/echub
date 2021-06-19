import React, { useEffect, useState } from "react"
import { useTable } from "react-table"
import UserSectionContainer from "../common/UserSectionContainer"
import UserSectionHeading from "../common/UserSectionHeading"
import numberWithCommas from "../../../util/numberWithCommas"
import { useFormContext } from "react-hook-form"
import classNames from 'classnames'
import Loading, { LoadingIcon } from "../../common/Loading"
import getBrandImage from "../../../utils/getBrandImage"

const Shipment = ({ shippingList, loading, setFee }) => {
    const { setValue } = useFormContext()
    const [selectIndex, setSelectIndex] = useState(null)

    const data = React.useMemo(
        () => shippingList || [],
        [shippingList]
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'Hãng vận chuyển',
                accessor: "idFee",
                Cell: (cellProps) => {
                    return <span className="flex items-center">
                        {getBrandImage(cellProps.value, "inline-block object-contain mr-2", { width: 50, height: 50 })}
                        {cellProps.value.split('_')[0]}
                    </span>
                }
            },
            {
                Header: 'Tên gói cước',
                accessor: "nameFee",
            },
            {
                Header: 'Thời gian giao',
                accessor: "tgGiao",
            },
            {
                Header: 'Phí vận chuyển',
                accessor: "truePrice",
            },
        ], []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    useEffect(() => {
        setSelectIndex(null)
    }, [shippingList])

    if (!shippingList) {
        return (
            <UserSectionContainer>
                <UserSectionHeading>DANH SÁCH ĐƠN VỊ VẬN CHUYỂN</UserSectionHeading>
                {loading ?
                    <div className="flex-center h-20">
                        <LoadingIcon />
                    </div> :
                    <div className="p-5 text-center text-xl font-bold max-w-xl mx-auto
                    text-gray-500">
                        Nhập đầy đủ thông tin để lấy danh sách các đơn vị vận chuyển
                    </div>
                }
            </UserSectionContainer>
        )
    }

    return <UserSectionContainer>
        <UserSectionHeading>DANH SÁCH ĐƠN VỊ VẬN CHUYỂN</UserSectionHeading>
        {loading ?
            <div className="flex-center h-20">
                <LoadingIcon />
            </div> :
            data.length === 0 ? (
                <div className="text-center">
                    <div className="p-5 text-center text-xl font-bold max-w-xl mx-auto
            text-gray-500">
                        Không có đơn vị vận chuyển nào hỗ trợ tuyến này
                    </div>
                </div>
            ) : (
                <div>
                    <table {...getTableProps()} className="w-full">
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}
                                    className="text-sm text-gray-600"
                                    style={{ fontSize: 13 }}>
                                    {headerGroup.headers.map(column => (
                                        <th className="font-medium text-left pb-2" {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps}>
                            {rows.map(row => {
                                prepareRow(row)
                                return (
                                    <tr onClick={() => {
                                        setValue('shipping', shippingList[row.index])
                                        setSelectIndex(row.index)
                                        setFee(row.values.truePrice)
                                    }} {...row.getRowProps()}
                                        className={classNames("hover:bg-gray-100 text-sm border-b cursor-pointer", {
                                            'bg-gray-100': selectIndex === row.index
                                        })}>
                                        {row.cells.map(cell => {
                                            return (
                                                <td {...cell.getCellProps()} className="py-2">
                                                    {cell.column.id === "idFee" && cell.render("Cell")}
                                                    {cell.column.id === "nameFee" && (<span>{cell.render("Cell")}</span>)}
                                                    {cell.column.id === "tgGiao" && (<span className="text-yellow-500">{cell.render("Cell")}</span>)}
                                                    {cell.column.id === "truePrice" && (<span className="text-red-500 font-medium">{numberWithCommas(cell.value)} đ</span>)}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )}
    </UserSectionContainer>
}

export default React.memo(Shipment)