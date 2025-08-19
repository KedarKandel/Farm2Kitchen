import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function DashboardTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#08CB00" },
        headerTintColor: "white",
        tabBarActiveTintColor: "#08CB00",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { height: 70, paddingBottom: 10 },
      }}
    >
      <Tabs.Screen
        name="homepage"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
