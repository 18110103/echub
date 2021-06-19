import useDistrict from "../hooks/query/useDistrict"
import useProvince from "../hooks/query/useProvince"
import useWard from "../hooks/query/useWard"

export default function useAddressFromWardID(wardId) {
    const { data: wards } = useWard()
    const { data: districts } = useDistrict()
    const { data: provinces } = useProvince()

    const ward = wards.find(o => o.idSubDistrict === wardId)
    const district = districts.find(o => o.idDistrict === ward.disid)
    const province = provinces.find(o => o.idProvince === district.proid)
    return `${province.provinceName}, ${district.districtName}, ${ward.subDistrictName}`

}