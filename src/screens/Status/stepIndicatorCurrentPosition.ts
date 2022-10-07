import { IStatus } from "../../interfaces/IStatus"
import { formatDateToLocalTimezone, isNullEmptyOrUndefined } from "../../utils/utils"


export function currentPosition(data: IStatus) {
    const status = {
        position: 1,
        labels: {
            Data_In_cio_An_lise_Informa_es__c: '',
            Data_de_In_cio_do_Projeto__c: '',
            Previs_o_In_cio_Desenho_Projeto__c: '',
            Data_Confer_ncia_Layout__c: '',
            Data_Aprova_o_Layout__c: '',
            Previs_o_Envio_Solicita_o_Acesso__c: '',
            Data_Envio_da_SA_para_Concession_ria__c: '',
            Prazo_Parecer_Acesso_Concessionaria__c: '',
            Data_Parecer_Aprovado__c: '',
            Previs_o_de_Entrega_ao_Cliente__c: '',
            Confirma_o_de_entrega__c: '',
            Data_Recebimento_RIC__c: '',
            Data_In_cio_An_lise_RIC__c: '',
            Data_do_RIC_Aprovado__c: '',
            Data_Solicita_o_da_Vistoria_Distrib__c: '',
            Data_de_Aprova_o_da_Vistoria__c: '',
            Data_Medidor_Trocado__c: ''
        }
    }
    const record = data.records[0]
    if (isNullEmptyOrUndefined(record.Data_Recebimento_Ficha_Visita_T_cnica__c)) {
        return status
    } else {
        status.position = 2
    }
    if(isNullEmptyOrUndefined(record.Data_In_cio_An_lise_Informa_es__c)) {
        return status
    } else {
        status.position = 3
        status.labels.Data_In_cio_An_lise_Informa_es__c = `Início da análise: ${formatDateToLocalTimezone(record.Data_In_cio_An_lise_Informa_es__c)}`
    }
    if (isNullEmptyOrUndefined(record.Data_de_In_cio_do_Projeto__c)) {
        return status;
    } else {
        status.position = 6
        status.labels.Data_de_In_cio_do_Projeto__c = `Aprovado em: ${formatDateToLocalTimezone(record.Data_de_In_cio_do_Projeto__c)}`
    }
    if (isNullEmptyOrUndefined(record.Solicita_o_Acesso_Aguardando_Pend_ncias__c)) {
        status.position = 9
        status.labels.Previs_o_In_cio_Desenho_Projeto__c = `Previsão de início: ${formatDateToLocalTimezone(record.Previs_o_In_cio_Desenho_Projeto__c)}`
    } else {
        return status;
    }
    if (isNullEmptyOrUndefined(record.Data_de_In_cio_Efetivo__c)) {
        return status
    } else {
        status.position = 10
        status.labels.Previs_o_In_cio_Desenho_Projeto__c = `Iniciado em: ${formatDateToLocalTimezone(record.Data_de_In_cio_Efetivo__c)}`
    }
    if (isNullEmptyOrUndefined(record.Posvendas__r)) {
        return status
    } else {
        if (record.Posvendas__r?.Confer_ncia_VT_Layout__c) {
            if (isNullEmptyOrUndefined(record.Posvendas__r.Data_Confer_ncia_Layout__c)) {        
                status.position = 11
            } else {
                status.position = 11
                status.labels.Data_Confer_ncia_Layout__c = `Enviado em: ${formatDateToLocalTimezone(record.Posvendas__r.Data_Confer_ncia_Layout__c)}`
            }
        } else {
            return status
        }
    }
    if (isNullEmptyOrUndefined(record.Data_Aprova_o_Layout__c)) {
        return status
    } else {
        status.position = 13
        status.labels.Data_Aprova_o_Layout__c = `Aprovado em: ${formatDateToLocalTimezone(record.Data_Aprova_o_Layout__c)}`
        status.labels.Previs_o_Envio_Solicita_o_Acesso__c = `Previsão de envio: ${formatDateToLocalTimezone(record.Previs_o_Envio_Solicita_o_Acesso__c)}`
    }
    if (isNullEmptyOrUndefined(record.Data_Envio_da_SA_para_Concession_ria__c)) {
        return status
    } else {
        status.position = 15
        status.labels.Data_Envio_da_SA_para_Concession_ria__c = `Enviada em: ${formatDateToLocalTimezone(record.Data_Envio_da_SA_para_Concession_ria__c)}`
        status.labels.Prazo_Parecer_Acesso_Concessionaria__c = `${formatDateToLocalTimezone(record.Prazo_Parecer_Acesso_Concessionaria__c)}`
    }
    if (isNullEmptyOrUndefined(record.Data_Parecer_Aprovado__c)) {
        return status;
    } else {
        status.position = 17
        status.labels.Data_Parecer_Aprovado__c = `Aprovada em: ${formatDateToLocalTimezone(record.Data_Parecer_Aprovado__c)}`
    }
    if (isNullEmptyOrUndefined(record.Data_Compra_Trafo__c)) {
        return status;
    } else {
        status.position = 19
    }
    if (isNullEmptyOrUndefined(record.Data_Coleta__c)) {
        return status;
    } else {
        status.position = 21
        status.labels.Previs_o_de_Entrega_ao_Cliente__c = `Previsão de Entrega: ${formatDateToLocalTimezone(record.Previs_o_de_Entrega_ao_Cliente__c)}`
    }
    if (isNullEmptyOrUndefined(record.Confirma_o_de_entrega__c)) {
        return status;
    } else {
        status.position = 25
        status.labels.Confirma_o_de_entrega__c = `Chegou em: ${formatDateToLocalTimezone(record.Confirma_o_de_entrega__c)}`
    }
    if (isNullEmptyOrUndefined(record.Data_Recebimento_RIC__c)) {
        return status;
    } else {
        status.position = 26
        status.labels.Data_Recebimento_RIC__c = `Recebido em: ${formatDateToLocalTimezone(record.Data_Recebimento_RIC__c)}`
    }
    if (isNullEmptyOrUndefined(record.Data_In_cio_An_lise_RIC__c)) {
        return status;
    } else {
        status.position = 27
        status.labels.Data_In_cio_An_lise_RIC__c = `Início da análise: ${formatDateToLocalTimezone(record.Data_In_cio_An_lise_RIC__c)}`
    }
    if (isNullEmptyOrUndefined(record.Data_do_RIC_Aprovado__c)) {
        return status;
    } else {
        status.position = 29
        status.labels.Data_do_RIC_Aprovado__c = `Aprovado em: ${formatDateToLocalTimezone(record.Data_do_RIC_Aprovado__c)}`
    }
    if (isNullEmptyOrUndefined(record.Data_Solicita_o_da_Vistoria_Distrib__c)) {
        return status
    } else {
        status.position = 30
        status.labels.Data_Solicita_o_da_Vistoria_Distrib__c = `Solicitada em: ${formatDateToLocalTimezone(record.Data_Solicita_o_da_Vistoria_Distrib__c)}`
    }
    if (isNullEmptyOrUndefined(record.Data_de_Aprova_o_da_Vistoria__c)) {
        return status
    } else {
        status.position = 32
        status.labels.Data_de_Aprova_o_da_Vistoria__c = `Aprovada em: ${formatDateToLocalTimezone(record.Data_de_Aprova_o_da_Vistoria__c)}`
    }
    if (isNullEmptyOrUndefined(record.Data_Medidor_Trocado__c)) {
        return status
    } else {
        status.position = 34
        status.labels.Data_Medidor_Trocado__c = `Medidor trocado em: ${formatDateToLocalTimezone(record.Data_Medidor_Trocado__c)}`
    }
    return status
}