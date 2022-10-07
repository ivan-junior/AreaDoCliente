import { Lato_400Regular, Lato_700Bold, Lato_900Black, useFonts } from "@expo-google-fonts/lato";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Card, Text } from "@rneui/themed";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";
import NumberFormat from "react-number-format";
import { RootStackParamList } from "../../../types";
import { CustomActivityIndicator } from "../../components/CustomActivityIndicator/CustomActivityIndicator";
import { ISystemResponse } from "../../interfaces/ISystemResponse";
import { getUserProjects } from "../../services/bsApi";
import { styles } from "./styles";

type SistemaScreenProps = NativeStackScreenProps<RootStackParamList, 'Sistema'>


export const Sistema: React.FC<SistemaScreenProps> = (props) => {
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const [projects, setProjects] = useState<ISystemResponse>()
    async function getProjects() {
        const data = await getUserProjects()
        setProjects(data)
        setIsLoading(false)
    }
    useEffect(() => {
        getProjects()
    }, [])
    let [fontsLoaded] = useFonts({
        Lato_400Regular,
        Lato_700Bold,
        Lato_900Black
    })
    if (!fontsLoaded || isLoading) {
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
                <View style={{flex: 1, width: '100%'}}>
                    {
                        projects?.records.map((projeto, i) => {
                            return (
                                <Card key={i} containerStyle={{borderRadius: 20, marginBottom: 50}}>
                                    <Card.Title>
                                        <Text style={styles.systemTitle}>
                                            Projeto {projeto.Pedido_EGESTOR_TOTVS__c}
                                        </Text>
                                    </Card.Title>
                                    <Card.Divider />
                                    <View style={styles.systemRow}>
                                        <Text style={styles.systemLabel}>Data de Início: </Text>
                                        <Text style={styles.systemField}>{format(new Date(projeto.Data_da_Cria_o_do_Caso__c.substring(0,19)), 'dd/MM/yyyy')}</Text>
                                    </View>
                                    <View style={styles.systemRow}>
                                        <Text style={styles.systemLabel}>Tipo de Sistema: </Text>
                                        <Text style={styles.systemField}>{projeto.Estrutura__c}</Text>
                                    </View>
                                    <View style={styles.systemRow}>
                                        <Text style={styles.systemLabel}>Potência em kWp: </Text>
                                        <Text style={styles.systemField}>{projeto.Tamanho_do_Sistema__c}</Text>
                                    </View>
                                    <View style={styles.systemRow}>
                                        <Text style={styles.systemLabel}>Valor: </Text>
                                        <NumberFormat
                                            value={projeto.Valor_da_Oportunidade__c}
                                            displayType='text'
                                            thousandSeparator={true}
                                            prefix={'R$'}
                                            renderText={(value) => <Text style={styles.systemField}>{value}</Text>}
                                        />
                                    </View>
                                    <View style={styles.systemRow}>
                                        <Text style={styles.systemLabel}>Nº de Módulos: </Text>
                                        <Text style={styles.systemField}>{projeto.N_mero_de_M_dulos_Fotovoltaicos__c}</Text>
                                    </View>
                                    <View style={styles.systemRow}>
                                        <Text style={styles.systemLabel}>Nº de Inversores: </Text>
                                        <Text style={styles.systemField}>{projeto.N_mero_de_Inversores__c}</Text>
                                    </View>
                                </Card>
                            )
                        })
                    }
                    <View>
                        <Text style={styles.refText}>
                            A quantidade de módulos é referencial, consulte seu contrato para maiores detalhes.
                            Para prazos, consulte os prazos contratuais.
                            Estamos trabalhando para te entregar o mais cedo possível, mas sempre priorizando a qualidade e segurança.
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}