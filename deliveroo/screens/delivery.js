import { View, Button, Text, Image, SafeAreaView, StyleSheet, StatusBar, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { useLayoutEffect, useState, useEffect } from "react";
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, MapPinIcon, AdjustmentsHorizontalIcon, ArrowLeftIcon, StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { XMarkIcon } from "react-native-heroicons/outline";
import MapView, { Marker } from "react-native-maps";

export default function DeliveryScreen() {
  //   const navigation = useNavigation();
  //   useEffect(() => {
  //     setTimeout(() => {
  //       navigation.navigate("Delivery");
  //     }, 3000);
  //   });
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="bg-[#00ccbb] flex-1 ">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center pt-8 px-2">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image source={{ uri: "https://links.papareact.com/fls" }} className="h-20 w-20" />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true}></Progress.Bar>
          <Text className="mt-3 text-gray-500">Your order at {restaurant.title} is being prepared</Text>
        </View>
      </SafeAreaView>
      {/* <MapView region={{ latitude: restaurant.lat, longitude: restaurant.long, latitudeDelta: 0.005, longitudeDelta: 0.005 }} className="flex-1 h-400 w-400 -mt-10 z-0" mapType="mutedStandard"></MapView> */}
      <MapView region={{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.005, longitudeDelta: 0.005 }} className="flex-1 h-400 w-400 -mt-10 z-0" mapType="mutedStandard">
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title={restaurant.title} description={restaurant.short_description} identifier="origin" pinColor="#00CCBB" />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image source={{ uri: "https://links.papareact.com/wru" }} className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5" />
        <View className="flex-1">
          <Text className="text-lg">Cobratate</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  map: {
    height: 400,
    width: 400,
  },
});
