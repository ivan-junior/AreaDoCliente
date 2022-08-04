import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"
axios.defaults.baseURL = 'https://api.bluesol.com.br/user'
axios.defaults.headers.common['Origin'] = 'https://bluesol.com.br'

export default async function getSystem() {
    let _token = await AsyncStorage.getItem('TOKEN')
    try {
        const response = await axios({
            url: '/projects',
            headers: {
                authorization: `Bearer ${_token}`
            }
        })
        return Promise.resolve(response.data)
    } catch (error) {
        console.log(error)
        return Promise.reject(error)
    }
}