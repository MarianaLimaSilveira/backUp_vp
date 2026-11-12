import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BarraNavegacao() {
  return (
    <View style={estilos.container}>
      <TouchableOpacity style={estilos.botaoNav} onPress={() => router.push('/trilha')}>
        <Text style={estilos.textoBotao}>📚 Trilha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.botaoNav}>
        <Text style={estilos.textoBotao}>👤 Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    elevation: 10,
  },
  botaoNav: {
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: 'bold',
  },
});
