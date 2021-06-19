import moment from "moment";
import React, { useState } from "react";
import useOrders from "../../../hooks/query/useOrders";
import { PriceCell, StatusCell } from "./Cells";
import FilterBar from "./FilterBar";
import OrderTable from "./OrderTable"
import TablePagination from "./TablePagination";

const OrderTableContainer = () => {
    const { isError, data: orders, isFetching } = useOrders();
    const [searchString, setSearchString] = useState('')

    const data = React.useMemo(
        () => isFetching || isError ? Array(5).fill({}) : orders.filter(order => {
            return order.idBill.includes(searchString.toLowerCase()) ||
                order.sendPhone.includes(searchString) ||
                order.receivePhone.includes(searchString)
        }),
        [isFetching, isError, orders, searchString]
    )

    const columns = [
        {
            Header: 'Mã đơn hàng',
            accessor: 'idBill',
            maxWidth: 1000,
        },
        // {
        //     Header: 'Tên đơn hàng',
        //     accessor: 'packageName',
        //     width: 250
        // },
        // {
        //     Header: 'Khách hàng',
        //     accessor: 'customer',
        // },
        {
            Header: 'Ngày giao',
            accessor: 'shippingTime',
            width: 111,
            Cell: ({ value }) => (
                <div>{value}</div>
            )
        },
        {
            Header: 'Cân nặng',
            accessor: 'weight',
        },
        {
            Header: 'Sđt người gửi',
            accessor: 'sendPhone',
        },
        {
            Header: 'Sđt người giao',
            accessor: 'receivePhone',
        },
        {
            Header: 'Đơn giá',
            accessor: 'shippingFee',
            Cell: cellProps => (
                <PriceCell {...cellProps} />
            ),
            width: 100
        },
        // {
        //     Header: () => (
        //         <div className="text-center">Trạng thái</div>
        //     ),
        //     accessor: 'status',
        //     Cell: cellProps => (
        //         <StatusCell {...cellProps} />
        //     ),
        //     width: 140
        // },
        {
            Header: () => (
                <div className="text-center">Đã giao</div>
            ),
            accessor: 'status',
            Cell: ({ value }) => (
                <div className="text-center w-full">{value ? "Có" : "Không"}</div>
            ),
            width: 140
        },
    ]

    return (
        <div style={{ maxWidth: 1100 }} className="mx-auto bg-white shadow-md rounded-lg border rounded-tl-none flex-col flex">
            <div className="flex-auto p-3">
                <FilterBar setSearchString={setSearchString} />
                <OrderTable columns={columns} data={data} loading={isFetching} error={isError}>
                    {(state) => {
                        return <div>
                            {state}
                        </div>
                    }}
                </OrderTable>
                {/* <TablePagination /> */}
            </div>
        </div>
    )
}

export default OrderTableContainer