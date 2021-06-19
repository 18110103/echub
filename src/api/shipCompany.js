import axios from "axios"
import qs from 'query-string'

const getShipcompany = async (compId) => {
    const res = await axios.get('http://localhost:57832/api/ShipCompanies/' + compId)
    const data = res.data
    return data
}
const createShipcompany = (data) => {
    const params = qs.stringify(data)
    return axios.post('http://localhost:57832/api/ShipCompanies', params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export { 
	getShipcompany, 
	createShipcompany 
}