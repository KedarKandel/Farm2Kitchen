import { View, Text, Image } from 'react-native'
import React from 'react'

export type PostCardProps = {
  id: string;
  author: string;
  content: string;
  profilePic: string; // URL or local image
  comments: number;
};



export default function PostCard({id, author, content, profilePic, comments }: PostCardProps) {
  return (
    <View className="p-4 m-2 border rounded-lg">
      <View className="flex-row items-center mb-2">
        <Image source={{ uri: profilePic }} className="w-10 h-10 rounded-full" />
        <Text className="ml-3 font-semibold">{author}</Text>
      </View>
      <Text className="text-gray-700 mb-2">{content}</Text>
      <Text className="text-gray-500 text-sm">{comments} Comments</Text>
      <Text>{id}</Text>
    </View>
  );
}


