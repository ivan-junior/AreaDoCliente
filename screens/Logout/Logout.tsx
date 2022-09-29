import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "@rneui/themed";
import React, { useState } from "react";
import { View } from "react-native";
import { RootStackParamList } from "../../types";
import { styles } from "./styles";

type LogoutScreenProps = NativeStackScreenProps<RootStackParamList, 'Logout'>

export const LogoutScreen: React.FC<LogoutScreenProps> = (props) => {
    const [token, setToken] = useState(true)
    const [isLoading, setLoading] = useState(true)
    const logout = () => {
        AsyncStorage.removeItem('TOKEN').then(() => {
            props.navigation.navigate('Login')
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <View style={styles.container}>
            <Button
                title="SAIR"
                loading={false}
                loadingProps={{ color: '#054E7D' }}
                
                buttonStyle={styles.button}
                titleStyle={styles.titleButton}
                containerStyle={styles.containerButton}
                onPress={() => logout()}
            />
        </View>
    )
}