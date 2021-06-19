import { Link } from "react-router-dom"

const ServiceCard = ({ icon, subtitle, title, code, url }) => {
    const Icon = icon
    return <div className="w-full px-2 xl:px-12 max-w-md mb-5 sm:px-5">
        <Link to={url} className="group duration-300 block w-full
        bg-white text-center p-2 hover:text-blue-600 hover:bg-blue-500 
        hover:shadow-xl hover:scale-105 transform transition-all">
            <Icon className=" group-hover:text-white inline-block text-blue-500 text-6xl mt-6 mb-10" />
            <div className="bg-blue-500 group-hover:bg-white group-hover:text-blue-500 text-white text-xs xl:text-sm font-medium mx-5 rounded-md p-1">{subtitle}</div>
            <div className="my-6 lg:my-14 text-xl xl:text-2xl font-light px-5 group-hover:text-white">{title}</div>
            <div className="group-hover:text-white group-hover:border-white my-4 ly:my-10 text-xl pb-2 font-medium text-black border-b-2 border-black inline-block">{code}</div>
        </Link>
    </div>

}

export default ServiceCard