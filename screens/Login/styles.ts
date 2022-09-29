import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2265db',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgLogo: {
        width: 200,
        height: 42,
        marginBottom: 35
    },
    mainTitle: {
        marginBottom: 35, 
        color: 'white', 
        fontFamily: 'Montserrat_700Bold', 
        fontSize: 32
    },
    inputContainerStyle: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 7, 
        marginTop: 5,
        paddingLeft: 10,
        height: 80,
        borderColor: 'white'
    },
    containerButton: {
        marginTop: 10,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10
    },
    button: {
        backgroundColor: '#f9b51b',
        borderRadius: 7,
        height: 70
    },
    titleButton: { 
        fontWeight: 'bold', 
        fontSize: 24 
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
    colorWhite: {
        color: 'white'
    },
    fontSize24: {
        fontSize: 24
    }
});