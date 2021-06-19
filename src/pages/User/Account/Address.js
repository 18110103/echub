import { useEffect, useState } from "react"
import { UnmountClosed } from "react-collapse"
import { useForm } from "react-hook-form"
import { BsPlus } from 'react-icons/bs'
import { putUser } from "../../../api/account"
import { LoadingIcon } from "../../../components/common/Loading"
import Button from "../../../components/User/common/Button"
import { Label, Input } from "../../../components/User/common/Inputs"
import UserAccountSettingHeader from "../../../components/User/UserAccountSetting/UserAccountSettingHeader"
import useDistrict from "../../../hooks/query/useDistrict"
import useProvince from "../../../hooks/query/useProvince"
import useUser from "../../../hooks/query/useUser"
import useWard from "../../../hooks/query/useWard"

const Address = () => {
    // const [create, setCreate] = useState(false)
    const { data: userData, refetch } = useUser()
    const { register, handleSubmit, formState: { isSubmitting } } = useForm({
        defaultValues: {
            address: userData.address,
            subDisId: userData.subDisId
        }
    })

    const { data: provinceData } = useProvince()
    const { data: districtData } = useDistrict()
    const { data: wardData } = useWard()

    const [province, setProvince] = useState(null)
    const [district, setDistrict] = useState(null)

    useEffect(() => {
        const district = districtData.find(o => o.disid === userData.subDisId)
        setDistrict(district.idDistrict)
        setProvince(district.proid)
    }, [userData, districtData])

    const onSubmit = async (data) => {
        try {
            console.log(data)
            await putUser(userData.idUser, data)
            await refetch()
            alert("Cập nhật thành công")
        } catch (err) {
            alert(err?.message || err)
        }
    }

    return <div className="relative">
        <UserAccountSettingHeader>
            Địa chỉ
        </UserAccountSettingHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="pt-4 relative">
            <div className="max-w-md">
                {/* <div className="flex mb-4 items-center">
                    <Label className="w-32">
                        Họ tên:
                    </Label>
                    <input defaultValue="Võ Phú Đức"
                        className="input py-1 px-2 flex-auto shadow-sm rounded" />
                </div>
                <div className="flex mb-4 items-center">
                    <Label className="w-32">
                        Số điện thoại:
                    </Label>
                    <input defaultValue="0922014203"
                        className="input py-1 px-2 flex-auto shadow-sm rounded" />
                </div> */}
                <div className="flex mb-4 items-center">
                    <Label className="w-32">
                        Tỉnh/Thành phố:
                    </Label>
                    <select onChange={e => setProvince(e.target.value)} className="input py-1 px-2 flex-auto shadow-sm rounded">
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
                    </select>
                </div>
                <div className="flex mb-4 items-center">
                    <Label className="w-32">
                        Quận huyện:
                    </Label>
                    <select onChange={e => setDistrict(e.target.value)} className="input py-1 px-2 flex-auto shadow-sm rounded">
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
                    </select>
                </div>
                <div className="flex mb-4 items-center">
                    <Label className="w-32">
                        Phường xã:
                    </Label>
                    <select {...register('subDisId')} className="input py-1 px-2 flex-auto shadow-sm rounded">
                        <option disabled defaultValue="">Chọn phường/xã</option>
                        {wardData?.filter(ward => ward.disid === district)?.map(wardEle => (
                            <option
                                // selected={wardEle.idSubDistrict === userData.subDisId}
                                value={wardEle.idSubDistrict}
                                key={wardEle.idSubDistrict}
                            >
                                {wardEle.subDistrictName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex mb-4 items-center">
                    <Label className="w-32">
                        Địa chỉ:
                    </Label>
                    <input {...register('address')}
                        className="input py-1 px-2 flex-auto shadow-sm rounded" />
                    {/* <textarea rows={3} className="input py-1 px-2 flex-auto shadow-sm rounded resize-none" /> */}
                </div>
                <div className="text-right">
                    <Button type="submit" loading={isSubmitting} className="w-24">Lưu</Button>
                </div>
            </div>
        </form>

        {/* <div className="text-sm round">
            <button onClick={() => setCreate(!create)}
                className="p-2 w-full bg-user font-medium text-blue-500 mb-4">
                <BsPlus className="inline-block text-gray-700 mr-1" size={22} /> <span className="align-middle">Thêm địa chỉ mới</span>
            </button>
            <UnmountClosed isOpened={create}>
                <div className="bg-user p-4">
                    <div className="max-w-md">
                        <div className="flex mb-4 items-center">
                            <Label className="w-32">
                                Họ tên:
                            </Label>
                            <input defaultValue="Võ Phú Đức"
                                className="input py-1 px-2 flex-auto shadow-sm rounded" />
                        </div>
                        <div className="flex mb-4 items-center">
                            <Label className="w-32">
                                Số điện thoại:
                            </Label>
                            <input defaultValue="0922014203"
                                className="input py-1 px-2 flex-auto shadow-sm rounded" />
                        </div>
                        <div className="flex mb-4 items-center">
                            <Label className="w-32">
                                Tỉnh/Thành phố:
                            </Label>
                            <select className="input py-1 px-2 flex-auto shadow-sm rounded">
                                <option>
                                    Chọn Tỉnh/Thành phố
                                </option>
                                <option>
                                    Hồ Chí Minh
                                </option>
                            </select>
                        </div>
                        <div className="flex mb-4 items-center">
                            <Label className="w-32">
                                Quận huyện:
                            </Label>
                            <select className="input py-1 px-2 flex-auto shadow-sm rounded">
                                <option>
                                    Chọn Quận huyện
                                </option>
                                <option>
                                    Hồ Chí Minh
                                </option>
                            </select>
                        </div>
                        <div className="flex mb-4 items-center">
                            <Label className="w-32">
                                Phường xã:
                            </Label>
                            <select className="input py-1 px-2 flex-auto shadow-sm rounded">
                                <option>
                                    Chọn Phường xã
                                </option>
                                <option>
                                    Hồ Chí Minh
                                </option>
                            </select>
                        </div>
                        <div className="flex mb-4 items-center">
                            <Label className="w-32">
                                Địa chỉ:
                            </Label>
                            <textarea rows={3} className="input py-1 px-2 flex-auto shadow-sm rounded resize-none" />
                        </div>
                        <div className="text-right">
                            <button onClick={() => setCreate(false)} className="mr-4 font-medium">Đóng</button>
                            <Button>Hoàn thành</Button>
                        </div>
                    </div>
                </div>
            </UnmountClosed>
        </div>
        <div className="mt-2">
            <div className="text-sm roun text-gray-700 flex items-center">
                <span>Danh sách địa chỉ</span><div className="ml-2 h-px bg-gray-200 flex-auto shadow-sm roun"></div>
            </div>
            <div className="bg-user p-3 my-3 text-sm rounded">
                <div className="mb-2 text-gray-800 font-semibold">
                    Võ Phú Đức
                    <span className="inline-block text-green-500 font-normal text-xs ml-3 py-1 px-2 border border-green-500 rounded">Địa chỉ mặc định</span>
                </div>
                <div style={{ fontSize: 13 }}>
                    <span className="text-gray-600 font-medium">Điện thoại: </span>0923910213.
                </div>
                <div style={{ fontSize: 13 }}>
                    <span className="text-gray-600 font-medium">Địa chỉ: </span>720A Điện Biên Phủ, P22, Q. Bình Thạnh, Thành Phố Hồ Chí Minh.
                </div>
            </div>
            <div className="bg-user p-3 my-3 text-sm rounded">
                <div className="mb-2 text-gray-800 font-semibold">
                    Võ Phú Đức
                </div>
                <div style={{ fontSize: 13 }}>
                    <span className="text-gray-600 font-medium">Điện thoại: </span>0923910213.
                </div>
                <div style={{ fontSize: 13 }}>
                    <span className="text-gray-600 font-medium">Địa chỉ: </span>720A Điện Biên Phủ, P22, Q. Bình Thạnh, Thành Phố Hồ Chí Minh.
                </div>
            </div>

        </div> */}
    </div>
}

export default Address