import React from 'React'
import { View, Text } from 'react-native'
import styles from './style'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={ styles.header }>
                
                <Text style={ styles.title }>{ this.props.title }</Text>
            </View>
        )
    }
}

export default Header