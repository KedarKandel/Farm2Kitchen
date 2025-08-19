import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import authImage from "@/assets/images/auth.jpg";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", username, password);
    router.push("/homepage"); // Redirect after login
  };

  return (
    <View className="flex-1 w-full h-full bg-white justify-center items-center px-4">
      <Image
        source={authImage}
        className="w-full h-96 mb-8 rounded-lg"
        resizeMode="cover"
      />
      <Text className="text-3xl text-[#08CB00] font-bold mb-8">Login</Text>

      <TextInput
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
        className="w-full text-xl border border-gray-300 rounded-lg p-4 mb-6"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="w-full text-xl text-gray-600 border border-gray-300 rounded-lg p-4 mb-6"
      />

      <TouchableOpacity
        onPress={handleLogin}
        className="w-full text-[#08CB00] rounded-lg p-4 mb-4 bg-[#08CB00]"
      >
        <Text className="text-white text-center text-xl font-semibold">
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/register")}>
        <Text className="text-[#08CB00] text-xl">
          Don't have an account?{" "}
          <Text className=" text-green-700">Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
