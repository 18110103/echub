import React from "react"
import { Link } from "react-router-dom"
import UserSectionContainer from "../common/UserSectionContainer"
import UserSectionHeading from "../common/UserSectionHeading"
import { USER_ACCOUNT_SETTING_PATH } from '../../../constants/userPaths'
import useUser from "../../../hooks/query/useUser"
import getAddressFromWardID from "../../../utils/getAddressFromWardID"

const Sender = () => {
    const { data } = useUser()

    return (
        <UserSectionContainer className="text-sm">
            <UserSectionHeading>NGƯỜI GỬI</UserSectionHeading>
            <div className="mb-2 text-gray-700 font-bold">
                {data.firstName + ' ' + data.lastName} - {data.phone}
            </div>
            <div className="mb-2">
                {data.address}, {getAddressFromWardID(data.subDisid)}
            </div>
            <Link to={USER_ACCOUNT_SETTING_PATH} className="font-medium rounded-sm transition-colors
            text-blue-600 hover:text-blue-700">Cập nhật thông tin</Link>
        </UserSectionContainer>
    )
}

export default React.memo(Sender)