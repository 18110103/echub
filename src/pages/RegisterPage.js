import { useState } from "react"
import { useForm } from "react-hook-form"
import { BsArrowLeft } from "react-icons/bs"
import { Link, useHistory } from "react-router-dom"
import { registerUser } from "../api/account"
import { ReactComponent as RegisterSvg } from '../assets/register.svg'
import { LoadingIcon } from "../components/common/Loading"
import Logo from "../components/common/Logo"
import useDistrict from "../hooks/query/useDistrict"
import useProvince from "../hooks/query/useProvince"
import useWard from "../hooks/query/useWard"
import createGuid from "../utils/createGuid"

const Input = (props) => <input {...props}
    className="block w-full border bg-gray-100 hover:bg-gray-200 focus:bg-white focus:border-blue-700
 px-3 py-2 focus:outline-none"></input>

const Select = ({ children, register, onChange }) => <select onChange={onChange} {...register} className="block w-full border bg-gray-100 hover:bg-gray-200 focus:bg-white focus:border-blue-700
px-3 py-2 focus:outline-none">{children}</select>

const RegisterPage = () => {
    const history = useHistory()

    const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm()
    const { isLoading: provinceLoading, data: provinceData } = useProvince()
    const { isLoading: districtLoading, data: districtData } = useDistrict()
    const { isLoading: wardLoading, data: wardData } = useWard()

    const [province, setProvince] = useState(null)
    const [district, setDistrict] = useState(null)

    if (provinceLoading || districtLoading || wardLoading) {
        return (<div className="inset-0 absolute flex-center"><LoadingIcon /></div>)
    }

    const onSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            alert("Mật khẩu xác nhận không giống")
            return
        }
        try {
            await registerUser({
                idUser: createGuid(),
                firstName: data.firstName,
                lastName: data.lastName,
                userName: data.userName,
                password: data.password,
                phone: data.phone,
                address: data.address,
                email: data.email,
                subDisid: data.subDisid
            })
            reset()
            alert("Đăng ký thành công!")
            history.push('/login')
        } catch (err) {
            console.log(err?.message || err)
            alert(err?.message || err)
        }
    }

    return <div className="min-h-screen h-full bg-user bg-opacity-60">
        <div className="flex w-full min-h-full my-2 items-center">
            <div className="w-1/2">
                <RegisterSvg className="h-full w-full" />
            </div>
            <div className="w-1/2 p-5 max-w-sm mx-auto border rounded-sm shadow bg-white relative">
                {isSubmitting && <div className="absolute inset-0 bg-black bg-opacity-20 flex-center"><LoadingIcon /></div>}
                <Link to="/" className="mb-5 inline-block text-gray-600 hover:text-black"><BsArrowLeft className="inline align-middle" /> Trang chủ</Link>
                <Logo className="mx-auto h-20" />
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <h1 className="text-center text-4xl text-gray-500 mb-8 font-medium">
                        Đăng ký tài khoản
                    </h1>
                    <hr className="mb-5 w-24 border-t-2 mx-auto border-gray-300" />
                    <div className="space-y-2">
                        <div className="flex space-x-2">
                            <div>
                                <Input {...register('firstName')} placeholder="Tên" />
                            </div>
                            <div>
                                <Input {...register('lastName')} placeholder="Họ" />
                            </div>
                        </div>
                        <div>
                            <Input {...register('userName')} placeholder="Tên đăng nhập" />
                        </div>
                        <div>
                            <Input {...register('email')} placeholder="Email" />
                        </div>
                        <div>
                            <Input {...register('password')} type="password" placeholder="Mật khẩu" />
                        </div>
                        <div>
                            <Input {...register('confirmPassword')} type="password" placeholder="Xác nhận mật khẩu" />
                        </div>
                        <div>
                            <Input {...register('phone')} placeholder="Số điện thoại" />
                        </div>
                        <div>
                            <Select onChange={e => setProvince(e.target.value)}>
                                <option selected={!province} disabled defaultValue="">Chọn tỉnh/thành phố</option>
                                {provinceData?.map(provinceEle => (
                                    <option
                                        value={provinceEle.idProvince}
                                        selected={province === provinceEle.idProvince}
                                        key={provinceEle.idProvince}
                                    >
                                        {provinceEle.provinceName}
                                    </option>
                                ))}
                            </Select>
                        </div>
                        <div>
                            <Select onChange={e => setDistrict(e.target.value)}>
                                <option selected={!district} disabled defaultValue="">Chọn quận/huyện</option>
                                {districtData?.filter(district => district.proid === province)?.map(districtEle => (
                                    <option
                                        value={districtEle.idDistrict}
                                        selected={district === districtEle.idDistrict}
                                        key={districtEle.idDistrict}
                                    >
                                        {districtEle.districtName}
                                    </option>
                                ))}
                            </Select>
                        </div>
                        <div>
                            <Select register={register('subDisid')}>
                                <option selected disabled defaultValue="">Chọn phường/xã</option>
                                {wardData?.filter(ward => ward.disid === district)?.map(wardEle => (
                                    <option
                                        value={wardEle.idSubDistrict}
                                        key={wardEle.idSubDistrict}
                                    >
                                        {wardEle.subDistrictName}
                                    </option>
                                ))}
                            </Select>
                        </div>
                        <div>
                            <Input {...register('address')} placeholder="Số nhà, địa chỉ" />
                        </div>
                        <button className="block w-full bg-blue-600 text-white py-2 
                    font-bold hover:bg-blue-700 transition-colors">
                            Đăng ký
                        </button>
                    </div>
                </form>
                <div className="mt-10 text-gray-700 text-center">
                    Đã có tài khoản? <Link to="/login" className="text-blue-600">Đăng nhập ngay!</Link>
                </div>
            </div>
        </div>
    </div>
}

export default RegisterPage