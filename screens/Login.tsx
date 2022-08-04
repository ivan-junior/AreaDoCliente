import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, Icon, Input, Text } from '@rneui/themed';
import authenticate from '../services/authenticate';
import { storeData } from '../services/storeData';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface iResponseLogin {
    user: {
		name: string,
		email: string,
		address: string,
		phone: string,
		profile: string,
		added: string,
		projectNumber: [
			number
		]
    },
    token: string
}

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>

export const Login: React.FC<LoginScreenProps> = (props) => {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const entrar = async () => {
        const login = await authenticate({email,password})
        if (login.token != null && login.token != undefined) {
            await storeData('TOKEN', login.token)
            props.navigation.navigate('Sistema')
        } else {
            alert('Não foi possível autenticar')
        }
    }
    AsyncStorage.getItem('TOKEN').then((token) => {
        if (token !== null) {
            props.navigation.navigate('Sistema')
        }
    })

    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/bluesol-logo.png')}
                style={styles.imgLogo}
            />
            <Text 
                h2 
                style={{marginBottom: 50, color: 'white', fontWeight: '700'}}
            >
                Área do Cliente
            </Text>
            <Input
                placeholder='Seu email'
                rightIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='white'
                        type='font-awesome-5'
                    />
                }
                onChangeText={value => setEmail(value)}
                inputStyle={{color: 'white'}}
                inputContainerStyle={{borderColor: 'white'}}
                keyboardType='email-address'
                placeholderTextColor='white'
            />
            <Input
                placeholder='Sua senha'
                rightIcon={
                    <Icon
                        name='eye'
                        size={24}
                        color='white'
                        type='font-awesome'
                    />
                }
                onChangeText={value => setPassword(value)}
                inputStyle={{color: 'white'}}
                inputContainerStyle={{borderColor: 'white'}}
                placeholderTextColor='white'
                secureTextEntry={true}
            />
            {/* <FormControl sx={{m: 1, width: '90%', color: 'white', borderColor: 'white'}} variant='outlined'>
                <InputLabel htmlFor='email' style={{color: 'white', fontWeight: '500'}}>Seu email</InputLabel>
                <OutlinedInput 
                    id='email'
                    type='email'
                    onChange={value => setEmail(value.target.value)}
                    sx={{color: 'white'}}
                    endAdornment={
                    <InputAdornment position='end'>
                        <IconButton
                        aria-label='toggle password visibility'
                        edge='end'
                        >
                        <AlternateEmail sx={{color: 'white'}} />
                        </IconButton>
                    </InputAdornment>
                    }
                    label='Password'
                />
            </FormControl>
            <FormControl sx={{m: 1, width: '90%', color: 'white', borderColor: 'white'}} variant='outlined'>
                <InputLabel htmlFor='password' style={{color: 'white', fontWeight: '500'}}>Sua senha</InputLabel>
                <OutlinedInput 
                    id='password'
                    type='password'
                    onChange={value => setPassword(value.target.value)}
                    sx={{color: 'white'}}
                    endAdornment={
                    <InputAdornment position='end'>
                        <IconButton
                        aria-label='toggle password visibility'
                        edge='end'
                        >
                        <Visibility sx={{color: 'white'}} />
                        </IconButton>
                    </InputAdornment>
                    }
                    label='Password'
                />
            </FormControl> */}
            <Button
                title="ENTRAR"
                loading={false}
                loadingProps={{ color: '#054E7D' }}
                
                buttonStyle={{
                    backgroundColor: '#f9b51b',
                    borderRadius: 5,
                }}
                titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                containerStyle={{
                    marginHorizontal: 50,
                    height: 50,
                    width: 200,
                    marginVertical: 10,
                    marginTop: 50
                }}
                onPress={() => entrar()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2265db',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgLogo: {
      width: 200,
      height: 42,
      marginBottom: 50
    }
  });
  