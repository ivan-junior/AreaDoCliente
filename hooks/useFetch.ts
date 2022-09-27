import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
    baseURL: 'https://api.bluesol.com.br/user',
    headers: {
        origin: 'https://bluesol.com.br',
        onmobile: 'onmobile'
    }
})

export function useFetch<T = unknown>(endpoint: string, options?: AxiosRequestConfig, needToken: boolean = true) {
    const [data, setData] = useState<T | null>(null)
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState<Error | null>(null)
    const [token, setToken] = useState<string | null>('')
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await AsyncStorage.getItem('TOKEN')
                api.interceptors.request.use((req) => {
                    if (needToken) {
                        if (req.headers) {
                            req.headers.Authorization = `Bearer ${token}`
                        }
                    }
                    return req
                })
                const { data: response } = await api(endpoint, options)
                setData(response)
            } catch (error: any) {
                setError(error)
            } finally {
                setIsFetching(false)
            }
        }
        fetchData()
    }, [])

    return { isFetching, data, error }
}