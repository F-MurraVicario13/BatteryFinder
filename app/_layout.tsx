import { Redirect, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}

// Redirect to signup by default
export function Index() {
  return <Redirect href="/(auth)/signup" />;
}
