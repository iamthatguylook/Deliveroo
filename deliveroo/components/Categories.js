import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Button, Text, Image, SafeAreaView, StyleSheet, StatusBar, TextInput, ScrollView } from "react-native";
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";
import CategoryCard from "./CategoryCard";
import client from "../sanity";
import { urlFor } from "../sanity";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type=="category"]`).then((data) => {
      setCategories(data);
    });
  }, []);
  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }} horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((eachCategory) => (
        <CategoryCard key={eachCategory._id} imgUrl={eachCategory.image} title={eachCategory.name} />
      ))}

      {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title4" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title5" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title6" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title7" /> */}
    </ScrollView>
  );
}
