import { Link } from "expo-router";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

export default function Index(){
    return(
        <View style={styles.container}>

            <Image style={styles.imglogo} source={require('../src/logo.png')} />

            <Text style={styles.titulo}>Insira alguns dados básicos:</Text>

            <View style={styles.containerMeio}>
                <Text style={styles.campo}>Nome</Text>
                <TextInput style={styles.input} placeholder="Insira seu nome completo" placeholderTextColor="#A9A9A9" />

                <Text style={styles.campo}>E-mail</Text>
                <TextInput style={styles.input} placeholder="Insira seu endereço de email" placeholderTextColor="#A9A9A9" />

                <Text style={styles.campo}>Senha</Text>
                <TextInput style={styles.input} placeholder="Insira sua senha" placeholderTextColor="#A9A9A9" secureTextEntry={true} />

                <Text style={styles.campo}>Repita a senha</Text>
                <TextInput style={styles.input} placeholder="Insira sua senha" placeholderTextColor="#A9A9A9" secureTextEntry={true} />

                <Link href="/" style={styles.botaoVoltar}>Voltar</Link>
                <Link href="/cadastro2" style={styles.botao}>Avançar</Link>
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
        marginBottom: 20,
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#6B6E71',
        marginBottom: 20,
    },
    containerMeio: {
        width: '100%',
        alignItems: 'center',
        marginTop: 40,
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
    },
})
