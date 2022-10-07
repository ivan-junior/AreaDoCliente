import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Icon } from "@rneui/themed";
import { RootStackParamList } from "../../../types";
import { Faq } from "../Faq/Faq";
import { Help } from "../Help/Help";
import { LogoutScreen } from "../Logout/Logout";
import { Profile } from "../Profile/Profile";
import { Status } from "../Status/Status";
import { Sistema } from "../System/System";

type AppScreenProps = NativeStackScreenProps<RootStackParamList, 'Logout'>
export const Home: React.FC<AppScreenProps> = (props) => {
    const Tab = createBottomTabNavigator<RootStackParamList>()
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({focused, color, size}) => {
                    if (route.name == 'Sistema') {
                        return <Icon name='solar-panel' type='font-awesome-5' color={focused? '#0288d1': 'gray'} />
                    }
                    if (route.name == 'Status') {
                        return <Icon name='list-ul' type='font-awesome' color={focused? '#0288d1': 'gray'} />
                    }
                    if (route.name == 'Dados') {
                        return <Icon name='user' type='font-awesome' color={focused? '#0288d1': 'gray'} />
                    }
                    if (route.name == 'FAQ') {
                        return <Icon name='question-circle-o' type='font-awesome' color={focused? '#0288d1': 'gray'} />
                    }
                    if (route.name == 'Ajuda') {
                        return <Icon name='envelope-o' type='font-awesome' color={focused? '#0288d1': 'gray'} />
                    }
                    if (route.name == 'Logout') {
                        return <Icon name='sign-out' type='font-awesome' color={focused? '#0288d1': 'gray'} />
                    }
                }
            })}
        >
            <Tab.Screen name='Sistema' component={Sistema} options={{headerTitle: 'Seu Sistema'}} />
            <Tab.Screen name='Status' component={Status} />
            <Tab.Screen name='Dados' component={Profile} options={{headerTitle: 'Seus Dados'}} />
            <Tab.Screen name='FAQ' component={Faq} options={{headerTitle: 'Perguntas Frequentes'}} />
            <Tab.Screen name='Ajuda' component={Help} options={{headerTitle: 'Pedir ajuda'}} />
            <Tab.Screen name='Logout' component={LogoutScreen} options={{tabBarLabel:'Sair'}} />
        </Tab.Navigator>
    )
}