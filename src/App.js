import React, {Component} from 'React'
import styles from './style' 
import {
  View,
  Text,
  TextInput,
  TouchableOpacity 
} from 'react-native'

export default class IMC extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      massa: '',
      altura: '',
      alerta: '',
      resultado: '',
      status: ''
    })

    this.calcular = this.calcular.bind(this)
    this.calculaResultado = this.calculaResultado.bind(this)
    
  }

  calculaResultado() {
    let state = this.state

    if (state.massa != '' && state.altura != '') {
      state.alerta = 'Resultado'
      state.resultado = this.state.massa / Math.pow( this.state.altura, 2 )
      
    } else {
      state.alerta = 'Erro:'
      state.resultado = 'Ops, precisamos saber seu peso e altura...'

    }

    if(state.resultado > 18.5 && state.resultado < 24.9) {
      state.status = 'Você está com peso Normal'
    } else if(state.resultado > 25 && state.resultado < 29.9) {
      state.status = 'Você está acima do peso'
    } else if(state.resultado > 30 && state.resultado < 34.9) {
      state.status = 'Cuidado, Obesidade I'
    } else if(state.resultado > 35 && state.resultado < 39.9) {
      state.status = 'Cuidado, Obesidade II (Severa)'
    }
    this.setState(state)
  }

  render() {
    return(
      <View>
        <View style={styles.topo}>
          <Text style={styles.title}>Calculadora IMC</Text>
        </View>

        <View style={styles.inputs}>
          <TextInput 
            style={styles.input} 
            onChangeText={(massa)=> this.setState({massa})} 
            placeholder='Massa / Peso' 
            keyboardType='numeric' >
          </TextInput>

          <TextInput 
            style={styles.input} 
            onChangeText={(altura)=> this.setState({altura})} 
            placeholder='Altura'
            keyboardType='numeric'>
          </TextInput>
        </View>

        <TouchableOpacity style={styles.botao} onPress={this.calculaResultado}>
          <Text style={styles.calcular}>Calcular</Text>
        </TouchableOpacity>

        <View style={styles.info}>
          {/* <source></source> */}
          <Text style={styles.alerta}>{this.state.alerta}</Text>
          <Text style={styles.resultado}>{this.state.resultado}</Text>
          <Text style={styles.status}>{this.state.status}</Text>

        </View>

      </View>
      
    )
  }
}
