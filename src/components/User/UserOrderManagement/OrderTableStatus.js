import classNames from "classnames"
import React, { useState } from "react"
import { useHistory } from "react-router"
import queryString from 'query-string'
import useOrders from "../../../hooks/query/useOrders"

const STATUS = {
    ALL: {
        name: "Tất cả",
        params: "all",
    },
    WAIT_FOR_CONFIRM: {
        name: "Chờ xác nhận",
        params: "wait_confirm"
    },
    WAIT_FOR_GET_PACKAGE: {
        name: "Chờ lấy hàng",
        params: "packing"
    },
    DELIVERING: {
        name: "Đang giao",
        params: "delivering"
    },
    DELIVERED: {
        name: "Đã giao",
        params: "delivered"
    },
    CANCELLED: {
        name: "Đã hủy",
        params: "cancelled"
    }
}

const OrderTableTypes = () => {
    const history = useHistory()
    const [status, setStatus] = useState(queryString.parse(history.location.search)?.status || 'all')
    const { refetch } = useOrders()

    const handleClick = (params) => {
        const queryParams = queryString.parse(history.location.search)
        history.push({
            search: queryString.stringify({ ...queryParams, status: params }),
        })
        setStatus(params)
        refetch()
    }

    return (
        <nav className="text-gray-600 font-semibold mt-2">
            <ul>
                {Object.keys(STATUS).map(statusKey => {
                    return (
                        <li className="inline-block">
                            <button style={{ zIndex: 2, fontSize: 13 }}
                                onClick={() => handleClick(STATUS[statusKey].params)}
                                className={classNames('relative inline-block px-3 h-8 rounded-full mb-2 mr-2', {
                                    "bg-blue-500 text-white": STATUS[statusKey].params === status,
                                    "hover:bg-gray-200": STATUS[statusKey].params !== status
                                })}>
                                {STATUS[statusKey].name}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default React.memo(OrderTableTypes)