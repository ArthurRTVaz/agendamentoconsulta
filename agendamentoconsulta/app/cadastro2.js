import { Link } from "expo-router";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

export default function Index(){
    return(
        <View style={styles.container}>

            <Image style={styles.imglogo} source={require('../src/logo.png')} />

            <Text style={styles.titulo}>Agora mais alguns dados sobre você:</Text>

            <View style={styles.containerMeio}>
                <Text style={styles.campo}>CEP</Text>
                <TextInput style={styles.input} placeholder="Insira seu CEP" placeholderTextColor="#A9A9A9" />

                <Text style={styles.campo}>Endereço</Text>
                <TextInput style={styles.input} placeholder="Insira seu endereço" placeholderTextColor="#A9A9A9" />

                <Text style={styles.campo}>Número</Text>
                <TextInput style={styles.input} placeholder="Insira seu número" placeholderTextColor="#A9A9A9" />

                <Text style={styles.campo}>Complemento</Text>
                <TextInput style={styles.input} placeholder="Insira seu complemento" placeholderTextColor="#A9A9A9" />

                <Text style={styles.campo}>Telefone</Text>
                <TextInput style={styles.input} placeholder="(00)00000-0000" placeholderTextColor="#A9A9A9" />

                <Link href="/cadastro1" style={styles.botaoVoltar}>Voltar</Link>
                <Link href="/cadastro3" style={styles.botao}>Avançar</Link>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    imglogo: {
        marginTop: 20,
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#6B6E71',
        marginBottom: 20,
        textAlign: 'center'
    },
    containerMeio: {
        width: '100%',
        alignItems: 'center',
    },
    campo: {
        color: '#0B3B60',
        alignSelf: 'flex-start',
        marginLeft: 40,
        marginBottom: 5,
        fontSize: 16,
    },
    input: {
        width: 311,
        height: 48,
        backgroundColor: '#E7EBEF',
        borderRadius: 8,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 24,
    },
    botao: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white',
        backgroundColor: '#0B3B60',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        height: '9%',
    },
    botaoVoltar: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white',
        backgroundColor: '#90989F',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        height: '9%',
    },
})
