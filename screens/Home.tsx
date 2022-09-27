import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Icon } from "@rneui/themed";
import { RootStackParamList } from "../types";
import Ajuda from "./Ajuda";
import Dados from "./Dados";
import { LogoutScreen } from "./Logout";
import Perguntas from "./Perguntas";
import { Sistema } from "./Sistema";
import Status from "./Status";

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
            <Tab.Screen name='Dados' component={Dados} />
            <Tab.Screen name='FAQ' component={Perguntas} />
            <Tab.Screen name='Ajuda' component={Ajuda} />
            <Tab.Screen name='Logout' component={LogoutScreen} />
        </Tab.Navigator>
    )
}