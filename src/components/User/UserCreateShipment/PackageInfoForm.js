import React from "react"
import { useFieldArray, useFormContext } from "react-hook-form"
import { Label, LabelInput } from "../common/Inputs"
import UserSectionContainer from "../common/UserSectionContainer"
import UserSectionHeading from "../common/UserSectionHeading"
import { FaTrash } from 'react-icons/fa'


const PackageInfoForm = () => {
    const { register, formState: { errors } } = useFormContext()
    // const { fields, append, remove } = useFieldArray({
    //     name: "items"
    // })

    return (
        <UserSectionContainer>
            <UserSectionHeading>THÔNG TIN HÀNG GỬI</UserSectionHeading>
            <div>
                {/* <div className="flex justify-between mb-2">
                    <div className="font-semibold text-gray-700">Hàng  hóa - {fields.length} sản phẩm</div>
                    <button
                        onClick={append}
                        type="button" className="text-sm p-1 font-bold text-blue-500 hover:text-blue-700">+ Thêm sản phẩm</button>
                </div>
                {fields.map((field, index) => (
                    <div key={field.id} className="mb-2 flex relative">
                        <div className="flex-1 mr-4">
                            <LabelInput
                                register={register(`items.${index}.name`)}
                                error={errors.items && errors.items[index]?.name?.message}
                                name="packageName"
                                label={"Tên sản phẩm" + (fields.length > 1 ? ` ${index + 1}` : '')}
                                placeholder="Nhập tên sản phẩm"
                                step="1"
                            />
                        </div>
                        <div className="flex-1">
                            <LabelInput
                                register={register(`items.${index}.amount`)}
                                error={errors.items && errors.items[index]?.amount?.message}
                                name="amount"
                                label="&nbsp;"
                                placeholder="Nhập số lượng"
                                type="number"
                                step="1"
                            />
                        </div>
                        {fields.length > 1 && <div className="absolute right-0 text-gray-500">
                            <button onClick={() => remove(index)} type="button">
                                <FaTrash />
                            </button>
                        </div>}
                    </div>
                ))}
                <div className="font-semibold text-gray-700">Đơn hàng</div> */}
                <div className="mb-2 flex flex-col">
                    <div className="w-full mr-4 mb-2">
                        <LabelInput
                            register={register("weight")}
                            error={errors?.weight?.message}
                            name="weight"
                            label="Tổng khối lượng (gram)"
                            placeholder="Nhập khối lượng"
                            type="number"
                            step="1"
                        />
                    </div>
                    <div className="w-full mr-4">
                        <LabelInput
                            register={register("shippingTime")}
                            error={errors?.shippingTime?.message}
                            name="weight"
                            label="Ngày giao hàng"
                            type="date"
                        />
                    </div>
                    {/* <div className="w-1/2">
                        <LabelInput
                            register={register("price")}
                            error={errors?.price?.message}
                            name="price"
                            label="Tổng giá trị đơn hàng"
                            placeholder="Nhập giá trị đơn hàng"
                            type="number"
                            step="1000"
                        />
                    </div> */}
                </div>
            </div>
        </UserSectionContainer>
    )
}

export default React.memo(PackageInfoForm)