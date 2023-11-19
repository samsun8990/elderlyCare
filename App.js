import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartPage from "./components/Pages/StartPage/StartPage";
import BottomTabs from "./components/Utils/BottomTabs";
import Invitations from "./components/Pages/Network/Invitations";
import Suggestions from "./components/Pages/Network/Suggestions";
import FeedbackPage from "./components/Pages/Volunteers/FeedbackPage";
import RequestPage from "./components/Pages/Volunteers/RequestPage";

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
        

          <Stack.Screen options={{ headerShown: false }} name="Tabs" component={BottomTabs} />

          <Stack.Screen name="StartPage" component={StartPage} />
          <Stack.Screen name="Invitations" component={Invitations} />
          <Stack.Screen name="Suggestions" component={Suggestions} />
          <Stack.Screen name="RequestedVolunteers" component={Suggestions} />
          <Stack.Screen name="Feedback" component={FeedbackPage} options={{title:"Give Feedback"}}/>
          <Stack.Screen name="RequestPage" component={RequestPage} />

        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4EDF2",
    justifyContent: "space-between",
    width: windowWidth,
    height: windowHeight,
  },
})
