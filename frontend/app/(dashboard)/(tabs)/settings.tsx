import React from 'react'
import { Button, Text, View } from 'react-native'
import { useRouter } from 'expo-router';

const Settings = () => {
  const router = useRouter();
  return (
    <View className="flex-1 w-full h-full bg-white justify-center items-center">
      <Text>AboutScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => router.push("/homepage")}
      />
       <Button
        title="Go to Profile"
        onPress={() => router.push("/profile")}
      />
        <Button
        title="Go to landing"
        onPress={() => router.push("/")}
      />
    </View>
  )
}
export default Settings;