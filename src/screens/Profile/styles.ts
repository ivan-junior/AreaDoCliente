import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 24, 
        fontFamily: 'Lato_700Bold',
        marginBottom: 15
    },
    value: {
        fontSize: 24, 
        fontFamily: 'Lato_400Regular',
        marginBottom: 20,
        borderBottomWidth: 3,
        borderBottomColor: '#f4f4f4',
        paddingBottom: 15
    }
})