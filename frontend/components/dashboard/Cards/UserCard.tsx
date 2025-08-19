import { View, Text, Image } from 'react-native'
import React from 'react'

export type ActiveUserCardProps = {
  id: string;
  name: string;
  profilePic: string; // URL or local image
};




export default function UserCard({ name, profilePic }: ActiveUserCardProps) {
  return (
    <View className="items-center m-2">
      <Image source={{ uri: profilePic }} className="w-12 h-12 rounded-full" />
      <Text className="text-center mt-1">{name}</Text>
    </View>
  );
}
