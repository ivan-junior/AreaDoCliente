import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { Alert } from "react-native"
import { userCredentials } from "../interfaces/Authenticate"
import { IForgotPassword } from "../interfaces/IForgotPassword"
import { IOpenCase } from "../interfaces/IOpenCase"
axios.defaults.baseURL = 'https://api.bluesol.com.br/user'
axios.defaults.headers.common['Origin'] = 'https://bluesol.com.br'
axios.defaults.headers.common['onmobile'] = 'onmobile'

export async function authenticate(params: userCredentials): Promise<IResponseLogin> {
    try {
        const response = await axios.post(`/authenticate`, params)
        return response.data
    } catch (error: any) {
        console.log(error)
        return error
    }
}

export async function getUserProjects() {
    try {
        const token = await AsyncStorage.getItem('TOKEN')
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const response = await axios.get(`projects`, {headers})
        if (response.status != 200) {
            throw new Error('Não foi possível buscar o projeto, tente novamente mais tarde')
        }
        return response.data
    } catch (error: any) {
        Alert.alert('Erro', error.message)
    }
}

export async function getProjectStatus() {
    try {
        const token = await AsyncStorage.getItem('TOKEN')
        const projectNumber = await AsyncStorage.getItem('@userProjectNumber')
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const response = await axios.get(`/projects-status?projectNumber=${projectNumber}`, {headers})
        if (response.status != 200) {
            throw new Error('Não foi possível buscar o projeto, tente novamente mais tarde')
        }
        return response.data
    } catch(error: any) {
        Alert.alert('Erro', error.message)
    }
}

export async function openCase(params: IOpenCase) {
    try {
        const token = await AsyncStorage.getItem('TOKEN')
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const response = await axios.post('/help', params, {headers})
        if (response.status != 200) {
            throw new Error('Não foi possível abrir o chamado, tente novamente mais tarde')
        }
        return true
    } catch (error: any) {
        Alert.alert(error.message)
    }
}

export async function forgotPassword(params: IForgotPassword) {
    try {
        const token = await AsyncStorage.getItem('TOKEN')
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const response = await axios.post('/forgot_password', params, {headers})
        if (response.status != 200) {
            throw new Error('Não foi possível abrir o chamado, tente novamente mais tarde')
        }
        return true
    } catch (error: any) {
        Alert.alert(error.message)
    }
}