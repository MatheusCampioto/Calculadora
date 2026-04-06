import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native';

export default function App(){
const [valor, setValor] = useState('');
const adicionar = (num) => setValor (valor+num);
const calcular = () => setValor (eval(valor).toString());
const limpar = () => setValor('');

return(
  <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
  <Text style={{fontSize:30, marginBottom:10}}>{valor}</Text>

  <View style={{flexDirection:'row'}}>
    <TouchableOpacity style={{margin:5, backgroundColor:'#CCC', padding:20}} onPress={() => adicionar('1')}>
  <Text style={{fontSize:25}}>1</Text>
  </TouchableOpacity>
    <TouchableOpacity style={{margin:5, backgroundColor:'#CCC', padding:20}} onPress={() => adicionar('2')}>
  <Text style={{fontSize:25}}>2</Text>
  </TouchableOpacity>
    <TouchableOpacity style={{margin:5, backgroundColor:'#CCC', padding:20}} onPress={() => adicionar('3')}>
  <Text style={{fontSize:25}}>3</Text>
  </TouchableOpacity>
  </View>

    <View style={{flexDirection:'row'}}>
    <TouchableOpacity style={{margin:5, backgroundColor:'#CCC', padding:20}} onPress={() => adicionar('4')}>
  <Text style={{fontSize:25}}>4</Text>
  </TouchableOpacity>
    <TouchableOpacity style={{margin:5, backgroundColor:'#CCC', padding:20}} onPress={() => adicionar('5')}>
  <Text style={{fontSize:25}}>5</Text>
  </TouchableOpacity>
    <TouchableOpacity style={{margin:5, backgroundColor:'#CCC', padding:20}} onPress={() => adicionar('6')}>
  <Text style={{fontSize:25}}>6</Text>
  </TouchableOpacity>
  </View>

    <View style={{flexDirection:'row'}}>
    <TouchableOpacity style={{margin:5, backgroundColor:'#CCC', padding:20}} onPress={() => adicionar('7')}>
  <Text style={{fontSize:25}}>7</Text>
  </TouchableOpacity>
    <TouchableOpacity style={{margin:5, backgroundColor:'#CCC', padding:20}} onPress={() => adicionar('8')}>
  <Text style={{fontSize:25}}>8</Text>
  </TouchableOpacity>
    <TouchableOpacity style={{margin:5, backgroundColor:'#CCC', padding:20}} onPress={() => adicionar('9')}>
  <Text style={{fontSize:25}}>9</Text>
  </TouchableOpacity>
  </View>

    <View style={{flexDirection:'row'}}>
    <TouchableOpacity style={{margin:5, backgroundColor:'#CCC', padding:20}} onPress={() => adicionar('0')}>
  <Text style={{fontSize:25}}>0</Text>
  </TouchableOpacity>
    <TouchableOpacity style={{margin:5, backgroundColor:'#CCC', padding:20}} onPress= {calcular}>
  <Text style={{fontSize:25}}>=</Text>
  </TouchableOpacity>
    <TouchableOpacity style={{margin:5, backgroundColor:'#CCC', padding:20}} onPress={limpar}>
  <Text style={{fontSize:25}}>C</Text>
  </TouchableOpacity>
  </View>

      <View style={{flexDirection:'row'}}>
    <TouchableOpacity style={{margin:5, backgroundColor:'#CCC', padding:20}} onPress={() => adicionar('+')}>
  <Text style={{fontSize:25}}>+</Text>
  </TouchableOpacity>
    <TouchableOpacity style={{margin:5, backgroundColor:'#CCC', padding:20}} onPress={() => adicionar('-')}>
  <Text style={{fontSize:25}}>-</Text>
  </TouchableOpacity>
    <TouchableOpacity style={{margin:5, backgroundColor:'#CCC', padding:20}} onPress={() => adicionar('*')}>
  <Text style={{fontSize:25}}>*</Text>
  </TouchableOpacity>
      <TouchableOpacity style={{margin:5, backgroundColor:'#CCC', padding:20}} onPress={() => adicionar('/')}>
  <Text style={{fontSize:25}}>/</Text>
  </TouchableOpacity>
  </View>
  </View>
)



}
