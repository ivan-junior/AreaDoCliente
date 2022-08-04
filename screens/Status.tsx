import { StyleSheet, Text, View } from "react-native";

export default function Status() {
    return (
        <View style={styles.container}>
            <Text>Status</Text>
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