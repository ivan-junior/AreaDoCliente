import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        marginTop: 10
    },
    containerIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexCenter: {
        flex: 1,
        justifyContent: 'center'
    },
    titleStepContainer: {
        padding: 5,
        marginRight: 35
    },
    titleStepText: {
        textAlignVertical: 'center', 
        minHeight: 90, 
        fontSize: 20, 
        fontFamily: 'Lato_700Bold'
    },
    stepContainer: {
        padding: 5, 
        marginRight: 35, 
        minHeight: 95
    },
    stepLabel: {
        fontFamily: 'Lato_400Regular', 
        fontSize: 16, 
        textAlignVertical: 'center'
    },
    stepSubLabel: {
        fontFamily: 'Lato_400Regular', 
        fontSize: 14, 
        textAlignVertical: 'center',
        paddingTop: 5
    }
})