import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { View, Button, Text, Image, SafeAreaView, StyleSheet, StatusBar, TextInput, ScrollView } from "react-native";
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";
import { Svg, Path } from "react-native-svg";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import client from "../sanity";
export default function HomeScreen() {
  const navigation = useNavigation();

  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured"]{
  ...,
  restaurants[]->{
    ...,
    dishes[]->,
    type->{
      name
    }
  },
}`
      )
      .then((data) => {
        setFeaturedCategories(data);
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
        {featuredCategories?.map((eachCategory) => (
          <FeaturedRow key={eachCategory._id} id={eachCategory._id} title={eachCategory.name} description={eachCategory.short_description} />
        ))}
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
