import axios from 'axios'

export const path = import.meta.env.REACT_APP_RootPath

const AxiosInstance = axios.create({
    baseURL: path,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})



export default AxiosInstance