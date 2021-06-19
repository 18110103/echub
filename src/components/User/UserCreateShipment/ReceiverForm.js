import React, { useState } from "react"
import useProvince from "../../../hooks/query/useProvince"
import useDistrict from "../../../hooks/query/useDistrict"
import useWard from "../../../hooks/query/useWard"
import UserSectionContainer from "../common/UserSectionContainer"
import UserSectionHeading from "../common/UserSectionHeading"
import { Input, LabelInput } from "../common/Inputs"
import SearchSelect from "../../common/SearchSelect"
import { useFormContext, useFormState, useWatch } from 'react-hook-form'

const ReceiverForm = () => {
    const { errors } = useFormState()
    const { register, setValue, watch } = useFormContext()
    const province = watch('province')
    const district = watch('district')

    const setProvince = data => {
        setValue('province', data)
    }

    const setDistrict = data => {
        setValue('district', data)
    }

    const setWard = data => {
        setValue('ward', data)
    }

    const { data: provinceData } = useProvince()
    const { data: districtData } = useDistrict()
    const { data: wardData } = useWard()

    const filterDistrict = React.useMemo(() => {
        return districtData.filter(district => district.proid === province?.idProvince)
    }, [province, districtData])

    const filterWard = React.useMemo(() => {
        return wardData.filter(ward => ward.disid === district?.idDistrict)
    }, [district, wardData])

    return (
        <UserSectionContainer>
            <UserSectionHeading>NGƯỜI NHẬN</UserSectionHeading>
            <div>
                <div className="mb-2 flex">
                    {/* <div className="w-1/2 mr-4">
                        <LabelInput
                            register={register('name')}
                            name="name"
                            label="Họ tên"
                            placeholder="Nhập họ tên"
                            error={errors?.name?.message}
                        />
                    </div> */}
                    <div className="w-full">
                        <LabelInput
                            register={register('phone')}
                            name="phone"
                            label="Số điện thoại"
                            placeholder="Nhập số điện thoại"
                            error={errors?.phone?.message}
                        />
                    </div>
                </div>
                <div className="mb-2">
                    <div className="mb-2">
                        <label className="text-sm font-medium text-gray-600">Địa chỉ</label>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/3 mr-2">
                            <SearchSelect
                                placeholder="Tỉnh/Thành phố"
                                data={provinceData}
                                getOptionLabel={option => option.provinceName}
                                setData={(v) => {
                                    setDistrict(null)
                                    setWard(null)
                                    setProvince(v)
                                }}
                                error={errors?.province?.message}
                            />
                        </div>
                        <div className="w-1/3 mr-2">
                            <SearchSelect
                                disable={!province}
                                placeholder="Huyện/Quận"
                                data={filterDistrict}
                                getOptionLabel={option => option.districtName}
                                setData={(v) => {
                                    setWard(null)
                                    setDistrict(v)
                                }}
                                error={errors?.district?.message}
                            />
                        </div>
                        <div className="w-1/3">
                            <SearchSelect
                                disable={!district}
                                placeholder="Xã/Phường"
                                data={filterWard}
                                getOptionLabel={option => option.subDistrictName}
                                setData={setWard}
                                error={errors?.ward?.message}
                            />
                        </div>
                    </div>
                    <div>
                        <Input
                            register={register("street")}
                            placeholder="Nhập số nhà, tên đường"
                            isError={errors?.street}
                        />
                        {errors?.street &&
                            <div className="text-xs font-medium text-red-500 ml-1 -mb-3">{errors.street.message}</div>
                        }
                    </div>
                </div>
            </div>
        </UserSectionContainer>
    )
}

export default React.memo(ReceiverForm)