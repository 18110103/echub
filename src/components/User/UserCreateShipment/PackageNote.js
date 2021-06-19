import React from "react"
import { useFormContext } from "react-hook-form"
import { Label } from "../common/Inputs"
import UserSectionContainer from "../common/UserSectionContainer"
import UserSectionHeading from "../common/UserSectionHeading"

const PackageNote = () => {
    const { register } = useFormContext()

    return (
        <UserSectionContainer>
            <UserSectionHeading>Lưu ý - Ghi chú</UserSectionHeading>
            <div>
                <Label>Lưu ý giao hàng</Label>
                <div className="mt-2">
                    <select
                        {...register('noteRequired')}
                        className="focus:outline-none focus:shadow-md transition-shadow border rounded
                    bg-white w-full p-1 text-sm">
                        <option>Không cho xem hàng</option>
                        <option>Cho xem hàng không cho thử</option>
                        <option>Cho thử hàng</option>
                    </select>
                </div>
            </div>
            <div>
                <Label>Ghi chú</Label>
                <div className="mt-2">
                    <textarea
                        {...register('noteInfo')}
                        rows={6}
                        placeholder="Nhập ghi chú..."
                        className="focus:outline-none p-2 resize-none text-sm border rounded
                    w-full focus:shadow-md transition-shadow" />
                </div>
            </div>
        </UserSectionContainer>
    )
}

export default React.memo(PackageNote)