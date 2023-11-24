import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { createContext, useState, useEffect } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartPage from "./components/Pages/StartPage/StartPage";
import Invitations from "./components/Pages/Network/Invitations";
import Suggestions from "./components/Pages/Network/Suggestions";
import FeedbackPage from "./components/Pages/Volunteers/FeedbackPage";
import RequestPage from "./components/Pages/Volunteers/RequestPage";
import Notification from "./components/Pages/Notifications/Notification";
import LoginUser from "./components/Pages/StartPage/Login/LoginUser";
import ElderlyRegister from "./components/Pages/StartPage/Register/ElderlyRegister";
import { FontAwesome } from 'react-native-vector-icons'
import VolunteerRegister from "./components/Pages/StartPage/Register/VolunteerRegister";
import { readUser } from "./components/Config/dbcls";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./components/Config/AuthContext";
import { auth, db } from "./components/Config/config";
import ElderBottomTabs from "./components/Utils/BottomTabs";
import VolunteerBottomTabs from "./components/Utils/VolunteerBottomTabs";
import { doc, setDoc, getDocs, getDoc, collection, deleteDoc, addDoc } from "firebase/firestore";
import ElderHome from "./components/Pages/Home/Home";


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
  const [elderUser, setElderUser] = useState(null);
  const [volunteerUser, setVolunteerUser] = useState(null);

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((result) => {

          readUser(result.user.uid, "elderlyUsers", "volunteerUsers", setElderUser, setVolunteerUser)
          setUser(result.user)
          console.log("Login Success");
          alert("Login Success!")
        }
        )
        .catch((error) => { console.log(error); alert(error.message) })
    } catch (error) {
      console.error('Error signing in:', error);

    }
  };



  const signOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
      setElderUser(null)
      setVolunteerUser(null)
      console.log("Signout Success");
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  useEffect(() => {
    let unsubscribe = () => { }
    // Check if a user is already authenticated
    const authSubscribe = auth.onAuthStateChanged((authenticatedUser) => {

      unsubscribe()
      if (authenticatedUser) {
        // console.log(authenticatedUser);
        setUser(authenticatedUser)
        readUser(authenticatedUser.uid, "elderlyUsers", "volunteerUsers", setElderUser, setVolunteerUser)
      }
    })
    return () => {
      unsubscribe()
      authSubscribe()
    }
  }, [user]);




  return (
    <SafeAreaView style={styles.container}>
      <AuthContext.Provider value={{ user, signIn, signOut, elderUser, volunteerUser }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="StartPage"
          >

            <Stack.Screen name="StartPage" component={StartPage} options={{ headerShown: false }} />

            <Stack.Screen name='LoginUser' component={LoginUser}
              options={{ headerTitle: (props) => <CenteredTitle title="Signin to Elderly Care" {...props} /> }} />


            <Stack.Screen name='ElderlyRegister' component={ElderlyRegister}
              options={{
                headerTitle: (props) => <CenteredTitle title="Create User Account" {...props} />
              }} />

            <Stack.Screen name='VolunteerRegister' component={VolunteerRegister}
              options={{
                headerTitle: (props) => <CenteredTitle title="Create Volunteer Account" {...props} />
              }} />

            <Stack.Screen options={{ headerShown: false }} name="elderTabs" component={ElderBottomTabs} />

            <Stack.Screen options={{ headerShown: false }} name="volunteerTabs" component={VolunteerBottomTabs} />

            <Stack.Screen name="ElderHome" component={ElderHome} />
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
