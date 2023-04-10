import { View, Button, Text, Image, SafeAreaView, StyleSheet, StatusBar, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { useLayoutEffect, useState, useEffect, useMemo } from "react";
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, XCircleIcon, MapPinIcon, AdjustmentsHorizontalIcon, ArrowLeftIcon, StarIcon } from "react-native-heroicons/solid";
import client, { urlFor } from "../sanity";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import restaurantSlice, { selectRestaurant } from "../features/restaurantSlice";
import { removeFromBasket, selectBasketItems, selectBasketTotal } from "../features/basketSlice";

export default function BasketScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);

  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  const basketTotal = useSelector(selectBasketTotal);
  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView style={styles.container}>
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-{#00CCBB} bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">{restaurant.title}</Text>
          </View>

          <TouchableOpacity onPress={navigation.goBack} className="rounded-full bg-gray-100 absolute top-3 right-5">
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <Text className="flex-1">Deliver in 50-75 min</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]">Changes</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="divide-y divide-gray-200">
        {Object.entries(groupedItemsInBasket).map(([key, items]) => (
          <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
            <Text className="text-[#00CCBB]">{items.length} x</Text>
            <Image source={{ uri: urlFor(items[0]?.image).url() }} className="h-12 w-12 rounded-full" />
            <Text className="flex-1">{items[0]?.name}</Text>
            <Text className="text-gray-600">{`$ ${items[0]?.price}`}</Text>
            <TouchableOpacity>
              <Text className="text-[#00CCBB] text-xs " onPress={() => dispatch(removeFromBasket({ id: key }))}>
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View className="p-5 bg-white mt-5 space-y-4">
        <View className="flex-row justify-between">
          <Text className="text-gray-400">Subtotal</Text>
          <Text className="text-gray-600">{`$ ${basketTotal}`}</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-gray-400">Delivery Fee</Text>
          <Text className="text-gray-600">${5.99}</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="font-extrabold">Order Total</Text>
          <Text className="font-extrabold">${basketTotal + 5.99}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Preparing")} className="rounded-lg bg-[#00ccbb] p-4">
          <Text className="text-center text-white text-lg font-bold">Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "bg-gray-100",
    marginTop: StatusBar.currentHeight,
  },
});
