import { View, Button, Text, Image, SafeAreaView, StyleSheet, StatusBar, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { useLayoutEffect, useState, useEffect } from "react";
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, MapPinIcon, AdjustmentsHorizontalIcon, ArrowLeftIcon, StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
export default function PreparingOrderScreen() {
  //   const navigation = useNavigation();
  //   useEffect(() => {
  //     setTimeout(() => {
  //       navigation.navigate("Delivery");
  //     }, 3000);
  //   });
  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center">
      <Animatable.Image source={require("../assets/deliveroo-gif.gif")} animation="slideInUp" iterationCount={1} className="h-96 w-96"></Animatable.Image>
      <Animatable.Text animation="slideInUp" iterationCount={1} className="text-lg my-10 text-white font-bold text-center">
        Waiting for Restaurant to accept your order
      </Animatable.Text>
      <Progress.Bar width={200} color="white" />
    </SafeAreaView>
  );
}
