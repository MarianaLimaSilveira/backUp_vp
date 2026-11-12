import { router } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';

export default function TelaCarregamento() {
  useEffect(() => {
    const temporizador = setTimeout(() => {
      router.replace('/login');
    }, 3000);
    return () => clearTimeout(temporizador);
  }, []);

  return (
    <View style={estilos.container}>
      <ActivityIndicator size="large" color="#4A90E2" style={estilos.indicador} />
      <Image
        source={require('../../assets/VinxUp.png')}
        style={estilos.lontra}
        resizeMode="contain"
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6E8F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicador: {
    marginBottom: 20,
  },
  lontra: {
    width: 150,
    height: 150,
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
});
