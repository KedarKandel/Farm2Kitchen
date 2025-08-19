import { View, Text, Image } from 'react-native'
import React from 'react'

export type FarmerCardProps = {
  id: string;
  name: string;
  rating: number;
  profilePic: string; // URL or local image
};



export default function FarmerCard({ name, rating, profilePic }: FarmerCardProps) {
  return (
    <View className="flex-row items-center m-2 p-2 border rounded-lg">
      <Image source={{ uri: profilePic }} className="w-12 h-12 rounded-full" />
      <View className="ml-4">
        <Text className="font-semibold">{name}</Text>
        <Text className="text-sm text-gray-500">Rating: {rating}</Text>
      </View>
    </View>
  );
}
