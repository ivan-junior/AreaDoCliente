import {
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
    useFonts
} from '@expo-google-fonts/lato';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Dialog, Icon, Input, Text } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../../types';
import { authenticate, forgotPassword } from '../../services/bsApi';
import { storeData } from '../../services/storeData';
import { styles } from './styles';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>

//Avoiding the "Can't perform a React state update on an unmounted component"
//For more information about this, please visit https://github.com/facebook/react/pull/22114#issuecomment-900721521
//Huge thanks to callmeberzerker
const KNOWN_VIOLATIONS = [
    `Warning: Can't perform a React state update on an unmounted`
]
const configureConsoleError = (silenceKnownErrors = true): void => {
    if (silenceKnownErrors) {
        const oldError = console.error
        console.error = (...args) => {
            const firstArg = args[0]
            if (typeof firstArg === 'string' && KNOWN_VIOLATIONS.some((v) => firstArg.includes(v))) {
                return
            }
            oldError(...args)
        }
    }
}
configureConsoleError()

export const Login: React.FC<LoginScreenProps> = ({navigation}) => {
    const [isLoading, setLoading] = useState(true)
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [showPassword, setShowPassword] = useState(true)
    const [isLoadingBtn, setLoadingBtn] = useState(false)
    const [isDialogVisible, setIsDialogVisible] = useState(false)
    const [isLoadingDialogBtn, setIsLoadingDialogBtn] = useState(false)
    const [emailDialogInput, setEmailDialogInput] = useState('')
    let [fontsLoaded] = useFonts({
        Lato_400Regular,
        Lato_700Bold,
        Lato_900Black
    })
    const entrar = async () => {
        setLoadingBtn(true)
        const login = await authenticate({email,password})
        if (login.token != null && login.token != undefined) {
            await storeData('TOKEN', login.token)
            await storeData('@userName', login.user.name)
            await storeData('@userPhone', login.user.phone)
            await storeData('@userEmail', login.user.email)
            await storeData('@userAddress', login.user.address)
            await storeData('@userProjectNumber', login.user.projectNumber[0].toString())
            // await storeData('@userProfile', login.user.profile)
            setLoadingBtn(false)
            navigation.navigate('Home')
        } else {
            Alert.alert('Não foi possível autenticar')
            setLoadingBtn(false)
        }
    }
    const sendEmailForgotPassword = async () => {
        setIsLoadingDialogBtn(true)
        await forgotPassword({email: emailDialogInput, siteUrl: 'https://bluesol.com.br'})
        setIsLoadingDialogBtn(false)
        setIsDialogVisible(!isDialogVisible)
        Alert.alert('EMAIL ENVIADO!', 'As instruções de redefinição de senha foram enviadas no email informado.\n\nCertifique-se de olhar na lixeira ou no spam')
    }
    useEffect(() => {
        async function getToken() {
            try {
                let token = await AsyncStorage.getItem('TOKEN')
                if (token != null && token != undefined) {
                    navigation.reset({
                        index: 0,
                        routes:[{name: 'Home'}]
                    })
                }
            } catch(e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }
        getToken()
    }, [])
    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={'large'} color='white' />
            </View>
        )
    }
    return (
        <>
        { isLoading
            ?
                <View style={styles.container}>
                    <ActivityIndicator size={'large'} color='white' />
                </View>
            :
            <SafeAreaView style={{flex: 1}}>
                <ScrollView>
                    <LinearGradient 
                        style={styles.container}
                        colors={['rgba(255,147,0,1)','rgba(255,185,0,1)']}
                    >

                        
                        <Image 
                            source={require('../../assets/bluesol-logo.png')}
                            style={styles.imgLogo}
                        />
                        <Image 
                            source={require('../../assets/casa.png')}
                            style={styles.imgAreaCliente}
                        />
                        <Text
                            style={styles.mainTitle}
                        >
                            Área do Cliente
                        </Text>
                        <Input
                            placeholder='Seu email'
                            rightIcon={
                                <Icon
                                    name='envelope'
                                    size={30}
                                    color='white'
                                    type='font-awesome-5'
                                    style={{paddingRight: 15}}
                                />
                            }
                            onChangeText={value => setEmail(value)}
                            inputStyle={[styles.fontLato700, styles.colorWhite]}
                            inputContainerStyle={styles.inputContainerStyle}
                            keyboardType='email-address'
                            placeholderTextColor='white'
                        />
                        <Input
                            placeholder='Sua senha'
                            rightIcon={
                                showPassword
                                    ?
                                        <Icon
                                            name='eye'
                                            size={30}
                                            color='white'
                                            type='font-awesome'
                                            style={{paddingRight: 15}}
                                            onPress={() => setShowPassword(!showPassword)}
                                        />
                                    :
                                        <Icon
                                            name='eye-slash'
                                            size={30}
                                            color='white'
                                            type='font-awesome'
                                            style={{paddingRight: 15}}
                                            onPress={() => setShowPassword(!showPassword)}
                                        />
                            }
                            onChangeText={value => setPassword(value)}
                            inputStyle={[styles.fontLato700, styles.colorWhite]}
                            inputContainerStyle={styles.inputContainerStyle}
                            placeholderTextColor='white'
                            secureTextEntry={showPassword}
                        />
                        <Button
                            title="ENTRAR"
                            loading={isLoadingBtn}
                            loadingProps={{ color: '#054E7D' }}
                            
                            buttonStyle={styles.button}
                            titleStyle={[styles.fontLato900, styles.fontSize24]}
                            containerStyle={styles.containerButton}
                            onPress={() => entrar()}
                        />
                        <TouchableOpacity style={{width: '100%', padding: 10, marginTop: 20}} onPress={() => setIsDialogVisible(!isDialogVisible)}>
                            <Text style={{textAlign: 'left', fontFamily: 'Lato_400Regular', color: 'white', fontSize: 20}}>
                                Esqueci minha senha
                            </Text>
                        </TouchableOpacity>
                        <Dialog
                            isVisible={isDialogVisible}
                            onBackdropPress={() => setIsDialogVisible(!isDialogVisible)}
                            overlayStyle={{width: '98%'}}
                        >
                            <Dialog.Title title='Redefinição de senha' titleStyle={{marginLeft: 10}} />
                            <Input
                                placeholder='Digite seu email'
                                onChangeText={value => setEmailDialogInput(value)}
                                inputStyle={[styles.fontLato400]}
                                inputContainerStyle={styles.inputContainerStyleDialog}
                                keyboardType='email-address'
                            />
                            <Dialog.Actions>
                                <Dialog.Button 
                                    title={'CANCELAR'}
                                    buttonStyle={{borderWidth: 1, marginRight: 10, backgroundColor: '#084578', borderColor: '#084578'}}
                                    titleStyle={{color: 'white', fontFamily: 'Lato_400Regular'}}
                                    onPress={() => setIsDialogVisible(!isDialogVisible)}
                                />
                                <Dialog.Button 
                                    title={'ENVIAR'}
                                    buttonStyle={{borderWidth: 1, marginRight: 10, backgroundColor: '#084578', borderColor: '#084578'}}
                                    titleStyle={{color: 'white', fontFamily: 'Lato_400Regular'}}
                                    onPress={() => sendEmailForgotPassword()}
                                    loading={isLoadingDialogBtn}
                                />
                            </Dialog.Actions>
                        </Dialog>
                        <TouchableOpacity style={{width: '100%', padding: 10, flexDirection: 'row', alignItems: 'center'}}
                            onPress={() => {
                                Alert.alert('Seu projeto não aparece?', 'Os dados de acesso são enviados por e-mail alguns dias após assinado o contrato, caso ainda não tenha recebido ou não consiga fazer o login, entre em contato com o nosso pós-venda pelo e-mail posvenda@bluesol.com.br')
                            }}
                        >
                            <Text style={{textAlign: 'left', fontFamily: 'Lato_400Regular', color: 'white', fontSize: 20}}>
                                Seu projeto não aparece?
                            </Text>
                            <Icon
                                name='question-circle'
                                size={20}
                                color='white'
                                type='font-awesome-5'
                                style={{paddingLeft: 10}}
                            />
                        </TouchableOpacity>
                    </LinearGradient>
                </ScrollView>
            </SafeAreaView>
        }
        </>
    )
}