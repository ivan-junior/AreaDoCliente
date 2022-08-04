
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react';
import Ajuda from './screens/Ajuda';
import Dados from './screens/Dados';
import {LogoutScreen} from './screens/Logout';
import Perguntas from './screens/Perguntas';
import {Sistema} from './screens/Sistema';
import {Login} from './screens/Login';
import Status from './screens/Status';
import { RootStackParamList } from './types';
import { Icon } from '@rneui/themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AppScreenProps = NativeStackScreenProps<RootStackParamList, 'Logout'>
const App: React.FC<AppScreenProps> = (props) => {
  const Tab = createBottomTabNavigator<RootStackParamList>()
  return (
        <NavigationContainer>
            <Tab.Navigator

              screenOptions={({ route }) => ({
                tabBarIcon: ({focused, color, size}) => {
                  
                  if (route.name == 'Sistema') {
                    // return <SolarPower htmlColor={focused? '#0288d1': 'gray'} />
                    return <Icon name='solar-panel' type='font-awesome-5' color={focused? '#0288d1': 'gray'} />
                  }
                  if (route.name == 'Status') {
                    // return <List htmlColor={focused? '#0288d1': 'gray'} />
                    return <Icon name='list-ul' type='font-awesome' color={focused? '#0288d1': 'gray'} />
                  }
                  if (route.name == 'Dados') {
                    // return <Person htmlColor={focused? '#0288d1': 'gray'} />
                    return <Icon name='user' type='font-awesome' color={focused? '#0288d1': 'gray'} />
                  }
                  if (route.name == 'FAQ') {
                    // return <Help htmlColor={focused? '#0288d1': 'gray'} />
                    return <Icon name='question-circle-o' type='font-awesome' color={focused? '#0288d1': 'gray'} />
                  }
                  if (route.name == 'Ajuda') {
                    // return <AttachEmail htmlColor={focused? '#0288d1': 'gray'} />
                    return <Icon name='envelope-o' type='font-awesome' color={focused? '#0288d1': 'gray'} />
                  }
                  if (route.name == 'Logout') {
                    // return <Logout htmlColor={focused? '#0288d1': 'gray'} />
                    return <Icon name='sign-out' type='font-awesome' color={focused? '#0288d1': 'gray'} />
                  }
                }
              })}
            >
              <Tab.Screen 
                name='Login' 
                component={Login}
                options={{tabBarStyle: {display: 'none'}, headerShown: false, tabBarItemStyle: {display: 'none'}}}
              />
              <Tab.Screen 
                name='Sistema' 
                component={Sistema}
                
              />
              <Tab.Screen 
                name='Status' 
                component={Status}
              
              />
              <Tab.Screen 
                name='Dados' 
                component={Dados}
              />
              <Tab.Screen 
                name='FAQ' 
                component={Perguntas}
              />
              <Tab.Screen 
                name='Ajuda' 
                component={Ajuda}
              />
              <Tab.Screen 
                name='Logout' 
                component={LogoutScreen}
              />
            </Tab.Navigator>
        </NavigationContainer>
    );
  }

export default App;