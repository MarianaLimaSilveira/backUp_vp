import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TelaAtividade() {
  return (
    <View style={estilos.container}>
      <View style={estilos.cartao}>
        <Text style={estilos.titulo}>Módulo 1: Introdução</Text>
        <Text style={estilos.texto}>
          Bem-vindo à sua primeira atividade! Aqui você aprenderá os conceitos básicos.
          Leia o conteúdo com atenção e clique em concluir quando terminar.
        </Text>

        <TouchableOpacity style={estilos.botao} onPress={() => router.back()}>
          <Text style={estilos.textoBotao}>Concluir e Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6E8F7',
    padding: 20,
    justifyContent: 'center',
  },
  cartao: {
    backgroundColor: '#FFF',
    padding: 25,
    borderRadius: 20,
    elevation: 4,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  texto: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
