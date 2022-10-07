export interface IStatus {
    totalSize: number,
    done: boolean,
    records: IRecords[]
}

interface IRecords {
    Id: string,
    Name: string,
    Pedido_EGESTOR_TOTVS__c: number,
    Data_Recebimento_Ficha_Visita_T_cnica__c?: string,
    Data_In_cio_An_lise_Informa_es__c?: any,
    Data_de_In_cio_do_Projeto__c?: any,
    Solicita_o_Acesso_Aguardando_Pend_ncias__c?: boolean,
    Previs_o_In_cio_Desenho_Projeto__c?: any,
    Data_de_In_cio_Efetivo__c?: any,
    Data_Envio_Proj_p_Aprova_o__c?: string,
    Data_Aprova_o_Layout__c?: any,
    Previs_o_Envio_Solicita_o_Acesso__c?: any,
    Data_Inicio_Elabora_o_SA__c?: string,
    Data_Envio_da_SA_para_Concession_ria__c?: any,
    Prazo_Parecer_Acesso_Concessionaria__c?: any,
    Data_Parecer_Aprovado__c?: any,
    Data_Compra_Trafo__c?: string,
    Qtde_Dias_Despacho_Equipamentos__c?: number,
    Data_Coleta__c?: string,
    Previs_o_de_Entrega_ao_Cliente__c?: any,
    Confirma_o_de_entrega__c?: any,
    Modelo_da_Franquia_do_Projeto__c?: any,
    Gest_o_CST__r?: IGestaoCST,
    Posvendas__r?: IPosvenda,
    Data_prevista_de_instalacao__c?: string,
    Data_Agendamento_Instala_o_CST__c?: string,
    Data_em_Instala_o_Acompanhamento__c?: string,
    Fim_da_Instala_o__c?: any,
    Data_Recebimento_RIC__c?: any,
    Data_In_cio_An_lise_RIC__c?: any,
    Data_do_RIC_Aprovado__c?: any,
    Data_Liberado_para_pedir_vistoria__c?: string,
    Data_Solicita_o_da_Vistoria_Distrib__c?: any,
    Data_de_Aprova_o_da_Vistoria__c?: any,
    Tamanho_do_Sistema__c?: number,
    Data_Medidor_Trocado__c?: any,
}

interface IPosvenda {
    Data_Confer_ncia_Layout__c?: any,
    Confer_ncia_VT_Layout__c?: boolean
}

interface IGestaoCST {
    Data_Envio_Autoriza_o_Subcontrata_o__c?: any,
    Data_Agendamento_Instala_o__c?: any
}