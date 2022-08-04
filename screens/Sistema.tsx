import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Card, Text } from "@rneui/themed";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import NumberFormat from "react-number-format";
import getSystem from "../apis/system";
import { ISystemResponse } from "../interfaces/systemResponse";
import { RootStackParamList } from "../types";

type SistemaScreenProps = NativeStackScreenProps<RootStackParamList, 'Sistema'>


export const Sistema: React.FC<SistemaScreenProps> = (props) => {
    const [projects, setProjects] = useState<ISystemResponse>()
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        getSystem()
        .then(response => {
            setProjects(response)
        })
        .catch((error) => {console.log(error)})
        .finally(() => {setLoading(false)})
    }, [])
    return (
        <View style={styles.container}>
            {
                isLoading 
                ? <Text>Loading...</Text> 
                : 
                <View style={{flex: 1, width: '100%'}}>
                    {
                        projects?.records.map((projeto, i) => {
                            return (
                                <Card key={i} containerStyle={{borderRadius: 20, marginBottom: 50}}>
                                    <Card.Title><Text h2>Projeto {projeto.Pedido_EGESTOR_TOTVS__c}</Text></Card.Title>
                                    <Card.Divider />
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Data de Início: </Text>
                                        <Text style={{fontSize: 20}}>{format(new Date(projeto.Data_da_Cria_o_do_Caso__c.substring(0,19)), 'dd/MM/yyyy')}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Tipo de Sistema: </Text>
                                        <Text style={{fontSize: 20}}>{projeto.Estrutura__c}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Potência em kWp: </Text>
                                        <Text style={{fontSize: 20}}>{projeto.Tamanho_do_Sistema__c}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Valor: </Text>
                                        <NumberFormat
                                            value={projeto.Valor_da_Oportunidade__c}
                                            displayType='text'
                                            thousandSeparator={true}
                                            prefix={'R$'}
                                            renderText={(value) => <Text style={{fontSize: 20}}>{value}</Text>}
                                        />
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Nº de Módulos: </Text>
                                        <Text style={{fontSize: 20}}>{projeto.N_mero_de_M_dulos_Fotovoltaicos__c}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Nº de Inversores: </Text>
                                        <Text style={{fontSize: 20}}>{projeto.N_mero_de_Inversores__c}</Text>
                                    </View>
                                </Card>
                                // <Text key={element.Pedido_EGESTOR_TOTVS__c}>{element.Pedido_EGESTOR_TOTVS__c}</Text>
                            )
                        })
                    }
                    <View>
                        <Text style={{padding: 20}}>
                            A quantidade de módulos é referencial, consulte seu contrato para maiores detalhes.
                            Para prazos, consulte os prazos contratuais.
                            Estamos trabalhando para te entregar o mais cedo possível, mas sempre priorizando a qualidade e segurança.
                        </Text>
                    </View>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})