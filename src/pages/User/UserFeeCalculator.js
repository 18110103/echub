import axios from "axios"
import { useMemo, useState } from "react"
import Skeleton from "react-loading-skeleton"
import { searchFees } from "../../api/shippingFee"
import { LoadingIcon } from "../../components/common/Loading"
import SearchSelect from "../../components/common/SearchSelect"
import Button from "../../components/User/common/Button"
import { Label } from "../../components/User/common/Inputs"
import UserPageContainer from "../../components/User/common/UserPageContainer"
import useDistrict from "../../hooks/query/useDistrict"
import useProvince from "../../hooks/query/useProvince"
import useWard from "../../hooks/query/useWard"
import numberWithCommas from "../../util/numberWithCommas"
import getBrandImage from "../../utils/getBrandImage"
import tinhTuyen from "../../utils/tinhTuyen"

const UserFeeCalculatorPage = () => {
    const [fromProvince, setFromProvince] = useState(null)
    const [toProvince, setToProvince] = useState(null)
    const [fromDistrict, setFromDistrict] = useState(null)
    const [toDistrict, setToDistrict] = useState(null)
    const [fromWard, setFromWard] = useState(null)
    const [toWard, setToWard] = useState(null)
    const [weight, setWeight] = useState(0)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const { data: provinceData } = useProvince()
    const { data: districtData } = useDistrict()
    const { data: wardData } = useWard()

    const fromDistrictData = useMemo(() => districtData.filter(o => o.proid === fromProvince?.idProvince), [fromProvince, districtData])
    const toDistrictData = useMemo(() => districtData.filter(o => o.proid === toProvince?.idProvince), [toProvince, districtData])
    const fromWardData = useMemo(() => wardData.filter(o => o.disid === fromDistrict?.idDistrict), [fromDistrict, fromProvince, wardData])
    const toWardData = useMemo(() => wardData.filter(o => o.disid === toDistrict?.idDistrict), [toDistrict, toProvince, wardData])

    const calcPrice = (shipping) => {
        const increaseWeight = weight / 1000 - shipping.maxKg
        console.log(shipping.maxKg)
        const increasePrice = increaseWeight < 0 ? 0 : shipping.pricePerKg * increaseWeight

        return shipping.price + increasePrice
    }


    const handleSearch = async () => {
        setLoading(true)
        await new Promise(res => setTimeout(res, 500))
        const data = await searchFees(tinhTuyen(fromProvince, toProvince, toDistrict))
        setData(data.map(data => ({ ...data, truePrice: calcPrice(data) })))
        setLoading(false)
    }

    return <UserPageContainer>
        <h2 className="user_page_heading border-b mb-4">
            Công cụ tính phí
        </h2>
        <div className="shadow-md rounded-xl flex border-white border-8">
            <div className="w-2/5 flex-shrink-0 bg-white py-2 px-4 text-gray-600">
                <div>
                    <Label>Địa chỉ người gửi</Label>
                    <div className="py-2 space-y-3">
                        <SearchSelect
                            placeholder="Chọn Tỉnh/Thành phố"
                            data={provinceData}
                            getOptionLabel={label => label.provinceName}
                            setData={setFromProvince}
                        />
                        <SearchSelect
                            placeholder="Chọn Quận/Huyện"
                            placeholderChoosable
                            data={fromDistrictData}
                            getOptionLabel={label => label.districtName}
                            setData={setFromDistrict}
                        />
                        <SearchSelect
                            placeholder="Chọn Phường/Xã"
                            placeholderChoosable
                            data={fromWardData}
                            getOptionLabel={label => label.subDistrictName}
                            setData={setFromWard}
                        />
                    </div>
                </div>
                <div className="mb-2">
                    <Label>Địa chỉ người nhận</Label>
                    <div className="py-2 space-y-3">
                        <SearchSelect
                            placeholder="Chọn Tỉnh/Thành phố"
                            data={provinceData}
                            getOptionLabel={label => label.provinceName}
                            setData={setToProvince}
                        />
                        <SearchSelect
                            placeholder="Chọn Quận/Huyện"
                            data={toDistrictData}
                            getOptionLabel={label => label.districtName}
                            setData={setToDistrict}
                        />
                        <SearchSelect
                            placeholder="Chọn Phường/Xã"
                            placeholderChoosable
                            data={toWardData}
                            getOptionLabel={label => label.subDistrictName}
                            setData={setToWard}
                        />
                    </div>
                </div>
                <div className="mb-2">
                    <Label className="mb-2 block">Trọng lượng gói hàng</Label>
                    <div className="bg-user input rounded-xl flex justify-between items-center text-sm">
                        <input
                            onChange={e => setWeight(e.target.value)}
                            value={weight}
                            className="flex-1 p-2 mr-2 bg-transparent" />
                        <span className="mx-2 text-gray-500">gram</span>
                    </div>
                </div>
                <div className="text-center">
                    <Button
                        onClick={handleSearch}
                        disabled={!fromWard || !toWard || !fromDistrict || !toDistrict || !fromProvince || !toProvince}
                        className="mt-2 w-40">Tra cước</Button>
                </div>
            </div>
            <div className="w-3/5 flex-shrink-0 bg-transparent">
                {loading ?
                    <div className="h-full text-gray-500 text-sm flex items-center justify-center">
                        <LoadingIcon />
                    </div>
                    :
                    data ? (
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="font-medium text-sm">Hãng vận chuyển</th>
                                    <th className="font-medium text-sm">Tên gói cước</th>
                                    <th className="font-medium text-sm">Thời gian giao</th>
                                    <th className="font-medium text-sm">Phí vận chuyển</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(row => (
                                    <tr className="text-center text-sm font-semibold">
                                        <td><span className="flex items-center justify-center">
                                            {getBrandImage(row.idFee, "inline-block object-contain mr-2", { width: 50, height: 50 })}
                                            {row.idFee.split('_')[0]}
                                        </span></td>
                                        <td className="py-2">{row.nameFee}</td>
                                        <td>{row.tgGiao}</td>
                                        <td>{numberWithCommas(row.truePrice)}đ</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) :
                        <div className="h-full text-gray-500 text-sm flex items-center justify-center">
                            Bạn vui lòng nhập đầy đủ thông tin để tra cước vận chuyển
                        </div>
                }
            </div>
        </div>
    </UserPageContainer>
}

export default UserFeeCalculatorPage