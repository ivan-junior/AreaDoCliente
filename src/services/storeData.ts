import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeData = async (keyName: string, value: string) => {
    try {
        await AsyncStorage.setItem(keyName, value)
    } catch (error) {
        console.log(error)
    }
}

export const getStorageData = async (keyName: string) => {
    try {
        const value = await AsyncStorage.getItem(keyName)
        console.log(value)
        return 
    } catch (error) {
        console.log(error)
        return error
    }
}