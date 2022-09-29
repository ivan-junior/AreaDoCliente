import { Card } from "@rneui/themed";
import { Linking, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

export function Faq() {
    return (
        <ScrollView>
            <View style={{flex: 1, width: '100%'}}>
                <Card containerStyle={{borderRadius: 20, marginBottom: 50}}>
                    <View>
                        <Text style={styles.label}>Quando será feita a instalação?</Text>
                    </View>
                    <View>
                        <Text style={styles.value}>A instalação será marcada após a entrega dos equipamentos no seu local.</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>Quando começo a gerar a minha própria energia?</Text>
                    </View>
                    <View>
                        <Text style={styles.value}>Logo após a instalação estar 100% concluída, faremos a solicitação da troca do relógio medidor, e então, assim que a concessionária local trocar o relógio, você poderá ligar seu sistema e começar a gerar sua própria energia.</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>Quais são todas as etapas do processo de entrega do sistema?</Text>
                    </View>
                    <View>
                        <Text 
                            style={styles.value}
                            onPress={() => Linking.openURL('https://bluesol.com.br/etapas-do-projeto')}
                        >
                            Pressione aqui e confira o vídeo disponível em https://bluesol.com.br/etapas-do-projeto explicando todas as etapas. Adicionalmente, você pode conferir cada etapa detalhadamente no menu "Status do Projeto".
                        </Text>
                    </View>
                </Card>
            </View>
        </ScrollView>
    )
}