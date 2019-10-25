import { StyleSheet } from 'react-native'

const style = StyleSheet.create({

    container: {
        flex: 1,
    },

    inputs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
    },

    input: {
        fontSize: 22,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '50%',
    }
})

export default style