const ErrorPage = () => {
    return <div className="py-48 text-center text-blue-600 select-none">
        <h3>
            <span className="w-1 h-1 mr-3 rounded-full align-middle bg-blue-600 inline-block" />
            ERROR
            <span className="w-1 h-1 ml-3 rounded-full align-middle bg-blue-600 inline-block" />
        </h3>
        <h1 className="text-8xl font-bold">404</h1>
        <hr className="w-32 border-blue-500 border-opacity-60 mt-8 mb-2 inline-block" />
        <h2 className=" text-lg">Page Not Found</h2>
    </div>
}

export default ErrorPage