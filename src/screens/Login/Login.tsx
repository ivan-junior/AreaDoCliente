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
import { isEmail } from '../../utils/utils';
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
    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    
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
            <SafeAreaView style={styles.flex1}>
                <ScrollView contentContainerStyle={styles.flexGrow1}>
                    <LinearGradient
                        style={styles.container}
                        colors={['rgba(255,147,0,1)','rgba(255,185,0,1)']}
                    >
                        {/* <View style={styles.container}> */}
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
                                errorMessage={emailErrorMessage}
                                errorStyle={styles.fontLato400}
                                onBlur={() => isEmail(email as string)? setEmailErrorMessage('') : setEmailErrorMessage('Insira um email válido')}
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
                                loadingProps={{ color: 'white' }}
                                
                                buttonStyle={styles.button}
                                titleStyle={[styles.fontLato900, styles.fontSize24]}
                                containerStyle={styles.containerButton}
                                onPress={() => entrar()}
                            />
                            <TouchableOpacity style={styles.forgotPasswordTouchable} onPress={() => setIsDialogVisible(!isDialogVisible)}>
                                <Text style={styles.forgotPasswordText}>
                                    Esqueci minha senha
                                </Text>
                            </TouchableOpacity>
                            <Dialog
                                isVisible={isDialogVisible}
                                onBackdropPress={() => setIsDialogVisible(!isDialogVisible)}
                                overlayStyle={styles.dialogOverlay}
                            >
                                <Dialog.Title title='Redefinição de senha' titleStyle={styles.dialogTitle} />
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
                                        buttonStyle={styles.dialogButton}
                                        titleStyle={styles.dialogButtonTitle}
                                        onPress={() => setIsDialogVisible(!isDialogVisible)}
                                    />
                                    <Dialog.Button 
                                        title={'ENVIAR'}
                                        buttonStyle={styles.dialogButton}
                                        titleStyle={styles.dialogButtonTitle}
                                        onPress={() => sendEmailForgotPassword()}
                                        loading={isLoadingDialogBtn}
                                        loadingProps={styles.colorWhite}
                                    />
                                </Dialog.Actions>
                            </Dialog>
                            <TouchableOpacity style={styles.projectNotShowingTouchable}
                                onPress={() => {
                                    Alert.alert('Seu projeto não aparece?', 'Os dados de acesso são enviados por e-mail alguns dias após assinado o contrato, caso ainda não tenha recebido ou não consiga fazer o login, entre em contato com o nosso pós-venda pelo e-mail posvenda@bluesol.com.br')
                                }}
                            >
                                <Text style={styles.projectNotShowingText}>
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
                        {/* </View> */}
                    </LinearGradient>
                </ScrollView>
            </SafeAreaView>
        }
        </>
    )
}