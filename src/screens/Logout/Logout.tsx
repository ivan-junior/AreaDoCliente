import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Card, Icon } from "@rneui/themed";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../../types";
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
            <Card containerStyle={{width: '95%', padding: 15, borderRadius: 20}}>
                <TouchableOpacity style={styles.systemRow}
                    onPress={() => {
                        Alert.alert(
                            'Sobre o app',
                            `Versão: 1.0.0`
                        )
                    }}
                >
                    <Text style={styles.systemLabel}>Sobre o app</Text>
                    <Icon
                        name='chevron-right'
                        size={20}
                        type='font-awesome-5'
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.systemRow} onPress={() => logout()}>
                    <Text style={styles.systemLabel}>Sair </Text>
                    <Icon
                        name='chevron-right'
                        size={20}
                        type='font-awesome-5'
                    />
                </TouchableOpacity>
            </Card>
        </View>
    )
}