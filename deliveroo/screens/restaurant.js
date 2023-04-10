import { View, Button, Text, Image, SafeAreaView, StyleSheet, StatusBar, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { useLayoutEffect, useState, useEffect } from "react";
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, MapPinIcon, AdjustmentsHorizontalIcon, ArrowLeftIcon, StarIcon } from "react-native-heroicons/solid";
import client from "../sanity";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { ChevronRightIcon, QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";
export default function RestaurantScreen() {
  const {
    params: { id, imgUrl, title, short_description, rating, genre, address, dishes, long, lati },
  } = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRestaurant({ id, imgUrl, title, short_description, rating, genre, address, dishes }));
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image source={{ uri: urlFor(imgUrl).url() }} className="w-full h-60 bg-gray-300 p-4" />
          <TouchableOpacity onPress={navigation.goBack} className="absolute top-12 left-5 p-2 bg-gray-100 rounded-full">
            <ArrowLeftIcon color="#00ccbb" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon size={30} color="#00CCBB" opacity={0.5} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> . {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <MapPinIcon size={30} color="gray" opacity={0.5} />
                <Text className="text-xs text-gray-500">Nearby . {address}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.5} size={20}></QuestionMarkCircleIcon>
            <Text className="pt-2 flex-1 text-md font-bold">Having a food allergy?</Text>
            <ChevronRightIcon color="#00ccbb" />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {/* DishesRow */}
          {dishes.map((dish) => (
            <DishRow key={dish._id} id={dish._id} name={dish.name} description={dish.short_description} price={dish.price} image={dish.image}></DishRow>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
