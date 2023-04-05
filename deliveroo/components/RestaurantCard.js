import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, Button, Text, Image, SafeAreaView, StyleSheet, StatusBar, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { MapPinIcon, ArrowRightIcon, UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon, StarIcon, MapIcon } from "react-native-heroicons/outline";
export default function RestaurantCard({ id, imgUrl, title, short_description, rating, genre, address, dishes, long, lati }) {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image source={{ uri: imgUrl }} className="w-64 h-36 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="text-large font-bold pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
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
