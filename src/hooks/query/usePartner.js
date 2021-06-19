import { createContext, useContext, useEffect, useState } from "react";
import { getShipcompany } from "../../api/shipCompany";

const partnerContext = createContext({
    isLoading: null,
    data: null,
    setCurrentCompany: () => { }
})

const useProvidePartner = () => {
    const [isLoading, setLoading] = useState(false)
    const [currentCompany, setCurrentCompany] = useState("grab")
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetch = async () => {
            setLoading(true)
            try {
                await new Promise(res => setTimeout(res, 500))
                const data = await getShipcompany(currentCompany)
                setData(data)
                setLoading(false)
            } catch (err) {
                alert(err.message)
            }
        }
        fetch()
    }, [currentCompany])

    return {
        isLoading,
        setCurrentCompany,
        data
    }
}

export function PartnerProvider({ children }) {
    const cart = useProvidePartner()
    return <partnerContext.Provider value={cart}>{children}</partnerContext.Provider>
}

export default function usePartner() { return useContext(partnerContext) }