import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 5
    },
    containerButtonGroup: {
        marginTop: 10,
        height: 40,
        borderRadius: 10
    },
    containerButtonOpenCase: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    textInput: {
        borderWidth: 1,
        margin: 10,
        padding: 15,
        borderRadius: 10,
        fontSize: 18,
        fontFamily: 'Lato_400Regular',
        backgroundColor: 'white'
    },
    padding10: {
        padding: 10
    },
    marginTop10: {
        marginTop: 10
    },
    label: {
        fontSize: 24,
        fontFamily: 'Lato_400Regular'
    },
    textRight: {
        textAlign: 'right'
    },
    button: {
        width: 200,
        height: 60,
        borderRadius: 10
    },
    fontLato700: {
        fontFamily: 'Lato_700Bold'
    },
    fontSize24: {
        fontSize: 20
    },
    backgroundColorOrange: {
        backgroundColor: '#f9b51b',
    },
    preferedContact: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        borderColor: 'black', 
        borderWidth: 1, 
        margin: 10, 
        borderRadius: 10, 
        backgroundColor: 'white'
    }
})