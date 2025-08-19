import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

const Profile = () => {
  const router = useRouter();

  // Mock user data
  const user = {
    name: "John Doe",
    accountType: "Personal User",
    email: "john@example.com",
    phone: "+358 123456789",
    avatar: "https://i.pravatar.cc/150?img=3",
    posts: 12,
    followers: 34,
    following: 20,
  };

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="items-center mt-8 mb-6">
        <Image
          source={{ uri: user.avatar }}
          className="w-24 h-24 rounded-full mb-2"
        />
        <Text className="text-2xl font-bold">{user.name}</Text>
        <Text className="text-gray-500">{user.accountType}</Text>
      </View>

      {/* User Contact Info */}
      <View className="px-6 mb-6">
        <Text className="text-gray-700 mb-1">Email</Text>
        <Text className="text-lg mb-3">{user.email}</Text>
        <Text className="text-gray-700 mb-1">Phone</Text>
        <Text className="text-lg">{user.phone}</Text>
      </View>

      {/* Stats */}
      <View className="flex-row justify-around mb-6">
        <View className="items-center">
          <Text className="font-bold text-lg">{user.posts}</Text>
          <Text className="text-gray-500">Posts</Text>
        </View>
        <View className="items-center">
          <Text className="font-bold text-lg">{user.followers}</Text>
          <Text className="text-gray-500">Followers</Text>
        </View>
        <View className="items-center">
          <Text className="font-bold text-lg">{user.following}</Text>
          <Text className="text-gray-500">Following</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View className="px-6 mb-6">
        <TouchableOpacity
          className="bg-green-500 p-4 rounded-lg mb-3"
          onPress={() => router.push("/edit-profile")}
        >
          <Text className="text-white text-center font-semibold">Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-gray-200 p-4 rounded-lg mb-3"
          onPress={() => router.push("/change-password")}
        >
          <Text className="text-center font-semibold">Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-red-500 p-4 rounded-lg"
          onPress={() => router.push("/login")}
        >
          <Text className="text-white text-center font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Activity / Posts (optional) */}
      <View className="px-6 mb-8">
        <Text className="text-xl font-semibold mb-3">Recent Posts</Text>
        {/* Map through user posts */}
        <View className="bg-gray-100 p-4 rounded-lg mb-3">
          <Text className="text-gray-700">How to grow tomatoes at home?</Text>
        </View>
        <View className="bg-gray-100 p-4 rounded-lg mb-3">
          <Text className="text-gray-700">My experience buying fresh carrots</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
