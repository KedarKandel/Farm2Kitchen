import { useRouter } from "expo-router";
import { View, TouchableOpacity, Text, Image } from "react-native";
import header from "@/assets/images/header.png"; // Adjust the path as necessary
type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center w-full h-full bg-white px-4">
      <Image
        source={header}
        className="w-full h-96 mb-8 rounded-lg"
        resizeMode="cover"
      />
      <Text className="text-3xl text-[#08CB00] font-bold mb-4">
        Welcome to Farm2Kitchen
      </Text>
      <Text className="text-xl text-green-600 mb-8">
        Your one-stop solution for fresh produce
      </Text>
      <TouchableOpacity
        onPress={() => router.push("/register")}
        className=" w-full bg-[#08CB00] rounded-lg p-4"
      >
        <Text className="text-white text-xl text-center font-semibold">
          Get Started
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text className="text-[#08CB00] text-center text-xl mt-4">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
