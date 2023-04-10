import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import { View, Button, Text, Image, SafeAreaView, StyleSheet, StatusBar, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { ArrowRightIcon, UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import client from "../sanity";
export default function FeaturedRow({ id, title, description, featuredCategory }) {
  const [restaurants, setRestaurants] = useState([]);
  //using grouk
  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured" && _id ==$id]{
   ...,
   restaurants[]->{
     ...,
     dishes[]->,
     type->{
       name     
      }
   },
 }[0]`,
        { id }
      )
      .then((data) => setRestaurants(data?.restaurants));
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row item-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15 }} showsHorizontalScrollIndicator={false} className="pt-4">
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            short_description={restaurant.short_description}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lati={restaurant.lat}
          />
        ))}
        {/* <RestaurantCard id={123} imgUrl="https://links.papareact.com/gn7" title="yo sushi" short_description="test desciptions" rating={4.5} genre="Japanese" address="123 main street" dishes={[]} long={1234445} lati={244555} />
        <RestaurantCard id={123} imgUrl="https://links.papareact.com/gn7" title="yo sushi" short_description="test desciptions" rating={4.5} genre="Japanese" address="123 main street" dishes={[]} long={1234445} lati={244555} />
        <RestaurantCard id={123} imgUrl="https://links.papareact.com/gn7" title="yo sushi" short_description="test desciptions" rating={4.5} genre="Japanese" address="123 main street" dishes={[]} long={1234445} lati={244555} />
        <RestaurantCard id={123} imgUrl="https://links.papareact.com/gn7" title="yo sushi" short_description="test desciptions" rating={4.5} genre="Japanese" address="123 main street" dishes={[]} long={1234445} lati={244555} />
        <RestaurantCard id={123} imgUrl="https://links.papareact.com/gn7" title="yo sushi" short_description="test desciptions" rating={4.5} genre="Japanese" address="123 main street" dishes={[]} long={1234445} lati={244555} /> */}
      </ScrollView>
    </View>
  );
}
