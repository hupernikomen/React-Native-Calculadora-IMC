import React from 'React'
import { View, Text } from 'react-native'
import styles from './style'

class Info extends React.Component {

    render() {
        return (
            <View style={ styles.info }>
                <Text style={ styles.alerta } style={ styles.alerta }>{ this.props.alerta }</Text>
                <Text style={ styles.resultado } style={ styles.resultado }>{ this.props.resultado }</Text>
                <Text style={ styles.status } style={ styles.status }>{ this.props.status }</Text>

            </View>
        )
    }
}

export default Info