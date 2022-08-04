import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "@rneui/base";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../types";

type CentralScreenProps = NativeStackScreenProps<RootStackParamList, 'Central'>

export const Central: React.FC<CentralScreenProps> = (props) => {
    return (
        <View style={styles.container}>
            <Text>Central</Text>

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
                onPress={() => props.navigation.navigate('Sistema')}
            />
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})