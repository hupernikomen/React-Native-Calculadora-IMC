import React from 'React'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

class Botao extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}

    this.styles = StyleSheet.create({
      textButton: {
        fontSize: 22,
        color: '#fff'
      },

      button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 60,
        backgroundColor: 'red',
        margin: 30
      },

      areaButton: {
        justifyContent: 'center',
        alignItems: 'center',
      }

    })
  }

  render() {
    return (
      <View style={this.styles.areaButton}>
        <TouchableOpacity style={this.styles.button} onPress={this.props.onPress}>
          <Text style={this.styles.textButton}>{this.props.nome}</Text>
        </TouchableOpacity >
      </View>

    )
  }
}

export default Botao