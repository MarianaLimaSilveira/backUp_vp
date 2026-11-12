import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import CabecalhoLontra from '../componentes/CabecalhoLontra';

export default function TelaLogin() {
  function aoEntrar() {
    router.replace('/trilha');
  }

  return (
    <View style={estilos.container}>
      <CabecalhoLontra />

      <View style={estilos.cartao}>
        <Text style={estilos.titulo}>Bem-vindo(a)!</Text>

        <TextInput
          style={estilos.entrada}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput style={estilos.entrada} placeholder="Senha" secureTextEntry />

        <TouchableOpacity style={estilos.botao} onPress={aoEntrar}>
          <Text style={estilos.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6E8F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartao: {
    backgroundColor: '#FFF',
    width: '85%',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  entrada: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  botao: {
    backgroundColor: '#4A90E2',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
