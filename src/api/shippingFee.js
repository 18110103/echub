import axios from "axios"
import qs from 'query-string'
import { getTuyenById } from "../utils/tuyenUtils"

const createShippingFee = (data) => {
    const params = qs.stringify(data)
    return axios.post('http://localhost:57832/api/ShippingFees', params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

const searchFees = async (idfee) => {
    const res = await axios.get('http://localhost:57832/api/ShippingFees/searchfee?idfee=' + idfee)
    console.log(res)
    const data = res.data.map(data => {
        return { ...data, tuyen: getTuyenById(data.idFee.split('_')[1]) }
    })
    return data
}

export { createShippingFee, searchFees }