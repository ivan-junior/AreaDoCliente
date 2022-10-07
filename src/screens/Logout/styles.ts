import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    containerButton: {
        marginHorizontal: 50,
        height: 50,
        width: 200,
        marginVertical: 10,
        marginTop: 50
    },
    button: {
        backgroundColor: '#f9b51b',
        borderRadius: 5,
    },
    titleButton: { 
        fontWeight: 'bold', 
        fontSize: 23 
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