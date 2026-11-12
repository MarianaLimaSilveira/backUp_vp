import { Image, StyleSheet, View } from 'react-native';

export default function CabecalhoLontra() {
  return (
    <View style={estilos.container}>
      <Image
        source={require('../../assets/VinxUp.png')}
        style={estilos.imagem}
        resizeMode="contain"
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  imagem: {
    width: 120,
    height: 120,
  },
});
