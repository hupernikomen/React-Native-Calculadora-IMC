import React, { Component } from 'React'
import Botao from './components/Botao'
import Header from './components/Header'
import Info from './components/Info'
import Styles from './Styles'
import { View, TextInput } from 'react-native'

export default class App extends Component {
s
  constructor(props) {
    super(props)
    this.state = {
      massa: '',
      altura: '',
      alerta: '',
      resultado: parseFloat('0'),
      status: ''
    }

    this.calculaResultado = this.calculaResultado.bind(this)

  }

  calculaResultado() {
    let state = this.state

    if (state.massa != '' && state.altura != '') {
      state.alerta = 'Resultado'
      state.resultado = this.state.massa / Math.pow(this.state.altura, 2)

    } else {
      state.alerta = 'Erro:'
      state.resultado = 'Ops, precisamos saber seu peso e altura...'

    }

    if (state.resultado > 18.5 && state.resultado < 24.9) {
      state.status = 'Você está com peso Normal'
    } else if (state.resultado > 25 && state.resultado < 29.9) {
      state.status = 'Você está acima do peso'
    } else if (state.resultado > 30 && state.resultado < 34.9) {
      state.status = 'Cuidado, Obesidade I'
    } else if (state.resultado > 35 && state.resultado < 39.9) {
      state.status = 'Cuidado, Obesidade II (Severa)'
    }
    this.setState(state)
  }

  render() {
    return (

      <View style={Styles.container}>

        <Header title='Calculadora IMC' />

        <View style={Styles.inputs}>
          <TextInput 
            style= { Styles.input }
            onChangeText={(massa) => this.setState({ massa })}
            placeholder='Massa / Peso'
            keyboardType='numeric' >
          </TextInput>

          <TextInput
            style= { Styles.input }
            onChangeText={(altura) => this.setState({ altura })}
            placeholder='Altura'
            keyboardType='numeric'>
          </TextInput>
        </View>

        <Botao nome='Calcular' onPress={this.calculaResultado} />

        <View style={Styles.info}>
          <Info alerta={this.state.alerta} />
          <Info resultado={this.state.resultado.toFixed(2)} />
          <Info status={this.state.status} />

        </View>

      </View>

    )
  }
}
