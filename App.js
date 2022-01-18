import { StyleSheet, Text, View, SafeAreaView } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Products } from "./src/pages/Products"
import { Detail } from "./src/pages/Detail"
import { Login } from "./src/pages/Login"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{
            title: "Login",
            headerStyle: {
              backgroundColor: "#64b5f6",
            },
            headerTitleStyle: {
              color: "white",
            },
          }}
        />
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: "Dukkan",
            headerStyle: {
              backgroundColor: "#64b5f6",
            },
            headerTitleStyle: {
              color: "white",
            },
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: "Detay",
            headerStyle: {
              backgroundColor: "#64b5f6",
            },
            headerTitleStyle: {
              color: "white",
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
