import { Text, View, TextInput, StyleSheet } from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import { StackScreen } from "react-native-screens";
import { Stack } from "expo-router";
import Calculator from "@/Components/Calculator";



export default function Index() {
  return (
    <>
    < Stack.Screen options={{title: "Calculadora"}} />
    <Calculator />
    </>
  );
}
