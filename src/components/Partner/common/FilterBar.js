import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const SearchNSort = ({ }) => {
    return (
        <div className="flex items-center">
            <form className="p-1 rounded-full border-2 border-blue-400 flex items-center text-sm text-gray-500">
                <AiOutlineSearch className="mx-2 text-blue-400" size={20} />
                <input className="w-52 font-medium" placeholder="Tìm kiếm" />
            </form>
        </div>
    )
}

export default SearchNSort