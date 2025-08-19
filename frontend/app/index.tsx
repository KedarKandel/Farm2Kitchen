import Header from "@/components/landing/Header";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function Landing() {
  const router = useRouter();

  return (
    <View className="flex-1 w-full h-full bg-white justify-center items-center">
      <Header />
    
    </View>
  );
}
