import { Lato_400Regular, Lato_700Bold, Lato_900Black, useFonts } from "@expo-google-fonts/lato";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card } from "@rneui/themed";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./styles";

export function Profile() {
    // const {isFetching, data: systems, error} = useFetch<ISystemResponse>('/projects', {}, true)
    const [name, setName] = useState<string | null>('')
    const [phone, setPhone] = useState<string | null>('')
    const [email, setEmail] = useState<string | null>('')
    const [address, setAddress] = useState<string | null>('')
    const [isLoadingStorage, setIsLoadingStorage] = useState(true)
    useEffect(() => {
        async function getStorageItems() {
            setName(await AsyncStorage.getItem('@userName'))
            setPhone(await AsyncStorage.getItem('@userPhone'))
            setEmail(await AsyncStorage.getItem('@userEmail'))
            setAddress(await AsyncStorage.getItem('@userAddress'))
            setIsLoadingStorage(false)
        }
        getStorageItems()
    }, [])
    let [fontsLoaded] = useFonts({
        Lato_400Regular,
        Lato_700Bold,
        Lato_900Black
    })
    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={'large'} color='white' />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {
                isLoadingStorage
                ?
                    <View style={styles.container}>
                        <ActivityIndicator size={'large'} color='white' />
                    </View>
                :
                <View style={{flex: 1, width: '100%'}}>
                    <Card containerStyle={{borderRadius: 20, marginBottom: 50}}>
                        <View>
                            <Text style={styles.label}>Nome Completo: </Text>
                        </View>
                        <View>
                            <Text style={styles.value}>{name}</Text>
                        </View>
                        <View>
                            <Text style={styles.label}>Telefone: </Text>
                        </View>
                        <View>
                            <Text style={styles.value}>{phone}</Text>
                        </View>
                        <View>
                            <Text style={styles.label}>Email: </Text>
                        </View>
                        <View>
                            <Text style={styles.value}>{email}</Text>
                        </View>
                        <View>
                            <Text style={styles.label}>Endereço: </Text>
                        </View>
                        <View>
                            <Text style={styles.value}>{address}</Text>
                        </View>
                    </Card>
                </View>
            }
        </View>
    )
}