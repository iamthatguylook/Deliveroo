import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, Button, Text, Image, SafeAreaView, StyleSheet, StatusBar, TextInput, ScrollView } from "react-native";
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";
import { Svg, Path } from "react-native-svg";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
export default function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1">
      {/* Header */}
      <View className="bg-white pt-5">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image source={{ uri: "https://links.papareact.com/wru" }} className="h-7 w-7 bg-gray-300 p-4 rounded-full" />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00ccbb" />
            </Text>
          </View>

          <UserIcon size={35} color="#00ccbb" />
        </View>

        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
            {/* Search */}
            <MagnifyingGlassIcon size={20} color="#00ccbb" />
            <TextInput placeholder="Restaurants and Cuisines" keyboardType="default" />
          </View>
          <AdjustmentsHorizontalIcon size={20} color="#00ccbb" />
        </View>
      </View>
      {/* Body */}

      {/* Catagories */}
      <ScrollView className="mb-1">
        <Categories />
        {/* Featured Rows */}

        <FeaturedRow id="1" title="Featured" description="Paid placements from our partners" featuredCategory="featured" />
        <FeaturedRow id="2" title="Tasty discounts" description="Everyone been enjoying these juicy discounts" featuredCategory="discounts" />
        <FeaturedRow id="3" title="Offers Near You" description="Why not support your local restaurants tonight" featuredCategory="offers" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight,
  },
});
