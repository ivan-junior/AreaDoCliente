import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";

export function CustomActivityIndicator() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color='white' />
        </View>
    )
}