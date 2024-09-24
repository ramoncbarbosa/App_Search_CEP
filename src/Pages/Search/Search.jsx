import React, {useState, useEffect, useRef} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Modal, Alert, Keyboard } from "react-native";
import { api } from "../../api/api";
import { useNavigation } from "@react-navigation/native";

export function Search(){
  const [cep, setCep] = useState('');
  const [cepUser, setCepUser] = useState(null);
  const inputRef = useRef(null);

  const navigation = useNavigation();
  function retornarHome(){
    navigation.navigate('Home');
  }

  async function searchCEP(){
    if(cep === ''){
      alert('Digite um cep valdio')
      setCep('');
      inputRef.current.focus();
      return;
    }
    try{
      const response = await api.get(`/${cep}/json`);
      setCepUser(response.data);
      Keyboard.dismiss();
      

    } catch(error){
      console.log('ERROR', + error);
    }
  }

  return(
    <SafeAreaView style={styles.container} >
        <View style={styles.containerTexto} >
          <Text style={styles.textoContainer}>Digite o Seu CEP: </Text>
          <TextInput
            placeholder="Ex: 01001000"
            keyboardType="numeric"
            value={cep}
            onChangeText={(textoInput) => setCep(textoInput)}
            ref={inputRef}
            style={styles.inputContainer}
            maxLength={8}
          />
          <View style={styles.containerBotoes}>
            <TouchableOpacity style={styles.searchBtn} onPress={searchCEP}>
              <Text style={styles.textoSearch}>
                Buscar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={retornarHome} style={styles.returnBtn}> 
              <Text style={styles.textoSearch}>
                Voltar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {cepUser && (
          <View style={styles.containerResultado}>
            <Text style={styles.textoContainerResultado}>CEP: {cepUser.cep}</Text>
            <Text style={styles.textoContainerResultado}>Estado: {cepUser.uf}</Text>
            <Text style={styles.textoContainerResultado}>Cidade: {cepUser.localidade	}</Text>
            <Text style={styles.textoContainerResultado}>Bairro: {cepUser.bairro	}</Text>
            <Text style={styles.textoContainerResultado}>Logradouro: {cepUser.logradouro}</Text>
          </View>
        )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#00CED1',
    alignItems: 'center',
    paddingTop: 30,
  },
  containerTexto:{
    backgroundColor: '#f9f9f9',
    width: 340,
    height: 220,
    borderRadius: 8,
    padding: 30,
  },
  textoContainer:{
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 15,
  },
  inputContainer:{
    width: '80%',
    height: 40,
    borderRadius: 4,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    fontSize: 18,
    paddingLeft: 20
  },
  containerBotoes:{
    paddingTop: 30,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  searchBtn: {
    backgroundColor: '#105f96',
    width: 80,
    height: 30,
    borderRadius: 4,
  },
  returnBtn: {
    backgroundColor: '#ff6c37',
    width: 80,
    height: 30,
    borderRadius: 4,
  },
  textoSearch: {
    fontSize: 16,
    padding: 5,
    color: '#ccc',
    textAlign: 'center'
  },
  containerResultado: {
    marginTop: 30,
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 8,
    width: 340,
  },
  textoContainerResultado: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
})