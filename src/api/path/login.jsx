import { post } from '../serve'

const login = data => post('account/login/', data)

export const loginApi = {
    login
}