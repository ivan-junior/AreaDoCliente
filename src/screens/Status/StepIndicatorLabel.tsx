import { Text, View } from "react-native";
import { isNullEmptyOrUndefined } from "../../utils/utils";
import { styles } from "./styles";
export const StepIndicatorLabel = ({configText, infoLabel}: any) => {
    const headerPositions = [0,5,8,12,16,18,20,22,24,28,31,33]
    if (headerPositions.includes(configText.position)) {
        return (
            <View style={[styles.flexCenter, styles.titleStepContainer]}>
                <Text style={styles.titleStepText}>
                    {configText.label}
                </Text>
            </View>
        )
    }
    return (
        <View style={[styles.stepContainer, styles.flexCenter]}>
            <Text style={styles.stepLabel}>
                {configText.label}
            </Text>
            {renderConfigSubLabel(configText.position, infoLabel)}
        </View>
    )
}

function renderConfigSubLabel(stepPosition: number, infoLabel: any) {
    if (stepPosition == 3 && !isNullEmptyOrUndefined(infoLabel.Data_In_cio_An_lise_Informa_es__c)) {
        return (
            <Text style={styles.stepSubLabel}>
                {infoLabel.Data_In_cio_An_lise_Informa_es__c}
            </Text>
        )
    } else if (stepPosition == 4 && !isNullEmptyOrUndefined(infoLabel.Data_de_In_cio_do_Projeto__c)) {
        return (
            <Text style={styles.stepSubLabel}>
                {infoLabel.Data_de_In_cio_do_Projeto__c}
            </Text>
        )
    } else if (stepPosition == 9 && !isNullEmptyOrUndefined(infoLabel.Previs_o_In_cio_Desenho_Projeto__c)) {
        return (
            <Text style={styles.stepSubLabel}>
                {infoLabel.Previs_o_In_cio_Desenho_Projeto__c}
            </Text>
        )
    } else if (stepPosition == 10 && !isNullEmptyOrUndefined(infoLabel.Data_Confer_ncia_Layout__c)) {
        return (
            <Text style={styles.stepSubLabel}>
                {infoLabel.Data_Confer_ncia_Layout__c}
            </Text>
        )
    } else if (stepPosition == 11 && !isNullEmptyOrUndefined(infoLabel.Data_Aprova_o_Layout__c)) {
        return (
            <Text style={styles.stepSubLabel}>
                {infoLabel.Data_Aprova_o_Layout__c}
            </Text>
        )
    } else if (stepPosition == 13 && (!isNullEmptyOrUndefined(infoLabel.Data_Envio_da_SA_para_Concession_ria__c) || isNullEmptyOrUndefined(infoLabel.Data_Envio_da_SA_para_Concession_ria__c))) {
        return (
            <>
            {
                isNullEmptyOrUndefined(infoLabel.Data_Envio_da_SA_para_Concession_ria__c)
                    ? 
                        <Text style={styles.stepSubLabel}>
                            {infoLabel.Previs_o_Envio_Solicita_o_Acesso__c}
                        </Text>
                    : 
                        <Text style={styles.stepSubLabel}>
                            {infoLabel.Data_Envio_da_SA_para_Concession_ria__c}
                        </Text>
                
            }
            </>
        )
    } else if (stepPosition == 14 && !isNullEmptyOrUndefined(infoLabel.Prazo_Parecer_Acesso_Concessionaria__c)) {
        return (
            <Text style={styles.stepSubLabel}>
                {infoLabel.Prazo_Parecer_Acesso_Concessionaria__c}
            </Text>
        )
    }  else if (stepPosition == 15 && !isNullEmptyOrUndefined(infoLabel.Data_Parecer_Aprovado__c)) {
        return (
            <Text style={styles.stepSubLabel}>
                {infoLabel.Data_Parecer_Aprovado__c}
            </Text>
        )
    } else if (stepPosition == 21 && (!isNullEmptyOrUndefined(infoLabel.Confirma_o_de_entrega__c) || isNullEmptyOrUndefined(infoLabel.Previs_o_de_Entrega_ao_Cliente__c))) {
        return (
            <>
            {
                isNullEmptyOrUndefined(infoLabel.Confirma_o_de_entrega__c)
                    ? 
                        <Text style={styles.stepSubLabel}>
                            {infoLabel.Previs_o_de_Entrega_ao_Cliente__c}
                        </Text>
                    : 
                        <Text style={styles.stepSubLabel}>
                            {infoLabel.Confirma_o_de_entrega__c}
                        </Text>
                
            }
            </>
        )
    } else if (stepPosition == 25 && !isNullEmptyOrUndefined(infoLabel.Data_Recebimento_RIC__c)) {
        return (
            <Text style={styles.stepSubLabel}>
                {infoLabel.Data_Recebimento_RIC__c}
            </Text>
        )
    } else if (stepPosition == 26 && !isNullEmptyOrUndefined(infoLabel.Data_In_cio_An_lise_RIC__c)) {
        return (
            <Text style={styles.stepSubLabel}>
                {infoLabel.Data_In_cio_An_lise_RIC__c}
            </Text>
        )
    } else if (stepPosition == 27 && !isNullEmptyOrUndefined(infoLabel.Data_do_RIC_Aprovado__c)) {
        return (
            <Text style={styles.stepSubLabel}>
                {infoLabel.Data_do_RIC_Aprovado__c}
            </Text>
        )
    } else if (stepPosition == 29 && !isNullEmptyOrUndefined(infoLabel.Data_Solicita_o_da_Vistoria_Distrib__c)) {
        return (
            <Text style={styles.stepSubLabel}>
                {`${infoLabel.Data_Solicita_o_da_Vistoria_Distrib__c}`}
            </Text>
        )
    } else if (stepPosition == 30 && !isNullEmptyOrUndefined(infoLabel.Data_de_Aprova_o_da_Vistoria__c)) {
        return (
            <Text style={styles.stepSubLabel}>
                {`${infoLabel.Data_de_Aprova_o_da_Vistoria__c}`}
            </Text>
        )
    } else if (stepPosition == 32 && !isNullEmptyOrUndefined(infoLabel.Data_Medidor_Trocado__c)) {
        return (
            <Text style={styles.stepSubLabel}>
                {`${infoLabel.Data_Medidor_Trocado__c}`}
            </Text>
        )
    } else {
        return (
            <></>
        )
    }
}