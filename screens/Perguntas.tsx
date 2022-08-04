import { StyleSheet, Text, View } from "react-native";

export default function Perguntas() {
    return (
        <View style={styles.container}>
            <Text>Perguntas Frequentes</Text>
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