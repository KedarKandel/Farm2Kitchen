import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import authImage from "@/assets/images/auth.jpg"; // Adjust path if needed

export default function Register() {
  const [accountType, setAccountType] = useState<"personal" | "farmer" | null>(
    null
  );
  const [phone, setPhone] = useState("");
  const router = useRouter();
  return (
    <View className="flex-1 w-full h-full bg-white justify-center  px-4">
      {/* Header Image */}
      <Image
        source={authImage}
        className="w-full h-72 mb-4 rounded-lg"
        resizeMode="contain"
      />

      {/* Title */}
      <Text className="text-3xl text-center font-bold mb-4">Register</Text>

      {/* Account Type Selection */}
      <Text className=" text-lg text-left text-gray-500 mb-4">
        Choose Account type:
      </Text>
      <View className="flex-row w-full justify-between mb-6">
        <TouchableOpacity
          onPress={() => setAccountType("personal")}
          className={`flex-1 mr-2 p-4 rounded-lg border ${
            accountType === "personal"
              ? "bg-green-500 border-green-500"
              : "border-gray-300"
          }`}
        >
          <Text
            className={`text-center font-semibold ${
              accountType === "personal" ? "text-white" : "text-gray-700"
            }`}
          >
            I'm a Personal User
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setAccountType("farmer")}
          className={`flex-1 ml-2 p-4 rounded-lg border ${
            accountType === "farmer"
              ? "bg-green-500 border-green-500"
              : "border-gray-300"
          }`}
        >
          <Text
            className={`text-center font-semibold ${
              accountType === "farmer" ? "text-white" : "text-gray-700"
            }`}
          >
            I'm a Farmer
          </Text>
        </TouchableOpacity>
      </View>

      {/* Form Fields */}
      <TextInput
        placeholder="First Name"
        className="w-full text-lg border border-gray-300 rounded-lg p-4 mb-4"
      />
      <TextInput
        placeholder="Last Name"
        className="w-full text-lg border border-gray-300 rounded-lg p-4 mb-4"
      />
      <TextInput
        placeholder="Email"
        className="w-full text-lg border border-gray-300 rounded-lg p-4 mb-6"
      />
      <TextInput
        placeholder="Phone Number"
        value={phone}
        keyboardType="phone-pad"
        onChangeText={(text) => {
          // keep only digits
          const numericText = text.replace(/[^0-9]/g, "");
          setPhone(numericText);
        }}
        maxLength={15} // optional limit
        className="w-full text-lg border border-gray-300 rounded-lg p-4 mb-6"
      />

      {/* Submit Button */}
      <TouchableOpacity
        onPress={() => {
          if (!accountType) {
            alert("Please select an account type");
            return;
          }
          // You could send accountType to your API here
          router.push("/(dashboard)/home");
        }}
        className="w-full bg-purple-500 rounded-lg p-4"
      >
        <Text className="text-white text-center font-semibold">Register</Text>
      </TouchableOpacity>
      {/* Navigation to Login */}
      <TouchableOpacity onPress={() => router.push("/login")} className="mt-4">
        <Text className="text-blue-500 text-center text-lg">
          Already have an account? <Text className="text-blue-700">Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
