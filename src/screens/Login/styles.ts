import { Platform, StatusBar, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    imgLogo: {
        width: 100,
        height: 21,
        marginBottom: 5,
        marginTop: 10
    },
    imgAreaCliente: {
        width: 200,
        height: 188,
        marginBottom: 15
    },
    mainTitle: {
        marginBottom: 15, 
        color: 'white', 
        fontFamily: 'Lato_900Black', 
        fontSize: 32
    },
    inputContainerStyle: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 7, 
        marginTop: 5,
        paddingLeft: 10,
        height: 60,
        borderColor: 'white'
    },
    inputContainerStyleDialog: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 7, 
        marginTop: 5,
        paddingLeft: 5,
        height: 50
    },
    containerButton: {
        marginTop: 10,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10
    },
    button: {
        backgroundColor: '#084578',
        borderRadius: 7,
        height: 50
    },
    titleButton: { 
        fontWeight: 'bold', 
        fontSize: 24 
    },
    forgotPassword: {

    },
    fontMontserrat600: {
        fontFamily: 'Montserrat_600SemiBold'
    },
    fontMontserrat700: {
        fontFamily: 'Montserrat_700Bold'
    },
    fontMontserrat900: {
        fontFamily: 'Montserrat_900Black'
    },
    fontLato400: {
        fontFamily: 'Lato_400Regular'
    },
    fontLato700: {
        fontFamily: 'Lato_700Bold'
    },
    fontLato900: {
        fontFamily: 'Lato_900Black'
    },
    colorWhite: {
        color: 'white'
    },
    fontSize24: {
        fontSize: 24
    }
});