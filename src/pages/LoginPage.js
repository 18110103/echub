import { useState } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as LoginSvg } from '../assets/login.svg'
import { BsArrowLeft } from 'react-icons/bs'
import Loading from '../components/common/Loading'
import Logo from "../components/common/Logo"

const Input = ({ className, ...props }) => <input {...props}
    className="block w-full border bg-gray-100 hover:bg-gray-200 focus:bg-white focus:border-blue-700 mb-5
 px-3 py-2 focus:outline-none"></input>

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isLoading = false

    const handleLogin = e => {
        e.preventDefault()
        if (email === "test" && password === "123") {
            alert("OK")
        }
    }

    return <div className="min-h-screen h-full bg-user bg-opacity-60">
        <div className="flex w-full min-h-full items-center">
            <div className="w-1/2 p-5 max-w-sm mx-auto border rounded-sm bg-white shadow">
                <Link to="/" className="mb-10 inline-block text-gray-600 hover:text-black"><BsArrowLeft className="inline align-middle" /> Trang chủ</Link>
                <Logo className="mx-auto h-20" />
                <form className="w-full" onSubmit={handleLogin}>
                    <h1 className="text-center text-3xl text-gray-600 mb-5">
                        Đăng nhập
                    </h1>
                    <hr className="mb-5 w-24 border-t-2 mx-auto border-gray-300" />
                    <div>
                        <Input type="text" placeholder="Email"
                            value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <Input type="password" placeholder="Mật khẩu"
                            value={password} onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button className={`block w-full bg-blue-500 ${isLoading ? "bg-opacity-70 cursor-not-allowed" : "hover:bg-blue-700"} 
                    text-white py-2 font-bold transition-colors`}>
                        {isLoading ? <Loading /> : "Đăng nhập"}
                    </button>
                    <div className="text-right mt-3">
                        <Link className="text-sm text-gray-600 font-medium underline"
                            to="/reset-password">
                            Quên mật khẩu?
                        </Link>
                    </div>
                </form>
                <div className="mt-24 text-gray-700 text-center border-t pt-4 mx-4">
                    Chưa có tài khoản? <Link to="/register" className="text-blue-600 underline">Đăng ký ngay!</Link>
                </div>
            </div>
            <div className="w-1/2">
                <LoginSvg className="h-full w-full" />
            </div>
        </div>
    </div>
}

export default LoginPage