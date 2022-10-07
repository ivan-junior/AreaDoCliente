import { Card, Icon } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { Alert, RefreshControl, ScrollView, Text, TouchableOpacity, View } from "react-native";
import StepIndicator from 'react-native-step-indicator';
import { CustomActivityIndicator } from "../../components/CustomActivityIndicator/CustomActivityIndicator";
import { IPositionIndicator } from "../../interfaces/IPositionIndicator";
import { IStatus } from "../../interfaces/IStatus";
import { getProjectStatus } from "../../services/bsApi";
import { isContractedInstallation } from "../../utils/utils";
import { currentPositionFranchiseNext } from "./currentPositionFranchiseNext";
import { currentPosition } from "./stepIndicatorCurrentPosition";
import { StepIndicatorIcon } from "./StepIndicatorIcon";
import { StepIndicatorIconFranchiseNext } from "./StepIndicatorIconFranchiseNext";
import { StepIndicatorLabel } from "./StepIndicatorLabel";
import { StepIndicatorLabelFranchiseNext } from "./StepIndicatorLabelFranchiseNext";
import { stepIndicatorLabels, stepIndicatorLabelsFranchiseNext } from "./stepIndicatorLabels";
import { stepIndicatorStyles } from "./stepIndicatorStyles";
import { styles } from "./styles";

export function Status() {
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const [project, setProject] = useState<IStatus>()
    const [status, setStatus] = useState<IPositionIndicator>()
    const [franchiseType, setFranchiseType] = useState('')
    async function getProjects() {
        const data = await getProjectStatus()
        setProject(data)
        isContractedInstallation(project?.records[0].Modelo_da_Franquia_do_Projeto__c)? setFranchiseType('premium') : setFranchiseType('next')
        const _status = franchiseType == 'next'? currentPositionFranchiseNext(data) : currentPosition(data)
        setStatus(_status)
        setIsLoading(false)
    }
    useEffect(() => {
        getProjects()
    }, [])

    if (isLoading) {
        return <CustomActivityIndicator />
    }
    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={getProjects}
                />
            }
        >
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <TouchableOpacity 
                        style={{flexDirection: 'row', alignItems: 'center'}} 
                        onPress={() => {
                            Alert.alert('Fase concluída', 'Este ícone indica que a fase do projeto está concluída')
                        }}
                    >
                        <Icon
                            name='check'
                            size={20}
                            color='white'
                            type='font-awesome-5'
                            style={{backgroundColor: '#ffa900', borderRadius: 100, marginRight: 10, padding: 6}}
                        />
                        <Text>Concluído</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{flexDirection: 'row', alignItems: 'center'}} 
                        onPress={() => {
                            Alert.alert('Fase em andamento', 'Este ícone indica que a fase do projeto está em andamento')
                        }}
                    >
                        <Icon
                            name='gears'
                            size={20}
                            color='white'
                            type='font-awesome'
                            style={{backgroundColor: '#666666', borderRadius: 100, marginRight: 10, padding: 6}}
                        />
                        <Text>Em andamento</Text>
                    </TouchableOpacity>
                </View>
                <Card containerStyle={{borderRadius: 20, paddingTop: 0}}>
                    {franchiseType == 'next' 
                        ?
                        <StepIndicator 
                            customStyles={stepIndicatorStyles}
                            currentPosition={status?.position}
                            labels={stepIndicatorLabelsFranchiseNext}
                            direction={"vertical"}
                            stepCount={stepIndicatorLabelsFranchiseNext.length}
                            renderLabel={(configText) => {
                                return <StepIndicatorLabelFranchiseNext configText={configText} infoLabel={status?.labels} />
                            }}
                            renderStepIndicator={(configIcon) => {
                                return <StepIndicatorIconFranchiseNext configIcon={configIcon}  />
                            }}
                        />
                        :
                        <StepIndicator 
                            customStyles={stepIndicatorStyles}
                            currentPosition={status?.position}
                            labels={stepIndicatorLabels}
                            direction={"vertical"}
                            stepCount={stepIndicatorLabels.length}
                            renderLabel={(configText) => {
                                return <StepIndicatorLabel configText={configText} infoLabel={status?.labels} />
                            }}
                            renderStepIndicator={(configIcon) => {
                                return <StepIndicatorIcon configIcon={configIcon}  />
                            }}
                        />
                    }
                </Card>
            </View>
        </ScrollView>
    )
}