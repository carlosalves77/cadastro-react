import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ColorPropType} from 'react-native';

export default function App() {

  const [nome, SetNome] = useState('');
  const [email, SetEmail] = useState('');
  const [senha, SetSenha] = useState('');

  const cadastro =() => {
    alert(senha)
    alert(email)
    alert(nome)
  }


  return (
    <View style={styles.container}>
      <StatusBar hidden />

      
      <Image style={{width:300, height:200}} source={require('./assets/react-native.png')}/>
     

      <TextInput placeholder='Digite seu nome' style={styles.textInput} onChangeText={text=>SetNome(text)}/>
      <TextInput placeholder='Digite seu e-mail' style={styles.textInput} onChangeText={text=>SetEmail(text)}/>
      <TextInput secureTextEntry={true} placeholder='Digite sua senha' style={styles.textInput} onChangeText={text=>SetSenha(text)}/>

      <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
        <Text style={{color:'white'}}>CADASTRAR!</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29c6e2',
    
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },

textInput: {
  width:'100%',
  height:40,
  backgroundColor:'white',
  borderRadius:20,
  paddingLeft:10,
  marginBottom: 10
},

btnCadastro: {
  width:'50%',
  height:40,
  backgroundColor:'#83decd',
  borderRadius:20,
  alignItems:'center',
  justifyContent: 'center'

}
 
});
