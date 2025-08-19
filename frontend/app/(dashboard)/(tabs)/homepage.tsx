import FarmerCard from "@/components/dashboard/Cards/FarmerCard";
import PostCard from "@/components/dashboard/Cards/PostCard";
import UserCard from "@/components/dashboard/Cards/UserCard";
import VegetableCard from "@/components/dashboard/Cards/VegetableCard";
import { activeUsers, posts, topFarmers, vegetableGroups } from "@/mockdata/mock";
import {  Text, ScrollView, FlatList } from "react-native";


export default function Homepage() {

  return (
    <ScrollView className="flex-1 bg-white px-4">
      {/* Welcome Banner */}
      <Text className="text-3xl font-bold my-4">Welcome, User!</Text>

      {/* Most Popular Vegetables */}
      <Text className="text-xl font-semibold mb-2">Popular Vegetables</Text>
      <FlatList
        horizontal
        data={vegetableGroups}
        renderItem={({ item }) => <VegetableCard {...item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        className="mb-6"
      />

      {/* Most Rated Farmers */}
      <Text className="text-xl font-semibold mb-2">Top Farmers</Text>
      <FlatList
        horizontal
        data={topFarmers}
        renderItem={({ item }) => <FarmerCard {...item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        className="mb-6"
      />

      {/* Most Active Personal Users */}
      <Text className="text-xl font-semibold mb-2">Active Users</Text>
      <FlatList
        horizontal
        data={activeUsers}
        renderItem={({ item }) => <UserCard {...item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        className="mb-6"
      />

      {/* Posts Feed */}
      <Text className="text-xl font-semibold mb-2">Activity Feed</Text>
      {posts?.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </ScrollView>
  );
}
