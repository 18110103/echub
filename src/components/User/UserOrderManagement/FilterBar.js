import { FaSearch } from "react-icons/fa"
import { useState } from "react"
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import './react_dates_overrides.css'
import { MdClose } from 'react-icons/md'
import moment from "moment";
import { useHistory } from "react-router";
import queryString from 'query-string'
import useOrders from "../../../hooks/query/useOrders";

const FilterBar = ({ setSearchString }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
    const { refetch } = useOrders()
    const history = useHistory()

    const handleDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
    };

    const handleSearch = e => {
        e.preventDefault()
        // const queryParams = queryString.parse(history.location.search)
        // history.push({
        //     search: queryString.stringify({ ...queryParams, search: e.target.search.value }),
        // })
        setSearchString(e.target.search.value)
    }
    return (
        <div style={{ fontSize: 13 }}
            className="flex justify-between bg-white rounded-sm mb-4 items-center text-gray-600">
            <div className="flex flex-1 items-center">
                <form onSubmit={handleSearch} className="relative w-full mr-6">
                    <input name="search" id="search"
                        className="py-2 pl-8 pr-1 rounded-lg w-full bg-user border focus:border-blue-400"
                        placeholder="Tìm kiếm theo mã đơn hàng, số điện thoại" />
                    <button className="absolute h-full flex top-0 w-8 justify-center items-center
                    text-gray-500">
                        <FaSearch />
                    </button>
                </form>
                {/* <div className="flex-shrink-0">
                    <DateRangePicker
                        numberOfMonths={1}
                        startDate={startDate}
                        startDateId="tata-start-date"
                        startDatePlaceholderText="Từ"
                        endDate={endDate}
                        endDatePlaceholderText="Đến"
                        endDateId="tata-end-date"
                        onDatesChange={handleDatesChange}
                        focusedInput={focusedInput}
                        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
                        readOnly
                        inputIconPosition="after"
                        small
                        noBorder
                        hideKeyboardShortcutsPanel
                        showClearDates
                        customCloseIcon={<MdClose />}
                        isOutsideRange={(day) => !(day.isBefore(moment()) && day.isAfter(moment().subtract(1, 'month')))}
                    />
                </div> */}
            </div>
        </div>
    )
}

export default FilterBar