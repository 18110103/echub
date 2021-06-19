import usePartner from "../../../hooks/query/usePartner"
import getBrandImage from "../../../utils/getBrandImage"
import NotificationButton from "./NotificationButton"

const PartnerHeader = () => {
    const { data: partnerData, setCurrentCompany } = usePartner()

    return <div className="h-14 flex items-center justify-end text-white border-b
    flex-shrink-0 z-10 sticky bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 top-0">
        <div className="flex items-center">
            <div className="text-sm space-x-4 mr-2">
                <button onClick={() => setCurrentCompany('grab')}>Grab</button>
                <button onClick={() => setCurrentCompany('ghn')}>GHN</button>
                <button onClick={() => setCurrentCompany('ghtk')}>GHTK</button>
            </div>
            <NotificationButton />
            <button className="mr-3 flex items-center">
                <div className="h-10 w-10 overflow-hidden rounded-lg mr-3 bg-white">
                    {getBrandImage(partnerData.companyName, 'w-full h-full object-contain', {})}
                </div>
                <span className="text-sm font-semibold mr-1">
                    {partnerData.companyName}
                </span>
            </button>
        </div>
    </div>
}

export default PartnerHeader