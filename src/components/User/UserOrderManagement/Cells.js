import classNames from "classnames"
import numberWithCommas from '../../../util/numberWithCommas'

const ORDER_STATUS = {
    WATITNG: 'Incredible',
    CONFIRMED: 'Unbranded',
    DELIVERED: 'Tasty',
    CANCELLED: 'Refined'
}

const StatusCell = ({ value }) => {
    return (
        <div className={classNames('w-10/12 p-2 rounded-lg text-center font-bold bg-opacity-80 mx-auto', {
            'bg-gray-100 text-gray-400': value === ORDER_STATUS.WATITNG,
            'bg-indigo-100 text-indigo-500': value === ORDER_STATUS.CONFIRMED,
            'bg-green-100 text-green-500': value === ORDER_STATUS.DELIVERED,
            'bg-red-100 text-red-500': value === ORDER_STATUS.CANCELLED,
        })}>{value}</div>
    )
}

const PriceCell = ({ value }) => {
    return (
        <div className="text-indigo-600">{numberWithCommas(value)} <span className="underline text-indigo-300">đ</span></div>
    )
}

export {
    StatusCell,
    PriceCell
}