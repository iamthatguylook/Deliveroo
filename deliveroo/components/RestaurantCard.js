import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StarIcon, MapIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";
import "react-native-url-polyfill/auto";

export default function RestaurantCard({ id, imgUrl, title, short_description, rating, genre, address, dishes, long, lati }) {
  const NavigationRestaurant = useNavigation();
  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={() => {
        NavigationRestaurant.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          short_description,
          rating,
          genre,
          address,
          dishes,
          long,
          lati,
        });
      }}
    >
      <Image source={{ uri: urlFor(imgUrl).url() }} className="w-64 h-36 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="text-large font-bold pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="#00CCBB" opacity={0.5} size={22} />
          <Text className="text-xs text-[#00CCBB] ">
            <Text className="text-[#00CCBB] ">{rating}</Text> . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapIcon size={22} color="gray" opacity={0.4} />
          <Text className="text-xs text-gray-500"> Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
