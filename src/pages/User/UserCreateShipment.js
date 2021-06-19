import { FormProvider, useForm } from "react-hook-form"
import Loading from "../../components/common/Loading"
import Button from "../../components/User/common/Button"
import UserPageContainer from "../../components/User/common/UserPageContainer"
import PackageInfoForm from "../../components/User/UserCreateShipment/PackageInfoForm"
import PackageNote from "../../components/User/UserCreateShipment/PackageNote"
import ReceiverForm from "../../components/User/UserCreateShipment/ReceiverForm"
import Sender from "../../components/User/UserCreateShipment/Sender"
import Shipment from "../../components/User/UserCreateShipment/Shipment"
import useProvince from "../../hooks/query/useProvince"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useEffect, useState } from "react"
import { Label } from "../../components/User/common/Inputs"
import classNames from "classnames"
import CustomizedDialog from "../../components/common/CustomizedDialog"
import ConfirmModal from "../../components/User/UserCreateShipment/ConfirmModal"
import { Link } from "react-router-dom"
import { BsCheckCircle } from 'react-icons/bs'
import { createOrder } from "../../api/orders"
import createGuid from '../../utils/createGuid'
import getAddressFromWardID from '../../utils/getAddressFromWardID'
import useUser from "../../hooks/query/useUser"
import moment from "moment"
import { USER_ORDER_MANAGER_PATH } from "../../constants/userPaths"
import { searchFees } from '../../api/shippingFee'
import numberWithCommas from "../../util/numberWithCommas"
import tinhTuyen from "../../utils/tinhTuyen"
import useWard from "../../hooks/query/useWard"
import useDistrict from "../../hooks/query/useDistrict"

const schema = yup.object().shape({
    // name: yup.string().required('Vui lòng nhập họ tên'),
    phone: yup.string().required('Vui lòng nhập số điện thoại').matches(/^[0-9]+$/, 'Vui lòng nhập đúng số điện thoại').min(10, 'Vui lòng nhập đúng số điện thoại').max(10, 'Vui lòng nhập đúng số điện thoại'),
    street: yup.string().required('Vui lòng nhập thông tin địa chỉ'),
    province: yup.object().nullable().required('Vui lòng chọn'),
    district: yup.object().nullable().required('Vui lòng chọn'),
    ward: yup.object().nullable().required('Vui lòng chọn'),
    // items: yup.array().of(
    //     yup.object().shape({
    //         name: yup.string().required('Tên sản phẩm không thể trống'),
    //         amount: yup.number().typeError('Vui lòng nhập số lượng').required('Vui lòng nhập số lượng').min(1, 'Số đơn phải lớn hơn 0')
    //     })
    // ),
    // whoPayFee: yup.string().required("Vui lòng chọn bên trả phí"),
    shippingTime: yup.date('Vui lòng chọn ngày giao hàng').required('Vui lòng chọn ngày giao hàng').typeError('Vui lòng chọn ngày giao hàng'),
    weight: yup.number().typeError('Khối lượng bắt buộc').required('Khối lượng bắt buộc').min(1, 'Khối lượng phải lớn hơn 0')
})

const UserCreateShipmentPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [modalType, setModalType] = useState("SUCCESS")
    const { data: userData } = useUser()
    const [shippingList, setShippingList] = useState(null)
    const [shippingListLoading, setShippingListLoading] = useState(false)
    const [fee, setFee] = useState(0)
    const { data: wards } = useWard()
    const { data: districts } = useDistrict()
    const { data: provinces } = useProvince()

    const fromWards = wards.find(o => o.idSubDistrict === userData.subDisid)
    const fromDistrict = districts.find(o => o.idDistrict === fromWards.disid)
    const fromProvince = provinces.find(o => o.idProvince === fromDistrict.proid)

    const userAdd = userData.address + ", " + getAddressFromWardID(userData.subDisid)

    const methods = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            weight: 500,
        }
    });

    const province = methods.watch('province')
    const district = methods.watch('district')
    const ward = methods.watch('ward')
    const weight = methods.watch('weight')

    const calcPrice = (shipping) => {
        const increaseWeight = weight / 1000 - shipping.maxKg
        console.log(shipping.maxKg)
        const increasePrice = increaseWeight < 0 ? 0 : shipping.pricePerKg * increaseWeight

        return shipping.price + increasePrice
    }

    const onSubmit = async (data) => {
        console.log(data)
        try {
            await createOrder({
                idBill: createGuid(),
                sendAdd: userAdd,
                sendPhone: userData.phone,
                receiveAdd: [data.street, data.ward.subDistrictName, data.district.districtName, data.province.provinceName].join(', '),
                receivePhone: data.phone,
                shippingFee: data.shipping.truePrice,
                weight: data.weight,
                shippingTime: moment(data.shippingTime.getTime()).format('DD-MM-YYYY'),
                shippingDone: false,
                userid: userData.idUser,
                compid: data.shipping.compid
            })
            setIsOpen(true)
        } catch (err) {
            alert(err.message)
            console.log(err)
        }
    }

    useEffect(() => {
        if (!province || !district || !ward) {
            setShippingList(null)
            methods.setValue('shipping', null)
        }
        else {
            const fetch = async () => {
                console.log(tinhTuyen(fromProvince, province, district))
                setShippingListLoading(true)
                setFee(0)
                await new Promise(res => setTimeout(res, 500))
                const data = await searchFees(tinhTuyen(fromProvince, province, district))
                setShippingList(data.map(obj => ({ ...obj, truePrice: calcPrice(obj) })))
                setShippingListLoading(false)
            }
            fetch()
        }
    }, [province, district, ward, weight])

    return (
        <UserPageContainer>
            <h1 className="user_page_heading mb-4 border-b pb-2">
                Tạo đơn hàng
            </h1>
            <FormProvider {...methods}>
                <form id="create_shipment_form" onSubmit={methods.handleSubmit(onSubmit)} className="flex">
                    <div className='w-2/3 mr-4'>
                        <div className="mb-4">
                            <Sender />
                        </div>
                        <div className="mb-4">
                            <ReceiverForm />
                        </div>
                        <div className="mb-4">
                            <Shipment setFee={setFee} loading={shippingListLoading} shippingList={shippingList} />
                        </div>
                    </div>
                    <div className="w-1/3 ml-4">
                        <div className="sticky top-16">
                            <div className="mb-4">
                                <PackageInfoForm />
                            </div>
                            {/* <div className="mb-4">
                                    <PackageNote />
                                </div>
                                <Label className="font-semibold">Tùy chọn thanh toán</Label>
                                <div className="mt-2">
                                    <select
                                        {...methods.register('whoPayFee')}
                                        className={classNames("focus:outline-none shadow-md transition-shadow " +
                                            "border rounded bg-white w-full py-2 px-1 text-sm", {
                                            "border-red-500 text-red-500": methods.formState.errors.whoPayFee
                                        })}>
                                        <option value="" disabled>Vui lòng chọn bên trả phí</option>
                                        <option>Bên gửi trả phí</option>
                                        <option>Bên nhận trả phí</option>
                                    </select>
                                </div>
                                {methods.formState.errors.whoPayFee && <div className="text-xs text-red-500 ml-1">{methods.formState.errors.whoPayFee?.message}</div>} */}
                            <div className="text-right text-blue-900">
                                <div className="mt-2 font-semibold text-sm">Tổng phí</div>
                                <div className="text-2xl font-bold">{numberWithCommas(fee)} vnđ</div>
                            </div>
                            <Button loading={methods.formState.isSubmitting} className="mt-4" type="submit" fullWidth rounded>
                                Tạo đơn hàng
                            </Button>
                        </div>
                    </div>
                </form>
            </FormProvider>
            <CustomizedDialog className="rounded-lg" isOpen={isOpen} onClose={() => { }}>
                {/* {modalType === 'CONFIRM' && <ConfirmModal
                    data={methods.getValues()}
                    modalClose={() => setIsOpen(false)}
                    isSubmitting={isSubmitting}
                    setIsSubmitting={setIsSubmitting}
                    setModalType={setModalType}
                />
                } */}
                {modalType === 'SUCCESS' && (
                    <div className="text-center max-w-sm bg-white inline-block w-full z-30 p-6 text-gray-600">
                        <div className="text-2xl font-semibold mb-4">Thành công!</div>
                        <div className='font-medium mb-4'>Đơn hàng của bạn đã được tạo.</div>
                        <div>
                            <BsCheckCircle className="inline-block my-8 text-green-500" size={60} />
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    setIsOpen(false)
                                    window.location.reload()
                                    setModalType('CONFIRMED')
                                    methods.reset({
                                        items: [{ name: '', amount: 1 }],
                                        weight: 500,
                                        price: 0
                                    })
                                }}
                                className="py-2 bg-green-400 text-white font-semibold w-40">
                                Đóng
                            </button>
                        </div>
                    </div>
                )}
            </CustomizedDialog>
        </UserPageContainer>
    )
}

export default UserCreateShipmentPage