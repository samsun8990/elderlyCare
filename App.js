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
import Notification from "./components/Pages/Notifications/Notification";
import LoginUser from "./components/Pages/StartPage/Login/LoginUser";
import ElderlyRegister from "./components/Pages/StartPage/Register/ElderlyRegister";
import VolunteerRegister from "./components/Pages/StartPage/Register/VolunteerRegister";

const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartPage"
        >

         
          <Stack.Screen name="StartPage" component={StartPage} options={{ headerShown: false }} />

          <Stack.Screen name='LoginUser' component={LoginUser} options={{ title: 'Login' }} />

          <Stack.Screen options={{ headerShown: false }} name="Tabs" component={BottomTabs} />
          <Stack.Screen name='ElderlyRegister' component={ElderlyRegister} options={{ title: 'Elderly registration' }} />
        
          <Stack.Screen name='VolunteerRegister' component={VolunteerRegister} options={{ title: 'Volunteer registration' }} />
          
          
          <Stack.Screen name="Invitations" component={Invitations} />
          <Stack.Screen name="Suggestions" component={Suggestions} />
          <Stack.Screen name="RequestedVolunteers" component={Suggestions} />
          <Stack.Screen name="Feedback" component={FeedbackPage} options={{ title: "Give Feedback" }} />
          <Stack.Screen name="RequestPage" component={RequestPage} />
          <Stack.Screen name="Notification" component={Notification} />

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
