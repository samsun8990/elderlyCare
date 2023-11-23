import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React, { createContext, useState, useEffect } from 'react';
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
// import VolunteerRegister from "./components/Pages/StartPage/Register/VolunteerRegister";
import { FontAwesome } from 'react-native-vector-icons'
import VolunteerRegister from "./components/Pages/StartPage/Register/VolunteerRegister";
import dbcls from "./components/Config/dbcls";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./components/Config/AuthContext";
import { auth } from "./components/Config/config";
// import auth from "firebase/auth";


const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;



const CenteredTitle = ({ title, props }) => {
  return (
    <View style={styles.headerTitle}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if a user is already authenticated
    const unsubscribe = auth.onAuthStateChanged((authenticatedUser) => {
      setUser(authenticatedUser);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth,email, password)
      .then(()=>{ console.log("Login Success"); return "Success"})
      if(userCredential){
        setUser(userCredential.user);
      }
     
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const signOut = async () => {
    try {
      await auth().signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

//   if(user){
//     console.log(user.uid,"user");
// }


  return (
    <SafeAreaView style={styles.container}>
      <AuthContext.Provider value={{user,signIn,signOut}}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="StartPage"
          >

            <Stack.Screen name="StartPage" component={StartPage} options={{ headerShown: false }} />

            <Stack.Screen name='LoginUser' component={LoginUser}
              options={{ headerTitle: (props) => <CenteredTitle title="Signin to Elderly Care" {...props} /> }} />

            <Stack.Screen options={{ headerShown: false }} name="Tabs" component={BottomTabs} />

            <Stack.Screen name='ElderlyRegister' component={ElderlyRegister}
              options={{
                headerTitle: (props) => <CenteredTitle title="Create User Account" {...props} />
              }} />

            <Stack.Screen name='VolunteerRegister' component={VolunteerRegister}
              options={{
                headerTitle: (props) => <CenteredTitle title="Create Volunteer Account" {...props} />
              }} />


            <Stack.Screen name="Invitations" component={Invitations} />
            <Stack.Screen name="Suggestions" component={Suggestions} />
            <Stack.Screen name="RequestedVolunteers" component={Suggestions} />
            <Stack.Screen name="Feedback" component={FeedbackPage} options={{ title: "Give Feedback" }} />
            <Stack.Screen name="RequestPage" component={RequestPage} />
            <Stack.Screen name="Notification" component={Notification} />

          </Stack.Navigator>
        </NavigationContainer>

      </AuthContext.Provider>


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
  headerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: "#1B5B7D",
    textAlign: "center"
  },
})
