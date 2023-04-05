import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, Button, Text, Image, SafeAreaView, StyleSheet, StatusBar, TextInput, ScrollView } from "react-native";
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }} horizontal showsHorizontalScrollIndicator={false}>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title4" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title5" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title6" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title7" />
    </ScrollView>
  );
}
