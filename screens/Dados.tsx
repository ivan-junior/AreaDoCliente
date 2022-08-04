import { StyleSheet, Text, View } from "react-native";

export default function Dados() {
    return (
        <View style={styles.container}>
            <Text>Seus Dados</Text>
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