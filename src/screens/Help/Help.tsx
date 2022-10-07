import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, ButtonGroup, Icon } from "@rneui/themed";
import { Actionsheet, useDisclose } from "native-base";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { openCase } from "../../services/bsApi";
import { styles } from "./styles";

export function Help() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [textInput, setTextInput] = useState('')
    const [preferedContact, setPrefereContact] = useState('Telefone')
    const [isLoadingBtn, setLoadingBtn] = useState(false)
    const {isOpen, onOpen, onClose} = useDisclose()

    const buttonData = ['DÚVIDA', 'RECLAMAÇÃO', 'ELOGIO']

    async function send() {
        const data = {
            name: await AsyncStorage.getItem('@userName'),
            email: await AsyncStorage.getItem('@userEmail'),
            phone: await AsyncStorage.getItem('@userPhone'),
            projectNumber: await AsyncStorage.getItem('@userProjectNumber'),
            reason: buttonData[selectedIndex],
            contact: preferedContact,
            description: textInput,
        }
        await openCase(data)
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.padding10}>
                    <Text style={styles.label}>
                        Selecione o motivo
                    </Text>
                </View>
                <TouchableOpacity>
                    <ButtonGroup
                        buttons={buttonData}
                        containerStyle={styles.containerButtonGroup}
                        textStyle={{fontFamily: 'Lato_700Bold'}}
                        selectedButtonStyle={styles.backgroundColorOrange}
                        selectedIndex={selectedIndex}
                        onPress={(value) => {
                            setSelectedIndex(value);
                        }}
                    />
                </TouchableOpacity>
                <View style={[styles.padding10, styles.marginTop10]}>
                    <Text style={styles.label}>
                        Descreva {selectedIndex == 0? 'a sua dúvida' : selectedIndex == 1? 'a sua reclamação' : 'o seu elogio'}
                    </Text>
                </View>
                <TextInput
                    multiline
                    numberOfLines={10}
                    style={styles.textInput}
                    maxLength={1000}
                    textAlignVertical={"top"}
                    value={textInput}
                    onChangeText={(text) => setTextInput(text)}
                />
                <Text style={[styles.padding10, styles.textRight]}>{`${textInput.length}/1000`}</Text>
                
                <View style={[styles.padding10]}>
                    <Text style={styles.label} onPress={onOpen}>
                        Prefere contato por: 
                    </Text>
                </View>
                <TouchableOpacity onPress={onOpen}>
                    <View style={[styles.padding10, styles.preferedContact]}>
                        <Text style={styles.label}>
                            {preferedContact}
                        </Text>
                        <View>
                            {
                                <Icon
                                    name='chevron-down'
                                    size={20}
                                    color='black'
                                    type='font-awesome'
                                />
                            }
                        </View>
                    </View>
                </TouchableOpacity>
                <Actionsheet isOpen={isOpen} onClose={onClose}>
                    <Actionsheet.Content>
                        <Actionsheet.Item onPressOut={onClose} onPressIn={() => setPrefereContact('Telefone')}>Telefone</Actionsheet.Item>
                        <Actionsheet.Item onPressOut={onClose} onPressIn={() => setPrefereContact('Email')}>Email</Actionsheet.Item>
                    </Actionsheet.Content>
                </Actionsheet>
                <Button
                    title="Abrir chamado"
                    loading={isLoadingBtn}
                    loadingProps={{ color: '#054E7D' }}
                    titleStyle={[styles.fontLato700, styles.fontSize24]}
                    containerStyle={styles.containerButtonOpenCase}
                    buttonStyle={[styles.button, styles.backgroundColorOrange]}
                    onPress={() => send()}
                />
            </View>
        </ScrollView>
    )
}