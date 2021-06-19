import axios from "axios"
import qs from 'query-string'

const getOrders = async () => {
    const res = await axios.get('http://localhost:57832/api/Bills')
    const data = res.data
    return data
}

const getOrder = async (id) => {
    const res = await axios.get("http://localhost:57832/api/Bills/" + id)
    const data = res.data
    return data
}

const createOrder = (data) => {
    const params = qs.stringify(data)
    return axios.post("http://localhost:57832/api/Bills", params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}


export { getOrders, getOrder, createOrder }