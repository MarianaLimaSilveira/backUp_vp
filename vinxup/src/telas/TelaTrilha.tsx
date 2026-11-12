import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import BarraNavegacao from '../componentes/BarraNavegacao';
import CabecalhoLontra from '../componentes/CabecalhoLontra';

export default function TelaTrilha() {
  return (
    <View style={estilos.container}>
      <CabecalhoLontra />

      <ScrollView contentContainerStyle={estilos.scroll}>
        <Text style={estilos.titulo}>Sua Trilha de Conhecimento</Text>

        <TouchableOpacity
          style={estilos.cartaoAtividade}
          onPress={() => router.push('/atividade')}
        >
          <Text style={estilos.nomeAtividade}>Módulo 1: Introdução</Text>
          <Text style={estilos.status}>Clique para iniciar ➔</Text>
        </TouchableOpacity>

        <View style={[estilos.cartaoAtividade, estilos.bloqueado]}>
          <Text style={estilos.nomeAtividade}>Módulo 2: Desafios</Text>
          <Text style={estilos.status}>Bloqueado</Text>
        </View>
      </ScrollView>

      <BarraNavegacao />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6E8F7',
  },
  scroll: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 100,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  cartaoAtividade: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },
  bloqueado: {
    opacity: 0.6,
  },
  nomeAtividade: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  status: {
    fontSize: 14,
    color: '#4A90E2',
    marginTop: 5,
  },
});
