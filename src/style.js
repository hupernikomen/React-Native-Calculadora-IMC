import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    topo: {
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },

    inputs: {
        flexDirection: 'row',
    },

    input: {
        height: 70,
        borderColor: '#ccc',
        width: '50%',
        borderWidth: .5,
        fontSize: 20,
        padding: 20
    },

    calcular: {
        width: 200,
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
        padding: 20,
        backgroundColor: 'red',
        elevation: 3
    },

    botao: {
        margin: 30,
        alignItems: 'center',

    },

    resultado: {
        margin: 20,
        textAlign: 'center',
        fontSize: 22,

    }
})

export default styles