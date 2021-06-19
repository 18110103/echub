import classNames from "classnames";
import React from "react"
import ScrollContainer from "react-indiana-drag-scroll"
import Skeleton from "react-loading-skeleton";
import { useHistory } from "react-router";
import { useFlexLayout, useTable } from "react-table"
import useOrders from "../../../hooks/query/useOrders";
import Button from "../common/Button";

const OrderTable = ({ columns, data, loading, error }) => {
    const history = useHistory();
    const { refetch } = useOrders()

    const tableColumns = React.useMemo(
        () => loading ? columns.map(column => ({
            ...column,
            Cell: () => (
                <span className="w-full"><Skeleton width="100%" /></span>
            )
        })) : columns,
        [loading, columns]
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns: tableColumns, data }, useFlexLayout)

    return (
        <ScrollContainer hideScrollbars={false}>
            <table style={{ minWidth: 768 }} {...getTableProps()} className="w-full text-sm table-fixed">
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()} className="bg-user text-indigo-700 text-xs">
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()} className="font-semibold p-3 text-left">
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                </thead>
                <tbody {...getTableBodyProps()} className="space-y-0.5 bg-user">
                    {
                        error
                            ?
                            <tr>
                                <td rowSpan="100%">
                                    <div className="h-96 bg-white justify-center items-center flex flex-col">
                                        <h1>Co gi sai sai!</h1>
                                        <Button onClick={() => refetch()}>Thu lai</Button>
                                    </div>
                                </td>
                            </tr>
                            :
                            rows.map(row => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}
                                        onClick={e => {
                                            if (loading)
                                                e.preventDefault()
                                            else
                                                history.push(history.location.pathname + '/' + row.values.idBill)
                                        }}
                                        className={classNames('bg-white text-gray-600 font-medium text-xs', {
                                            'cursor-pointer hover:bg-gray-50 transition-colors duration-100': !loading,
                                        })}>
                                        {
                                            row.cells.map(cell => {
                                                return (
                                                    <td {...cell.getCellProps()} className="p-3 flex items-center">
                                                        {cell.render('Cell')}
                                                    </td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })}
                </tbody>
            </table>
        </ScrollContainer >
    )
}

export default OrderTable