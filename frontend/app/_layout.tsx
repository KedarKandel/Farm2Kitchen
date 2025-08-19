import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: "white" }, // screen background
        headerStyle: { backgroundColor: "#08CB00" }, // header bg
        headerTintColor: "white", // header text/buttons
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: true, title: "Farm2Kitchen" }}
      />
      <Stack.Screen
        name="(auth)/register"
        options={{ headerShown: true, title: "Register" }}
      />
      <Stack.Screen
        name="(auth)/login"
        options={{ headerShown: true, title: "Login" }}
      />
      <Stack.Screen
        name="(dashboard)/(tabs)"
        options={{ headerShown: false }} // Tabs will handle headers
      />
      <Stack.Screen
        name="(dashboard)/edit-profile"
        options={{ headerShown: true, title: "Edit Profile" }}
      />
      <Stack.Screen
        name="(dashboard)/change-password"
        options={{ headerShown: true, title: "Change Password" }}
      />
    </Stack>
  );
}
