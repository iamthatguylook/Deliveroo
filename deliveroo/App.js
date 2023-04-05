import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home";

const StackNavigator = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <StackNavigator.Navigator>
          <StackNavigator.Screen name="Home" component={HomeScreen}></StackNavigator.Screen>
        </StackNavigator.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
