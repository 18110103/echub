import axios from "axios"
import qs from 'query-string'

const registerUser = (data) => {
    const params = qs.stringify(data)
    return axios.post('http://localhost:57832/api/Users', params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

const getUser = (uid) => {
    return axios.get(`http://localhost:57832/api/Users/${uid}`).then(res => res.data)
}

const putUser = (uid, data) => {
    const params = qs.stringify(data)
    return axios.put('http://localhost:57832/api/Users/' + uid, params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export { registerUser, getUser, putUser }