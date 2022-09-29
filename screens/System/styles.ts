import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    systemTitle: {
        fontFamily: 'Lato_900Black',
        fontSize: 35
    },
    systemRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 10,
        borderBottomWidth: 3,
        borderBottomColor: '#f9b51b',
        paddingBottom: 15
    },
    systemLabel: {
        fontSize: 20, 
        fontFamily: 'Lato_700Bold'
    },
    systemField: {
        fontSize: 20, 
        fontFamily: 'Lato_400Regular'
    }
})