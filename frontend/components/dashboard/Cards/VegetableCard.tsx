import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

type VegetableCardProps = {
  id: string;
  name: string;
  image: string;
  onPress?: () => void;
};


export default function VegetableCard({ name, image, onPress }: VegetableCardProps) {
  return (
    <TouchableOpacity onPress={onPress} className="items-center m-2">
      <Image source={{ uri: image }} className="w-20 h-20 rounded-lg" />
      <Text className="text-center mt-2 font-semibold">{name}</Text>
    </TouchableOpacity>
  );
}