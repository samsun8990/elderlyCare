import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartPage from "./components/Pages/StartPage/StartPage";
import BottomTabs from "./components/Utils/BottomTabs";

const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Tabs"
        >
          <Stack.Screen name="StartPage" component={StartPage} />

          <Stack.Screen options={{ headerShown: false }} name="Tabs" component={BottomTabs} />

        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    justifyContent: "space-between",
    width: windowWidth,
    height: windowHeight,
  },
})
