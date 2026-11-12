import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'Carregamento' }} />
      <Stack.Screen name="login" options={{ title: 'Login' }} />
      <Stack.Screen name="trilha" options={{ title: 'Trilha' }} />
      <Stack.Screen name="atividade" options={{ title: 'Atividade' }} />
    </Stack>
  );
}
