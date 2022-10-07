import { Icon } from "@rneui/themed";
import { View } from "react-native";
import { styles } from "./styles";

export const StepIndicatorIconFranchiseNext = ({configIcon}: any) => {
    if (configIcon.position == 0) {
        return <Icon name='file-document-edit' size={36} color='white' type='material-community' />
    } else if(configIcon.position == 5) {
        return <Icon name='document-text' size={36} color='white' type='ionicon' />
    } else if(configIcon.position == 8) {
        return <Icon name='drafting-compass' size={30} color='white' type='font-awesome-5' />
    } else if(configIcon.position == 12) {
        return <Icon name='railroad-light' size={36} color='white' type='material-community' />
    } else if(configIcon.position == 16) {
        return <Icon name='dropbox' size={36} color='white' type='font-awesome' />
    } else if(configIcon.position == 18) {
        return <Icon name='truck-delivery-outline' size={36} color='white' type='material-community' />
    } else if(configIcon.position == 20) {
        return <Icon name='truck-check-outline' size={36} color='white' type='material-community' />
    } else if(configIcon.position == 22) {
        return <Icon name='engineering' size={36} color='white' type='material' />
    } else if(configIcon.position == 27) {
        return <Icon name='star-check-outline' size={36} color='white' type='material-community' />
    } else if(configIcon.position == 31) {
        return <Icon name='user-check' size={26} color='white' type='font-awesome-5' />
    } else if(configIcon.position == 34) {
        return <Icon name='speed' size={36} color='white' type='material' />
    } else if(configIcon.position == 36) {
        return <Icon name='solar-power' size={38} color='white' type='material-community' />
    }
    return (
        <View style={[styles.containerIcon]}>
            {configIcon.stepStatus == 'finished'
                ? 
                <Icon
                    name='check'
                    size={30}
                    color='white'
                    type='font-awesome-5'
                />
                :
                    configIcon.stepStatus == 'current'
                    ? 
                    <Icon
                        name='gears'
                        size={30}
                        color='gray'
                        type='font-awesome'
                    />
                    :
                    <></>
            
            }
        </View>
    )
}