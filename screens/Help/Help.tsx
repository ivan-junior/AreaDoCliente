import { ButtonGroup } from "@rneui/themed";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Help() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <ButtonGroup
                    buttons={['DÚVIDA', 'RECLAMAÇÃO', 'ELOGIO']}
                    containerStyle={styles.containerButton}
                    textStyle={{fontFamily: 'Lato_700Bold'}}
                    selectedIndex={selectedIndex}
                    onPress={(value) => {
                        setSelectedIndex(value);
                    }}
                />
            </TouchableOpacity>
            <TextInput
                multiline
                numberOfLines={10}
                style={styles.textInput}
                maxLength={1000}
                textAlignVertical={"top"}
            />
        </View>
    )
}