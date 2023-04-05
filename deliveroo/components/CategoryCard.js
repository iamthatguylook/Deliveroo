import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, Button, Text, Image, SafeAreaView, StyleSheet, StatusBar, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";

export default function CategoryCard({ imgUrl, title }) {
  return (
    <TouchableOpacity className="bg-slate-400 relative mr-2">
      <Image source={{ uri: imgUrl }} className="w-20 h-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
}
