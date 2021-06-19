import axios from "axios"

const getProvince = async () => {
    const res = await axios.get('http://localhost:57832/api/Provinces')
    const data = res.data
    return data
}

const getDistrict = async () => {
    const res = await axios.get('http://localhost:57832/api/Districts', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    })
    const data = res.data
    return data
}

const getWard = async () => {
    const res = await axios.get('http://localhost:57832/api/SubDistricts', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    })
    const data = res.data
    return data

}

export {
    getProvince,
    getDistrict,
    getWard
}