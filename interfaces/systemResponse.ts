export interface ISystemResponse {
    totalSize?: number,
    done?: boolean,
    records: IRecords[]
}
interface IRecords {
    Contato_Principal__c?: string,
    Pedido_EGESTOR_TOTVS__c?: number,
    Data_da_Cria_o_do_Caso__c?: string | any,
    Pot_ncia_Projeto_kwp__c?: number,
    Estrutura__c?: string,
    Tamanho_do_Sistema__c?: number,
    Valor_da_Oportunidade__c?: number | any,
    N_mero_de_M_dulos_Fotovoltaicos__c?: number,
    N_mero_de_Inversores__c?: number
}