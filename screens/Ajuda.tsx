import { StyleSheet, Text, View } from "react-native";

export default function Ajuda() {
    return (
        <View style={styles.container}>
            <Text>Pedir Ajuda</Text>
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