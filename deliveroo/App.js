import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home";
import RestaurantScreen from "./screens/restaurant";
import BasketScreen from "./screens/basket";
import PreparingOrderScreen from "./screens/preparing";
import { Provider } from "react-redux";
import { store } from "./store";

const StackNavigator = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <StackNavigator.Navigator>
            <StackNavigator.Screen name="Home" component={HomeScreen}></StackNavigator.Screen>
            <StackNavigator.Screen name="Restaurant" component={RestaurantScreen}></StackNavigator.Screen>
            <StackNavigator.Screen name="Basket" component={BasketScreen} options={{ presentation: "modal", headerShown: false }}></StackNavigator.Screen>
            <StackNavigator.Screen name="Preparing" component={PreparingOrderScreen} options={{ presentation: "fullScreenModal", headerShown: false }}></StackNavigator.Screen>
          </StackNavigator.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
