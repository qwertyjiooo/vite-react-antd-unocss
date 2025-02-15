import axios from 'axios'
import router from '@/router'
import { util } from '@/utils'

const baseURL = import.meta.env.VITE_APP_API_URL
const serve = axios.create({
    baseURL: baseURL,
    timeout: 5000
})

const { getToken } = util
serve.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) config.headers['Authorization'] = token;
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

serve.interceptors.response.use(
    response => {
        if (response.status !== 200) return Promise.reject(data);
        const { data } = response
        switch (data.code) {
            case 0:
                return data;
            case 4001:
                router.push('/login');
                break;
            default:
                return Promise.reject(data)
        }
    },
    error => {
        return Promise.reject(error)
    }
)
export const post = async (url, data = {}, headers = {}) => {
    try {
        const res = await serve.post(url, data, headers)
        return res
    } catch (error) {
        return Promise.reject(error)
    }
}

export const get = async (url, params = {}, headers = {}) => {
    try {
        const res = await serve.get(url, { params, headers })
        return res
    } catch (error) {
        return Promise.reject(error)
    }
}

