import axios from "axios"
import { userCredentials } from "../interfaces/Authenticate"
axios.defaults.baseURL = 'https://api.bluesol.com.br/user'
axios.defaults.headers.common['Origin'] = 'https://bluesol.com.br'
axios.defaults.headers.common['onmobile'] = 'onmobile'

export async function authenticate(params: userCredentials) {
    try {
        const response = await axios.post(`/authenticate`, params)
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}